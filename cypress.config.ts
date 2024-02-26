import path, { resolve } from 'path'
import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'
import { fileURLToPath } from 'url'

const __dirname: string = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    // projectId: "",
    // These settings apply everywhere unless overridden
    // Generate and save commands directly to your test suite by interacting with your app as an end user would.
    experimentalStudio: true,
    // Time, in milliseconds, to wait until most DOM based commands are considered timed out
    defaultCommandTimeout: 4000,
    // Whether Cypress will record a video of the test run when executing in run mode.
    video: true,
    // Default width in pixels for the application under tests' viewport.
    viewportWidth: 1000,
    // Default height in pixels for the application under tests' viewport
    viewportHeight: 600,
    // Coerce the video compression value to 32 Constant Rate Factor (CRF)
    videoCompression: true,
    // Number of times to retry a failed test. 
    // If a number is set, tests will retry in both runMode and openMode. 
    // To enable test retries only in runMode
    retries: {
        // Configure retry attempts for `cypress run`
        // Default is 0
        runMode: 2,
        // Configure retry attempts for `cypress open`
        // Default is 0
        openMode: 0
    },
    // Any values to be set as environment variables
    env: {
        base_Url: "/",
    },

    // Override default config options for E2E Testing runner.
    e2e: {
        // Url used as prefix for cy.visit() or cy.request() command's url
        baseUrl: "http://localhost:5173/",
        // Enables the "Run All Specs" UI feature, allowing the execution of multiple specs sequentially.
        experimentalRunAllSpecs: true,
        // Handle Cypress plugins
        setupNodeEvents(on, config) {
            // include any other plugin code...
            on(
                'file:preprocessor',
                // Cypress preprocessor for running e2e tests using vite.
                vitePreprocessor(resolve(__dirname, './vite.config.ts')),
            )

            // It's IMPORTANT to return the config object
            // with any changed environment variables
            return config
        },
        // Number of times to retry a failed test. 
        // If a number is set, tests will retry in both runMode and openMode.
        retries: {
            // Configure retry attempts for `cypress run`
            // Default is 0
            runMode: 2,
            // Configure retry attempts for `cypress open`
            // Default is 0
            openMode: 0
        },
        // Default width in pixels for the application under tests' viewport.
        viewportWidth: 1920,
        // Default height in pixels for the application under tests' viewport.
        viewportHeight: 1080,
        video: false,
        // Whether Cypress will take a screenshot when a test fails during cypress run.
        screenshotOnRunFailure: false,
        // The reporter used when running headlessly or in CI
        reporter: 'mochawesome',
        // Some reporters accept reporterOptions that customize their behavior
        reporterOptions: {
            reportDir: 'cypress/report',
            overwrite: false,
            html: false,
            json: true,
            inlineDiffs: true,
        },
    },

    // Override default config options for Component Testing runner.
    component: {
        devServer: {
            // "react" | "vue" | "svelte"
            framework: "react",
            bundler: "vite",
        },
    },

    // Some reporters accept reporterOptions that customize their behavior
    reporterOptions: {
        reporters: ['html', 'mochawesome', 'istanbul'],
        inlineDiffs: true,
        mochawesomeReporterOptions: {
            reportDir: './cypress/report',
            inlineDiffs: true,
            reportFilename: "[status]_[datetime]-[name]-report",
            timestamp: "longDate"
        },
        inlineCoverage: true,
        cobertura: {},
        nycOpts: {
            all: true,
            exclude: [],
        },
    },
})
