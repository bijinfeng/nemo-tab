import type { Component } from "solid-js";
import { PluginProvider } from "./components/PluginProvider";
import { Search } from "./components/Search";
import { Wallpaper } from "./components/Wallpaper";

const App: Component = () => {
	return (
		<PluginProvider>
			<div class="icon-home-medium fixed left-0 right-0 top-0 bottom-0 select-none overflow-hidden text-[14px]">
				<Wallpaper />
				<Search />
			</div>
		</PluginProvider>
	);
};

export default App;
