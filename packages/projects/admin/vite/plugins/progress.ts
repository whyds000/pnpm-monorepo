/**
 * @name ConfigProgressPlugin
 * @description 构建显示进度条
 */

import progress from 'vite-plugin-progress'

export function ConfigProgressPlugin() {
  return progress()
}
