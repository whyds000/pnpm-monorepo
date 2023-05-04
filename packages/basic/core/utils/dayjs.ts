import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const _template='YYYY-MM-DD HH:mm:ss'


/**
 * 
 * @param date 日期
 * @param template 模板 默认为YYYY-MM-DD HH:mm:ss
 * @returns   格式化后的日期
 * @description 日期格式化
 * @example 
 * ```ts
 * format(new Date(),'YYYY-MM-DD HH:mm:ss')
 * ```
 */
export const format = (
    date?: Date,
    template: string = _template
  ): string => {
    return dayjs(date).format(template)
  }
  

/**
 * 
 * @param utcDate utc日期
 * @param format 格式化模板 默认为YYYY-MM-DD HH:mm:ss
 * @returns 格式化后的日期
 * @description utc日期格式化
 * @example
 * ```ts
 * utcFormat('2021-05-04T08:00:00.000Z','YYYY-MM-DD HH:mm:ss')
 * ```
 */
export function utcToDateTimeFormat(utcDate: string, format: string =_template) {
    return dayjs.utc(utcDate).utcOffset(8).format(format)
}

//给DateToUtc函数添加注释
/**
 *  @param Date 日期
 * @returns 格式化后的日期
 * @description 日期转utc
 * @example
 * ```ts
 * DateToUtc(new Date())
 * ```
 */ 
export function DateToUtc(Date: Date) {
  return dayjs(Date).utc().format()
}