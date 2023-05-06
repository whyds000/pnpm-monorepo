interface Result<T = any> {
  code: number
  message: number
  data: T
}
interface listData<T = any[]> {
  list: T
  total: number
}
interface PageListResult<T> {
  code: number
  message: number
  data: listData<T>
}
interface pageQuery {
  current: number
  size: number
  [key: string]: number
}
export type{
  Result,
  PageListResult,
  pageQuery,
}
