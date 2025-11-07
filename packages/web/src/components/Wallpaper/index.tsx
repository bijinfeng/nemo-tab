import type { Component } from "solid-js";

const defaultWallpaper = "/wallpaper.webp";

export const Wallpaper: Component = () => {
	return (
		<div
			class="fixed w-full h-full bg-cover bg-center transition-wallpaper"
			style={{ "background-image": `url(${defaultWallpaper})` }}
		/>
	);
};
