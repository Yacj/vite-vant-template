import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssViewport from 'postcss-px-to-viewport'
import Components from 'unplugin-vue-components/vite'
import {
    VantResolver,
} from 'unplugin-vue-components/resolvers'
import styleImport, {
    VantResolve,
} from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            // ui库解析器，也可以自定义
            resolvers: [
                VantResolver(),
            ]
        }),
        styleImport({
            resolves: [
                VantResolve(),
            ],
            // 自定义规则
            libs: [
                {
                    libraryName: 'vant',
                    esModule: true,
                    resolveStyle: (name) => `vant/es/${name}/style`,
                },
            ],
        })
    ],
    build: {
        minify: 'terser', // 混淆器，terser构建后文件体积更小
    },
    server: {
        host: '0.0.0.0',
        cors: true, // 默认启用并允许任何源
        open: true, // 在服务器启动时自动在浏览器中打开应用程序
        //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
        // proxy: {
        //     '/api': {
        //         target: '',   //代理接口
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, '')
        //     }
        // }
    },
    css: {
        postcss: {
            plugins: [
                postcssViewport({
                    viewportWidth: 375,
                    unitPrecision: 6,
                    unitToConvert: 'px',
                    propList: ['*'],
                })
            ]
        }
    },
})
