import type { Component } from "solid-js";

import { Wallpaper } from "./components/Wallpaper";

const App: Component = () => {
	return (
		<div class="icon-home-medium fixed left-0 right-0 top-0 bottom-0 select-none overflow-hidden text-[14px]">
			<Wallpaper />
		</div>
	);
};

export default App;
