import { AxiosRequestConfig, AxiosResponse } from 'axios'
interface rlRequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface rlRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: rlRequestInterceptor<T>
}
export type { rlRequestConfig, rlRequestInterceptor }
