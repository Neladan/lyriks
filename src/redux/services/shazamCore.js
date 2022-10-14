import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


  export const shazamCoreApi = createApi ({
    reducerPath: 'shazamCore',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '5534fc8295msh1d2558ba57d04a2p1d4facjsnaffff94ed884');

        return headers;
      },
    }),

    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => '/charts/world' }),
    })
  });

  export const {useGetTopChartsQuery,} = shazamCoreApi;