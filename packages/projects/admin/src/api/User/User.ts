import { http } from '..'
import type { PageListResult, Result, pageQuery } from '../types'
import { Base } from '../Base/Base'

interface userItem {
  name: string
  age: number
  sex: string
}
class User extends Base {
  constructor() {
    super('/user')
  }

  // 避免this问题,使用箭头
  getAll = (query: pageQuery) => {
    return http.get<PageListResult<userItem[]>>({
      url: `${this.apiBaseUrl}/getAll?current=${query.current}&size=${query.size}`,
      interceptors: {
        responseInterceptor(data) {
          return data
        },

      },

    })
  }

  getById = (id: string) => {
    return http.get<Result<userItem>>({
      url: `${this.apiBaseUrl}/getById?id=${id}`,
    })
  }
}
const { getAll, getById } = new User()
export { getAll, getById }
export type { userItem }
