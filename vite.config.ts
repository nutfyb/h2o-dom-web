import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, resolve, URL } from 'url'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	plugins: [
		vue(),
		VueI18nPlugin({
			// include: [resolve(__dirname, './langs/**')],
			include: [resolve(fileURLToPath(import.meta.url), './langs/**')],
			runtimeOnly: false,
		}),
	],
})
