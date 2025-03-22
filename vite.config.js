import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

	server: {
		host: true, // This makes the app accessible to devices on the same network
		port: 5173 // You can change this to any unused port
	  },
	plugins: [
		react()
	],
	base: '/',
	build: {
		outDir: 'docs', // Change this to your desired directory
	}
})
