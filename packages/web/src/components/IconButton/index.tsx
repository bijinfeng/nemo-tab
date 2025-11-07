import { cva, type VariantProps } from "class-variance-authority";
import type { Component, ComponentProps } from "solid-js";
import { splitProps } from "solid-js";

import { cn } from "../../lib/cn";

const iconButtonVariants = cva(
	"flex cursor-pointer items-center justify-center rounded-[8px] transition-all bg-opacity-0 opacity-70 hover:opacity-100",
	{
		variants: {
			size: {
				small: "h-[24px] w-[24px]",
				default: "h-[28px] w-[28px]",
				large: "h-[32px] w-[32px]",
				huge: "h-[36px] w-[36px]",
			},
			ghost: {
				true: "text-white hover:bg-color-black hover:bg-opacity-20",
				false: "text-black hover:bg-color-white hover:bg-opacity-80",
			},
			activated: {
				true: "",
				false: "",
			},
		},
		compoundVariants: [
			{
				ghost: true,
				activated: true,
				class: "bg-color-black bg-opacity-20",
			},
			{
				ghost: false,
				activated: true,
				class: "bg-color-white bg-opacity-80",
			},
		],
		defaultVariants: {
			size: "default",
			ghost: false,
			activated: false,
		},
	},
);

interface IconButtonProps
	extends ComponentProps<"div">,
		VariantProps<typeof iconButtonVariants> {}

export const IconButton: Component<IconButtonProps> = (props) => {
	const [local, rest] = splitProps(props, [
		"class",
		"size",
		"ghost",
		"activated",
	]);

	return (
		<div
			class={cn(
				iconButtonVariants({
					size: local.size,
					ghost: local.ghost,
					activated: local.activated,
				}),
				local.class,
			)}
			{...rest}
		/>
	);
};
