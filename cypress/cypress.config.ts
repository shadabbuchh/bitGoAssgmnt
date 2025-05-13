import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: 'https://blockstream.info',
        supportFile: 'cypress/support/index.ts',
    }
})