import tailwindcss from "@tailwindcss/vite";
import solid from "unplugin-solid/vite";
import { defineConfig } from "vite";

export default defineConfig({
	root: "./playground",
	plugins: [solid(), tailwindcss()],
});
