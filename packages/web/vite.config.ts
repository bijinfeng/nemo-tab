import tailwindcss from "@tailwindcss/vite";
import devtools from "solid-devtools/vite";
import solidPlugin from "unplugin-solid/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [devtools(), solidPlugin(), tailwindcss()],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
});
