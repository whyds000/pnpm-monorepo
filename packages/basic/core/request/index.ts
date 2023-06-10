import type { AxiosInstance } from 'axios'
import axios from 'axios'

import type { rlRequestConfig, rlRequestInterceptor } from './types'

class RlRequest {
  instance: AxiosInstance
  interceptors?: rlRequestInterceptor
  constructor(config: rlRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    )
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      },
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (error) => {
        return error
      },
    )
  }

  request<T>(config: rlRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 某个特定请求传入的拦截器
      if (config.interceptors?.requestInterceptor)
        config = config.interceptors.requestInterceptor(config) as rlRequestConfig<T>

      this.instance.request<any, T>(config).then(
        (res) => {
          // 某个特定响应传入的拦截器
          if (config.interceptors?.responseInterceptor)
            config.interceptors.responseInterceptor(res)

          resolve(res)
        },
        (err) => {
          reject(err)
        },
      )
    })
  }

  get<T>(config: rlRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: rlRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T>(config: rlRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: rlRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }

  put<T>(config: rlRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PUT' })
  }
}
export { RlRequest }
