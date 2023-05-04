let BASE_URL = ''
const TIME_OUT_MESSAGE = '请求超时'
const TIME_OUT = 10000
if ('development'===process.env.NODE_ENV ) {
  BASE_URL = '/api'
}else if ('production'===process.env.NODE_ENV ) {
  BASE_URL = ''
}
export {TIME_OUT,TIME_OUT_MESSAGE,BASE_URL}