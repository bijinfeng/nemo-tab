import { type Component, createSignal } from "solid-js";

import { IconButton } from "../IconButton";

export const Search: Component = () => {
	const [open, setOpen] = createSignal(false);
	const [keyword, setKeyword] = createSignal("");

	const hendleEngineIconClick = () => {};

	const handleInputChange = (text: string) => {
		setKeyword(text);
		// run(text)
	};

	const handleInputFocus = () => {
		// setPopoverType('suggest')
		// setTrue()
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
		}
		// handleSearch(keyword)
	};

	return (
		<div class="z-50 absolute left-1/2 -translate-x-1/2 top-[12vh] w-[568px] transition-opacity duration-100">
			<div
				class="bg-white flex h-[52px] rounded-xl overflow-hidden border border-white border-opacity-10 bg-opacity-60 search-box focus-within:bg-opacity-80"
				classList={{ "bg-opacity-80": open() }}
			>
				<div class="w-[52px] flex items-center justify-center">
					<IconButton onClick={hendleEngineIconClick} class="opacity-100">
						<span
							class="hi-icon flex items-center justify-center overflow-hidden bg-cover h-6 w-6 rounded-md"
							style={{
								"background-image": "url('/baidu.png')",
								"background-color": "rgba(0,0,0,0)",
							}}
						/>
					</IconButton>
				</div>

				<input
					placeholder="输入搜索内容"
					autocomplete="off"
					class="h-full flex-1 py-3 pl-1 pr-[42px] bg-transparent text-color-t1 placeholder:text-color-t1 placeholder:text-opacity-40 outline-none text-base"
					value={keyword()}
					onChange={(e) => handleInputChange(e.target.value)}
					onFocus={handleInputFocus}
					onKeyDown={handleKeyDown}
				/>
			</div>
		</div>
	);
};
