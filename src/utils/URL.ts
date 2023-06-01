let BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_PROD_API_URL : import.meta.env.VITE_DEV_API_URL;

let endpoints = {
    Auth: {},
    User: {},
    PropertyRequests: {},
    HotelRequests: {},
    Agents: {},
    PropertyListings: {},
}

export { BASE_URL, endpoints}