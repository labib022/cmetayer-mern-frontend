// src/redux/features/cms/cmsApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cmsApi = createApi({
  reducerPath: "cmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({

    // ✅ CMS Section — page_name + section_name দিয়ে সব section আনা
    // Usage: getCmsSection({ page_name: "home", section_name: "hero" })
    getCmsSection: builder.query({
      query: ({ page_name, section_name }) =>
        `/cms/?page_name=${page_name}&section_name=${section_name}`,
    }),

    // ✅ FAQs
    getFaqs: builder.query({
      query: () => "/faqs/",
    }),

    // ✅ About System
    getAboutSystem: builder.query({
      query: () => "/about-system/",
    }),

    // ✅ Contact Us (POST)
    contactUs: builder.mutation({
      query: (data) => {
        const fd = new FormData();
        fd.append("name", data.name);
        fd.append("email", data.email);
        fd.append("purpose", data.purpose); // general_inquiry | support | feedback | refund_request | others
        fd.append("message", data.message);
        return { url: "/contact-us/", method: "POST", body: fd };
      },
    }),

  }),
});

export const {
  useGetCmsSectionQuery,
  useGetFaqsQuery,
  useGetAboutSystemQuery,
  useContactUsMutation,
} = cmsApi;