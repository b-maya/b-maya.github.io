import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindcss from '@tailwindcss/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
    base: '/',
    plugins: [
        vue(),
        viteStaticCopy({
            targets: [
                {
                    src: 'dist/index.html', // copy after build
                    dest: '', // place it in dist/ root
                    rename: '404.html', // rename it
                },
            ],
            hook: 'writeBundle', // ensures it copies after build finishes
        }),
        vueDevTools(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
