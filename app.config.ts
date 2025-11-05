import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { withZephyr } from "vite-plugin-zephyr";

export default defineConfig({
	vite: {
		ssr: { external: ["drizzle-orm"] },
		plugins: [tailwindcss(), withZephyr()],
	},
});
