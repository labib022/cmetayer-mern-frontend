// src/redux/features/cms/cmsApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cmsApi = createApi({
  reducerPath: "cmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, ""),
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({

    // ✅ Home page — সব sections একসাথে
    // Response: data.data.home.hero[], data.data.home["Our Values"][], etc.
    getHomePage: builder.query({
      query: () => `/cms/?page_name=home`,
    }),

    // ✅ FAQs (backend public করলে কাজ করবে)
    getFaqs: builder.query({
      query: () => "/faqs/",
    }),

    // ✅ About System
    getAboutSystem: builder.query({
      query: () => "/about-system/",
    }),

    // ✅ Contact Us
    contactUs: builder.mutation({
      query: (data) => {
        const fd = new FormData();
        fd.append("name", data.name);
        fd.append("email", data.email);
        fd.append("purpose", data.purpose);
        fd.append("message", data.message);
        return { url: "/contact-us/", method: "POST", body: fd };
      },
    }),

  }),
});

export const {
  useGetHomePageQuery,
  useGetFaqsQuery,
  useGetAboutSystemQuery,
  useContactUsMutation,
} = cmsApi;