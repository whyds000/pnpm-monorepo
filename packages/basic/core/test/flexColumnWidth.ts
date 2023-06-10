import { describe, expect, it } from 'vitest'
import { flexColumnWidth } from '../utils'

interface TableData {
  name: string
  age: number
  startTime: string
}
const tableData: TableData[] = [
  {
    name: '张三',
    age: 18,
    startTime: '2021-05-04T08:00:00.000Z',
  },
]
const flexColumnWidthTest = flexColumnWidth<TableData>(tableData)

describe('flexColumnWidth', () => {
  // 测试flexColumnWidth
  it('flexColumnWidth', () => {
    expect(flexColumnWidthTest('startTime', '开始时间')).toBe('25px')
  })
})
