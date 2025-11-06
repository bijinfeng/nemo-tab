import { definePlugin, type IPluginContext } from "nemo-shared";

export default definePlugin({
	// 插件激活函数
	activate: async (_context: IPluginContext) => {
		console.log("[SimplePluginExample] 插件激活中...");
	},

	// 插件停用函数
	deactivate: () => {
		console.log("[SimplePluginExample] 插件停用中...");
		console.log("[SimplePluginExample] 插件停用完成");
	},

	// 插件贡献点
	contributes: {
		// settingsTabs: [
		//   {
		//     id: "text",
		//     title: "测试",
		//     icon: "plugin",
		//     content: markRaw(Content),
		//   },
		// ],
	},
});
