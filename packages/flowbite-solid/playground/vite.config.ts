import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
	root: "./playground",
	plugins: [solidPlugin(), tailwindcss()],
});
