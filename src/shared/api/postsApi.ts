import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getOnePost: build.query({
      query: (id) => `posts/${id}`,
      providesTags: (id) => [{ type: "Post", id }],
    }),
    getPosts: build.query<IPost[], { limit: number; start: number }>({
      query: ({ limit = 25, start = 0 }) => ({
        url: "/posts",
        params: {
          _limit: limit,
          _start: start,
        },
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetOnePostQuery } = postsApi;
