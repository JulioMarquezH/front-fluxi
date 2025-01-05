import axios from 'axios'

export const axiosInstanceFluxi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_FLUXI_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})