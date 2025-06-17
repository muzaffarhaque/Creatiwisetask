import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: '/',
	plugins: [react()],
	resolve: {
		// Ensures .tsx files are resolved
		extensions: ['.js', '.ts', '.tsx', '.json'],
	  },
	server: {
		headers: {
		  'Content-Type': 'application/javascript',
		},
	  },
	build: {
		outDir: 'dist',
	},
  });