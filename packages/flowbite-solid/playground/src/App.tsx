import { Button } from "../../src";

export function App() {
	return (
		<div class="flex flex-wrap gap-2">
			<Button>Default</Button>
			<Button color="alternative">Alternative</Button>
			<Button color="dark">Dark</Button>
			<Button color="light">Light</Button>
			<Button color="green">Green</Button>
			<Button color="red">Red</Button>
			<Button color="yellow">Yellow</Button>
			<Button color="purple">Purple</Button>
		</div>
	);
}
