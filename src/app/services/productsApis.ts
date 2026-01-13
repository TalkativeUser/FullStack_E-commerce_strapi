import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import cookieService from "../../services/cookieService";
import { ProductData } from "../../interfaces";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
  }),

  tagTypes: ["Products"],

  endpoints: (builder) => ({
    getDashboardProducts: builder.query({
      query: (arg) => {
        const { page } = arg;
        return {
          url: `/api/products?populate=category,thumbnail&pagination[page]=${page}&pagination[pageSize]=7`,
        };
      },
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map((item: ProductData) => ({
                type: "Products" as const,
                id: item.id,
              })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),

    deleteDashProduct: builder.mutation({
      query(id: number) {
        console.log("deleted item id => ", id);
        return {
          url: `/api/products/`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${cookieService.get("jwt")}`,
          },
        };
      },
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),


    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/products/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${cookieService.get("jwt")}`,
        },
        body: { data },
      }),

      invalidatesTags: (result, error, { id }) => [{ type: "Products", id }],
    }),


    createProduct: builder.mutation({
      query: (data) => ({
        url: `/api/products`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${cookieService.get("jwt")}`,
        },
        body: { data },
      }),

      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),
  }),
});

export const { useGetDashboardProductsQuery, useDeleteDashProductMutation , useUpdateProductMutation } =
  apiSlice;
