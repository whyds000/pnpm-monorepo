const TIME_OUT_MESSAGE = '请求超时'
const TIME_OUT = 10000

const BASE_URL = process.env.NODE_ENV === 'development' ? '/api' : ''
export { TIME_OUT, TIME_OUT_MESSAGE, BASE_URL }
