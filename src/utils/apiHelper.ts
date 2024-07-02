import axios, { AxiosResponse } from 'axios';

class ApiHelper {
	private axiosInstance = axios.create({
		baseURL: import.meta.env.VITE_PROD_API_URL,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	async getData(url: string, token: string): Promise<any> {
		try {
			const response: AxiosResponse = await this.axiosInstance.get(url, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return response.data;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}

	async postData(url: string, data: any, token?: string): Promise<any> {
		try {
			const response: AxiosResponse = await this.axiosInstance.post(url, data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return response.data;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}

	async putData(url: string, data: any, token: string): Promise<any> {
		try {
			const response: AxiosResponse = await this.axiosInstance.put(url, data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return response.data;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}

	async deleteData(url: string, token: string): Promise<any> {
		try {
			const response: AxiosResponse = await this.axiosInstance.delete(url, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return response.data;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}
}

export default ApiHelper;
