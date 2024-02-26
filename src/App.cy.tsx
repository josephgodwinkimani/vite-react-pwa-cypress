/// <reference types="cypress" />
import App from './App'

describe('<App />', () => {
	it('renders', () => {
		// Mounts a React component into the DOM.
		// see: https://on.cypress.io/mounting-react
		cy.mount(<App />)
	})

	it('renders header logos', () => {
		cy.mount(<App />)

		cy.get('.logo').eq(0).click()
		// Get the current URL of the page that is currently active then
		// .include asserts that the given string val is a substring of the target.
		cy.url().should('include', 'vitejs.dev')
	})

	it('renders header', () => {
		cy.mount(<App />)

		cy.get('h1').should('have.text', 'Vite + React')
	})

	it('indicates counter with default count as zero (0)', () => {
		cy.mount(<App />)

		cy.get('[data-cy=counter]').click()

		cy.get('[data-cy=counter]').should('have.text', 'count is 1')
	})
})
