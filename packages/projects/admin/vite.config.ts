import { ConfigEnv,  UserConfig } from 'vite'

import { createVitePlugins } from './vite/plugins'
import { resolve } from 'path';
// https://vitejs.dev/config/
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({ command }: ConfigEnv):UserConfig=>{
  const isBuild = command === 'build';
  return {
    resolve:{
      alias:{
        '@':pathResolve('src') + '/'
      }
    },
    plugins: createVitePlugins(isBuild),
    css:{},
    server: {
      host: '0.0.0.0', // 指定服务器主机名
      port: 3021, // 指定服务器端口
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      strictPort: false, // 设为 false 时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
      https: false, // 是否开启 https
      cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源
    },
    build:{
      
    }
  }
}