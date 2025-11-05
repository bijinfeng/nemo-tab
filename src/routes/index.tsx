import { logout } from "~/api";

export default function Home() {
	return (
		<main class="w-full p-4 space-y-2">
			<h2 class="font-bold text-3xl">Hello</h2>
			<h3 class="font-bold text-xl">Message board</h3>
			<form action={logout} method="post">
				<button name="logout" type="submit">
					Logout
				</button>
			</form>
		</main>
	);
}
