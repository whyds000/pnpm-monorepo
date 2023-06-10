import { describe, expect, it } from 'vitest'
import { generateUUID } from '../utils'

// 测试生成uuid
describe('uuid', () => {
  it('generateUUID', () => {
    // 测试长度
    expect(generateUUID().length).toBe(36)
    // 测试是否为字符串
    expect(typeof generateUUID()).toBe('string')

    expect(generateUUID()).toBe('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
  })
})
