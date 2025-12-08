import { createContext } from "solid-js";

import type { getExtensions } from "@/plugins/module-federation";

export type PluginContextProps = ReturnType<typeof getExtensions>;

export const PluginContext = createContext<PluginContextProps | undefined>();
