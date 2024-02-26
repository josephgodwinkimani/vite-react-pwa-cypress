import '@/App.css'

import { useState } from 'react'

import viteLogo from '/vite.svg'
import cypressLogo from '@/assets/cypress.svg'
import pwaLogo from '@/assets/pwa.svg'
import reactLogo from '@/assets/react.svg'

function App(): JSX.Element {
	const [count, setCount] = useState<number>(0)

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<a href="https://vite-pwa-org.netlify.app/" target="_blank">
					<img src={pwaLogo} className="logo pwa" alt="Vite PWA logo" />
				</a>
				<a href="https://cypress.io" target="_blank">
					<img src={cypressLogo} className="logo cypress" alt="Cypress logo" />
				</a>
			</div>
			<h1>Vite PWA + React + Cypress</h1>
			<div className="card">
				<button data-cy="counter" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	)
}

export default App
