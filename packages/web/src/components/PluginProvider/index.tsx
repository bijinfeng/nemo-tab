import type { ParentComponent } from "solid-js";
import { createSignal, onMount } from "solid-js";

import { PluginContext, type PluginContextProps } from "@/context/plugin";
import {
	getExtensions,
	initializePluginManager,
	loadPlugins,
} from "@/plugins/module-federation";

export const PluginProvider: ParentComponent = (props) => {
	const [extensions, setExtensions] = createSignal<PluginContextProps>();

	onMount(async () => {
		await initializePluginManager();
		await loadPlugins();
		setExtensions(getExtensions());
	});

	return (
		<PluginContext.Provider value={extensions()}>
			{props.children}
		</PluginContext.Provider>
	);
};
