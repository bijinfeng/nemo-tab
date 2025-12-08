import path from "node:path";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import devtools from "solid-devtools/vite";
import solidPlugin from "unplugin-solid/vite";
import { defineConfig } from "vite";

const sentryOrg = process.env.SENTRY_ORG;
const sentryProject = process.env.SENTRY_PROJECT;

export default defineConfig({
	plugins: [
		devtools(),
		solidPlugin(),
		tailwindcss(),
		sentryVitePlugin({
			disable: !sentryOrg || !sentryProject,
			org: sentryOrg,
			project: sentryProject,
		}),
	],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
		sourcemap: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
