import type { CustomFlowbiteTheme } from "../../components/Flowbite";
import { setTheme } from "..";

interface Props {
	theme?: CustomFlowbiteTheme;
}

export function ThemeServerInit({ theme }: Props) {
	setTheme(theme);

	return null;
}
