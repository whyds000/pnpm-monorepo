import { describe, expect, it } from 'vitest'
import { localUtils, sessionUtils } from '../utils'

describe('cache', () => {
  // 测试localUtils
  it('localUtils', () => {
    localUtils.setItem('localTest', 'local')
    expect(localUtils.getItem('localTest')).toBe('local')
    localUtils.removeItem('localTest')
    expect(localUtils.getItem('localTest')).toBe(null)
    localUtils.clear()
  })
  // 测试sessionUtils
  it('sessionUtils', () => {
    sessionUtils.setItem('sessionTest', 'session')
    expect(sessionUtils.getItem('sessionTest')).toBe('session')
    sessionUtils.removeItem('sessionTest')
    expect(sessionUtils.getItem('sessionTest')).toBe(null)
    sessionUtils.clear()
  })
})
