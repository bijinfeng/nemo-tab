import type { IPluginConfig } from "nemo-shared";

/**
 * 系统预设插件
 */
export const preset: IPluginConfig[] = [
	{
		name: "默认壁纸",
		version: "v1.0.0",
		description: "默认壁纸插件",
		// entry: "/plugins/default-wallpaper",
		entry: "http://localhost:5173/remoteEntry.js",
		enabled: true,
	},
];
