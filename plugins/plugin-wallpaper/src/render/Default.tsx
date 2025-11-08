import type { Component } from "solid-js";
import defaultWallpaper from "../assets/wallpaper.webp";

interface WallpaperProps {
	url?: string;
}

export const DefaultWallpaper: Component<WallpaperProps> = (props) => {
	return (
		<div
			class="fixed w-full h-full bg-cover bg-center transition-wallpaper"
			style={{ "background-image": `url(${props.url || defaultWallpaper})` }}
		/>
	);
};
