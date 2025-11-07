import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	server: {
		preset: "vercel",
	},
	vite: {
		ssr: { external: ["drizzle-orm"] },
		plugins: [tailwindcss() as any],
	},
});
