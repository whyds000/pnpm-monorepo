import {describe,expect,it} from 'vitest'
import {calculator} from '../utils'

describe('calculator', () => {

  it('add', () => {
    expect(calculator.add('1', '2')).toBe('3.00')
  })

  it('subtract', () => {
    expect(calculator.subtract('1', '2')).toBe('-1.00')
  })
  it('multiply', () => {
    expect(calculator.multiply('1', '2')).toBe('2.00')
  })
  it('divide', () => {
    expect(calculator.divide('1', '2',4)).toBe('0.5000')
  })

})
