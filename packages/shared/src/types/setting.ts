import type { Component } from "solid-js";

import type { IPluginSubscription } from "./plugin";

/**
 * 设置页面Tab贡献接口
 */
export interface ISettingsTabContribution {
	/** Tab ID */
	id: string;
	/** Tab标题 */
	title: string;
	/** Tab图标 */
	icon: string;
	/** Tab顺序 */
	order?: number;
	/** Tab渲染内容 */
	content: Component;
}

/**
 * 设置注册器接口
 */
export interface IPluginSettings {
	/** 注册设置Tab */
	registerSettingsTab: (tab: ISettingsTabContribution) => IPluginSubscription;
	/** 注销设置Tab */
	unregisterSettingsTab: (id: string) => void;
	/** 获取所有设置Tab */
	getSettingsTabs: () => ISettingsTabContribution[];
}
