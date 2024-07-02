// let BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_PROD_API_URL : import.meta.env.VITE_DEV_API_URL;

// let BASE_URL = import.meta.env.VITE_PROD_API_URL;

let endpoints = {
	Auth: {
		login: `/api/auth/login`,
	},
	User: {
		mainUrl: `/api/user`,
	},
	PropertyRequests: {
		mainUrl: `/api/property-request`,
	},
	HotelRequests: {
		mainUrl: `/api/hotel-request`,
	},
	Agents: {
		mainUrl: `/api/agents`,
	},
	DiasporaPropertyListings: {
		mainUrl: '/api/diaspora/property-listings',
	},
	PropertyListings: {
		mainUrl: `/api/property-listings`,
	},
	Consultations: {
		mainUrl: '/api/consultations',
	},
};

export { endpoints };
