import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '428fe3c6ddmsh7e72883b7f25d4cp16f135jsn507cc668fabb'


}

const baseUrl='https://coinranking1.p.rapidapi.com';
const createRequest=(url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi= createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`),

        }),
        getCryptoHistory:builder.query({
            query:({coinId,TimePeriod})=>createRequest(`/coin/${coinId}/history/${TimePeriod}`),

        })
    })
    
})

export const{
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery
}=cryptoApi;