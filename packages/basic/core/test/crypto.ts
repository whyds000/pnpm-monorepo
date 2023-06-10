import { describe, expect, it } from 'vitest'
import { decrypt, encrypt, md5 } from '../utils'

describe('crypto', () => {
  it('encrypt and decrypt', () => {
    // 测试encrypt和decrypt
    expect(encrypt('123456')).toBe('U2FsdGVkX1+X1Q2Z4Q1Q4Q==')
    expect(decrypt('U2FsdGVkX1+X1Q2Z4Q1Q4Q==')).toBe('123456')
  })
  it('md5', () => {
    // 测试md5
    expect(md5('123456')).toBe('e10adc3949ba59abbe56e057f20f883e')
  })
})
