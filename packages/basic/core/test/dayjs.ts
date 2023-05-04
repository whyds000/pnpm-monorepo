import { describe, expect, it } from 'vitest'
import {format,utcToDateTimeFormat,DateToUtc} from '../utils'

describe('dayjs', () => {
    it('format date', () => {
        //测试format
        expect(format(new Date(2023,4,4,17,55,31,660),'YYYY-MM-DD HH:mm:ss')).toBe('2023-05-04 17:55:31')

    })
    it('utc format', () => {
        //测试utcToDateTimeFormat
        expect(utcToDateTimeFormat('2021-05-04T08:00:00.000Z','YYYY-MM-DD HH:mm:ss')).toBe('2021-05-04 16:00:00')
    })
    it ('date to utc', () => {
        //测试DateToUtc
        expect(DateToUtc(new Date(2021,4,4,17,55,31,660))).toBe('2021-05-04T09:55:31Z')
    })
})