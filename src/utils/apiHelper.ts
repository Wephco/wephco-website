import axios from "axios";

export class ApiHelper {
  public static instance: ApiHelper;
  public constructor() {}

  public static getInstance(): ApiHelper {
    if (!ApiHelper.instance) {
      ApiHelper.instance = new ApiHelper();
    }

    return ApiHelper.instance;
  }

  public async get(url: string, token: string): Promise<any> {
    const response =  await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if(response.status !== 200) {
        throw new Error(response.statusText);
    }

    return response.data;
  }

    public async post(url: string, data: any, token?: string): Promise<any> {
        const response =  await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
        if(response.status !== 200) {
            throw new Error(response.statusText);
        }
    
        return response.data;
    }

    public async put(url: string, data: any, token: string): Promise<any> {
        const response =  await axios.put(url, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
        if(response.status !== 200) {
            throw new Error(response.statusText);
        }
    
        return response.data;
    };

    public async delete(url: string, token: string): Promise<any> {
        const response =  await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
        if(response.status !== 200) {
            throw new Error(response.statusText);
        }
    
        return response.data;
    };

}