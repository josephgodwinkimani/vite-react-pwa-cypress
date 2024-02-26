/// <reference types="vite-plugin-pwa/client" />

import '@/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'

import App from '@/App.tsx'

// Registers the service worker returning a callback to reload the current page when an update is found.
const updateSW: (reloadPage?: boolean | undefined) => Promise<void> = registerSW({
	onRegisteredSW(registration) {
		// Logic executed once the Service Worker is registered
		console.log('Service Worker registered:', registration)
	},
	onOfflineReady() {
		console.log('offline ready')
	},
	onNeedRefresh() {
		if (confirm('Discover fresh insights! Reload Now ?')) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			updateSW(true)
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
