let BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_PROD_API_URL : import.meta.env.VITE_DEV_API_URL;

let endpoints = {
    Auth: {
        login: `${BASE_URL}/api/auth/login`,
    },
    User: {
        mainUrl: `${BASE_URL}/api/user`,
    },
    PropertyRequests: {
        mainUrl: `${BASE_URL}/api/property-request`,
    },
    HotelRequests: {
        mainUrl: `${BASE_URL}/api/hotel-request`,
    },
    Agents: {
        mainUrl: `${BASE_URL}/api/agents`,
    },
    PropertyListings: {
        mainUrl: `${BASE_URL}/api/property-listings`,
    },
}

export { BASE_URL, endpoints}