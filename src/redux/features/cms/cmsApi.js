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

    // ✅ Home page
    getHomePage: builder.query({
      query: () => `/cms/?page_name=home`,
    }),

    // ✅ About Us page
    getAboutUsPage: builder.query({
      query: () => `/cms/?page_name=about_us`,
    }),

    // ✅ Service pages — moving, cleaning, laundry, repair
    // Usage: useGetServicePageQuery("moving")
    getServicePage: builder.query({
      query: (pageName) => `/cms/?page_name=${pageName}`,
    }),

    // ✅ FAQs (standalone)
    getFaqs: builder.query({
      query: () => "/faqs/",
    }),

    // ✅ About System — footer, contact info
    getAboutSystem: builder.query({
      query: () => "/about-system/",
    }),

    // ✅ Contact Us (POST)
    contactUs: builder.mutation({
      query: (data) => {
        const fd = new FormData();
        fd.append("name", data.name);
        fd.append("email", data.email);
        fd.append("purpose", data.purpose || "general_inquiry");
        fd.append("message", data.message);
        return { url: "/contact-us/", method: "POST", body: fd };
      },
    }),

    // ✅ Quote Submission (POST)
    submitQuote: builder.mutation({
      query: (data) => {
        const fd = new FormData();
        fd.append("name", data.name);
        fd.append("email", data.email);
        fd.append("phone", data.phone || "");
        fd.append("service", data.service || "");
        fd.append("message", data.message);
        return {
          url: "/cms/?page_name=home&section_name=quote_submission",
          method: "POST",
          body: fd,
        };
      },
    }),

  }),
});

export const {
  useGetHomePageQuery,
  useGetAboutUsPageQuery,
  useGetServicePageQuery,
  useGetFaqsQuery,
  useGetAboutSystemQuery,
  useContactUsMutation,
  useSubmitQuoteMutation,
} = cmsApi;