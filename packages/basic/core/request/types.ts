import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

interface rlRequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: InternalAxiosRequestConfig<any>) => (InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>)
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface rlRequestConfig<T = AxiosResponse> extends InternalAxiosRequestConfig<any> {
  interceptors?: rlRequestInterceptor<T>
}
export type { rlRequestConfig, rlRequestInterceptor }
