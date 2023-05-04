import axios, { AxiosInstance } from 'axios'

import { rlRequestConfig, rlRequestInterceptor } from './types'

/**
 * @description: 封装axios
 * @param {rlRequestConfig} config
 * @return {*} 实例
 * @example
 * ```ts
 * import { rlRequest } from 'rl-request'
 * const request = new rlRequest({ baseURL: '/', timeout: 1000 ,interceptors:{requestInterceptor:config=>config,responseInterceptor:data=>data,requestInterceptorCatch:err=>err,responseInterceptorCatch:err=>err}})
 * request.get('/get')
 * request.post('/post')
 * request.delete('/delete')
 * request.patch('/patch')
 * request.put('/put')
 * ```
 */
class rlRequest {
  instance: AxiosInstance
  interceptors?: rlRequestInterceptor
  constructor(config: rlRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (error) => {
        return error
      }
    )
  }
  request<T>(config: rlRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //某个特定请求传入的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance.request<any, T>(config).then(
        (res) => {
          //某个特定响应传入的拦截器
          if (config.interceptors?.responseInterceptor) {
            config = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        },
        (err) => {
          reject(err)
        }
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
export { rlRequest }
