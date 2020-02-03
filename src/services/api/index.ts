import { apiAddress } from 'constants/api';
import HttpError from './HttpError';

type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export class API {
  private baseUrl = apiAddress;
  private defaultOptions: RequestInit = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

  private request(method: FetchMethod, endpoint: string, data: any, options: RequestInit = {}) {
    const url = endpoint.startsWith('http')
      ? endpoint
      : `${this.baseUrl}${endpoint}`;
    const mergedOptions: RequestInit = {
      ...this.defaultOptions,
      ...options,
      method,
      body: data && JSON.stringify(data),
    };
    return fetch(url, mergedOptions).then((response) => {
      return Promise.all([
        response, 
        response.json(),
      ]);
    }).then(([response, body]) => {
      if (!response.ok) {
        throw new HttpError({
          status: response.status,
          statusText: response.statusText,
          body,
        });
      }
      return body;
    })
  }

  get(endpoint: string, options?: RequestInit) {
    return this.request('GET', endpoint, undefined, options);
  }

  post(endpoint: string, data: any, options?: RequestInit) {
    return this.request('POST', endpoint, data, options);
  }

  put(endpoint: string, data: any, options?: RequestInit) {
    return this.request('PUT', endpoint, data, options);
  }

  delete(endpoint: string, options?: RequestInit) {
    return this.request('DELETE', endpoint, undefined, options);
  }

}

const api = new API();
export default api;