import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: '~', replacement: '/src' }],
    },
    css: {
        modules: {
            generateScopedName: '[name]_[local]_[hash:8]',
        },
    },
});
