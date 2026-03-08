<svelte:head>
	<title>Antonio Riccelli</title>
	<meta name="description" content="Antonio Riccelli — Full Stack Developer, IT, DevOps" />
</svelte:head>

<main class="min-h-screen bg-black flex items-center justify-center font-mono px-4">
	<div class="flex flex-col items-center gap-8 max-w-lg w-full">
		<!-- Profile photo -->
		<div class="relative">
			<div class="absolute -inset-1 rounded-full bg-terminal opacity-30 blur-md"></div>
			<img
				src="/images/pp-4.webp"
				alt="Antonio Riccelli"
				class="relative w-40 h-40 rounded-full border-2 border-terminal object-cover"
			/>
		</div>

		<!-- Terminal block -->
		<div class="w-full">
			<!-- Title bar -->
			<div
				class="flex items-center gap-2 bg-gray-900 rounded-t-lg px-4 py-2 border border-gray-700 border-b-0"
			>
				<span class="w-3 h-3 rounded-full bg-red-500"></span>
				<span class="w-3 h-3 rounded-full bg-yellow-500"></span>
				<span class="w-3 h-3 rounded-full bg-green-500"></span>
				<span class="ml-4 text-gray-500 text-xs">terminal</span>
			</div>

			<!-- Terminal body -->
			<div
				class="bg-gray-950 rounded-b-lg px-6 py-6 border border-gray-700 border-t-0 text-sm sm:text-base"
			>
				<p class="text-gray-500 mb-1">$ whoami</p>
				<h1 class="text-terminal text-2xl sm:text-3xl font-bold mb-4">Antonio Riccelli</h1>

				<p class="text-gray-500 mb-1">$ cat roles.txt</p>
				<p class="text-terminal mb-1">Full Stack Developer</p>
				<p class="text-terminal mb-1">IT</p>
				<p class="text-terminal mb-4">DevOps</p>

				<p class="text-gray-500 mb-1">$ find --social</p>
				<a
					href="https://www.linkedin.com/in/antonioriccelli/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 text-terminal hover:text-white transition-colors group"
				>
					<svg
						class="w-5 h-5 group-hover:drop-shadow-terminal transition-all"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fill-rule="evenodd"
							d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
							clip-rule="evenodd"
						/>
						<path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
					</svg>
					<span>linkedin.com/in/antonioriccelli</span>
				</a>

				<p class="mt-6 text-gray-500">
					<span>$ </span><span class="animate-blink text-terminal">_</span>
				</p>
			</div>
		</div>
	</div>
</main>
