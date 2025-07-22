import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from './store';
export const apiSlice = createApi({
  reducerPath: 'api', // A unique key to identify this API slice in the Redux store
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
  }),
});

export const {useGetPostsQuery} = apiSlice;

// const posts = useSelector((state: RootState) =>
//     apiSlice.endpoints.getPosts.select()(state)
// );

// Create a selector for the `getPosts` endpoint
// export const selectPostsResult = apiSlice.endpoints.getPosts.select();

// Create a memoized selector for global access to data
// export const selectAllPosts = (state: RootState) =>
//   selectPostsResult(state)?.data ?? [];
