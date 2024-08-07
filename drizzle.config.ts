import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	schema: './server/schema.ts',
	out: './server/migrations',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DRIZZLE_DATABASE_URL!,
	},
})
