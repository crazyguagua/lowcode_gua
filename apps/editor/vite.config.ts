import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import path  from 'path'

export default defineConfig({
    plugins:[vue(),Pages()],
    resolve:{
        alias:{
            '~':path.resolve(__dirname,'src'),
            '@':path.resolve(__dirname,'src'),
            'components':path.resolve(__dirname,'src/components'),
        },
        extensions:['.js','.ts','.vue','.json','.tsx']
    },
    server:{
        hmr:{

        }
    }
})