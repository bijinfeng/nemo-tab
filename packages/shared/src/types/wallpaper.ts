import type { Component } from "solid-js";

type RenderComponent = Component<{ url?: string }>;

export interface IWallpaperContribution {
	id: string;
	title: string;
}

export interface IPluginWallpapers {
	registerRender: (id: string, render: RenderComponent) => void;
}
