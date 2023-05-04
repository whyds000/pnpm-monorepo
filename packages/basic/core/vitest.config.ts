

import { defineConfig } from 'vitest/config'
export default defineConfig({
    test:{
        //当前路径下的test文件夹
        include:['./test/*.ts'],
        environment:'happy-dom',      
    }
})
