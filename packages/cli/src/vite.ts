import path from "node:path";
import { federation } from "@module-federation/vite";
import solid from "unplugin-solid/vite";
import type { InlineConfig, ViteDevServer } from "vite";
import { build, createServer } from "vite";
import { type ModuleFederationOptions, withZephyr } from "vite-plugin-zephyr";

interface CreateViteBuildOptions {
	dev?: boolean;
	zephyr?: boolean;
	root?: string;
}

async function createViteServer(
	inlineConfig: InlineConfig,
): Promise<ViteDevServer> {
	const error = console.error;
	console.error = (...args: any[]) => {
		if (
			typeof args[0] === "string" &&
			args[0].includes("WebSocket server error:")
		) {
			return;
		}
		error(...args);
	};

	const server = await createServer(inlineConfig);

	console.error = error;
	return server;
}

const genFederationConfig = (root: string): ModuleFederationOptions => ({
	filename: "remoteEntry.js",
	name: "remote",
	exposes: {
		".": path.resolve(root, "src/index.ts"),
	},
	shared: ["solid-js"],
});

export const createBuildServer = async (
	options: CreateViteBuildOptions,
): Promise<void> => {
	const rootDir = path.resolve(options.root ?? process.cwd());
	const federationConfig = genFederationConfig(rootDir);

	const config: InlineConfig = {
		build: {
			target: "esnext",
		},
		plugins: [
			solid(),
			options.zephyr
				? withZephyr({ mfConfig: federationConfig })
				: federation(federationConfig),
		],
		resolve: {
			alias: {
				"@": path.resolve(rootDir, "src"),
			},
		},
	};

	if (options.dev) {
		const viteServer = await createViteServer(config);

		await viteServer.listen();

		viteServer.printUrls();
		viteServer.bindCLIShortcuts({ print: true });
	} else {
		await build(config);
	}
};
