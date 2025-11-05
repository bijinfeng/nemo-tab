import { type ParentComponent, type ParentProps, splitProps } from "solid-js";

import type { ThemeMode } from "../../hooks/use-theme-mode";
import { ThemeInit } from "../../store/init";
import type { CustomFlowbiteTheme } from "./FlowbiteTheme";

export interface ThemeProps {
	mode?: ThemeMode;
	theme?: CustomFlowbiteTheme;
}

type FlowbiteProps = ParentProps & {
	theme?: ThemeProps;
};

export const Flowbite: ParentComponent<FlowbiteProps> = (p: FlowbiteProps) => {
	const [local] = splitProps(p, ["children", "theme"]);

	const { children, theme } = local;
	return (
		<>
			<ThemeInit mode={theme?.mode} theme={theme?.theme} />
			{children}
		</>
	);
};
