import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios';
import { config as configBase } from 'config';
import { Any } from 'types';

export const INITIAL_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export class Api {
  static instance: Api;
  axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: configBase.API_URI,
      headers: INITIAL_HEADERS,
    });
  }

  static getInstance(): typeof Api.instance {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }
  static getAxios(): AxiosInstance {
    return Api.getInstance().axiosInstance;
  }

  static setAccessToken(token: string | null): void {
    (Api.getAxios().defaults.headers.common.token as Any) = token;
  }

  static clearAccessToken(): void {
    delete Api.getAxios().defaults.headers.common.token;
  }

  static get<T>(
    url: string,
    params: object = {},
    config: AxiosRequestConfig = {},
  ): AxiosPromise<T> {
    return Api.getAxios().get<T>(url, { params, ...config });
  }
  static post<T>(url: string, data?: object, config?: AxiosRequestConfig): AxiosPromise<T> {
    return Api.getAxios().post<T>(url, data, config);
  }
  static patch<T>(url: string, data?: object, config?: AxiosRequestConfig): AxiosPromise<T> {
    return Api.getAxios().patch<T>(url, data, config);
  }
  static put<T>(url: string, data?: object, config?: AxiosRequestConfig): AxiosPromise<T> {
    return Api.getAxios().put<T>(url, data, config);
  }
  static delete<T>(url: string, data?: object): AxiosPromise<T> {
    return Api.getAxios().delete<T>(url, data);
  }
}
export default Api;
