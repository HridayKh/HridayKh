export default function App() {
	return <>

		<div class="main">
			<div class="col">
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
			</div>
			<div class="col">
				<div>Item A</div>
				<div>Item B</div>
				<div>Item C</div>
			</div>
		</div>


	</>;
}

function HeroSection() {
	return <>
		<div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
			<img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
			<div>
				<div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
				<p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
			</div>
		</div>
	</>;
}

