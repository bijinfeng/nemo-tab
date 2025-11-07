import { sentryVitePlugin } from "@sentry/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

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
});
