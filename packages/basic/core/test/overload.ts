import { describe, expect, it } from 'vitest'
import { createOverload } from '../utils'
const getUser = createOverload()

getUser.add(() => {
  return '获取所有用户'
})

function pageSearch(current: number, size = 10) {
  return `当前页${current},每页${size}`
}

getUser.add('number', pageSearch)

getUser.add('number', 'number', pageSearch)

getUser.add('string', (name: string) => {
  return `获取用户${name}`
})

getUser.add('string', 'number', (name: string, age: number) => {
  return `获取用户${name},年龄${age}`
})
describe('overload', () => {
  
  it('getUser', () => {
    expect(getUser()).toBe('获取所有用户')
    expect(getUser(1)).toBe('当前页1,每页10')
    expect(getUser(1, 20)).toBe('当前页1,每页20')
    expect(getUser('张三')).toBe('获取用户张三')
    expect(getUser('张三', 20)).toBe('获取用户张三,年龄20')
  })

  
})
