import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import {version} from  './package.json'
const fileName = `guage-image.${version}`
const libName = 'GuageImage'
export default defineConfig({
    plugins:[vue(),dts()],
    build:{
        lib:{
            entry:'./src/index.ts',
            name:libName,
            fileName:fileName,
            formats:['umd']
        },
        rollupOptions:{
            external:['vue'],
            output:{
                globals: {
                    vue: 'Vue'
                  },
                  // Indicate which modules should be treated as external
                  // https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
                  externalLiveBindings: false,
                  // Provide a global name for your UMD build
                  name: libName,
                  format: 'umd'
            }
        }
    },
})