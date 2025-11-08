import { definePlugin, type IPluginContext } from "nemo-shared";

import { DefaultWallpaper } from "./render";

export default definePlugin({
	// 插件激活函数
	activate: async (context: IPluginContext) => {
		console.log("[Wallpaper] 插件激活中...");
		context.wallpapers.registerRender("default", DefaultWallpaper);
	},

	// 插件停用函数
	deactivate: () => {
		console.log("[SimplePluginExample] 插件停用中...");
		console.log("[SimplePluginExample] 插件停用完成");
	},

	// 插件贡献点
	contributes: {
		wallpaper: [
			{
				id: "default",
				title: "壁纸",
			},
		],
	},
});
