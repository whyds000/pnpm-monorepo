/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import { resolve } from 'node:path'
import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VitePluginCertificate from 'vite-plugin-mkcert'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import Pages from 'vite-plugin-pages'
import { AutoRegistryComponents } from './component'
import { AutoImportDeps } from './autoImport'
import { ConfigCompressPlugin } from './compress'

import { ConfigRestartPlugin } from './restart'
import { ConfigProgressPlugin } from './progress'

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    // setup语法糖组件名支持
    vueSetupExtend(),
    // 提供https证书
    VitePluginCertificate({
      source: 'coding',
    }),
    Pages({
      dirs: [
        { dir: resolve(__dirname, '../../src/pages'), baseRoute: '' },
      ],
      extensions: ['vue', 'md', 'jsx'],
    }),
  ]

  // 自动按需引入组件
  vitePlugins.push(AutoRegistryComponents())

  // 自动按需引入依赖
  vitePlugins.push(AutoImportDeps())

  // 监听配置文件改动重启
  vitePlugins.push(ConfigRestartPlugin())

  // 构建时显示进度条
  vitePlugins.push(ConfigProgressPlugin())

  if (isBuild) {
    // 开启.gz压缩  rollup-plugin-gzip
    vitePlugins.push(ConfigCompressPlugin())
  }

  return vitePlugins
}
