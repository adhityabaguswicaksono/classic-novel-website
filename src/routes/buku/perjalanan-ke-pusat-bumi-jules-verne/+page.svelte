<script lang="ts">
	export let data;

	const chapters = data.chapters;
</script>

<svelte:head>
	<title>Novel Keliling Dunia dalam Delapan Puluh Hari - Bahasa Indonesia</title>
</svelte:head>

<main>
	<div
		class="h-[100dvh] w-full overflow-hidden bg-[radial-gradient(circle,_black_50%,_#488BC7_80%,_black_90%,_#488BC7_100%)] bg-cover bg-center px-3 py-8 lg:px-14"
	>
		<div class="flex h-full w-full items-center justify-center">
			<div class="flex flex-col gap-8 text-center text-white">
				<div>
					<span class="block text-4xl">Jules Verne</span>
					<h1 class="block text-6xl font-bold">Perjalanan ke Pusat Bumi</h1>
				</div>
				<div>
					<span class="block text-xl">Terjemahan Bahasa Indonesia dari Novel Klasik</span>
					<span class="block text-2xl font-bold italic"
						>Journey to the Centre of the Earth by Jules Verne</span
					>
				</div>
			</div>
		</div>
	</div>

	<div
		class="flex flex-col gap-0 bg-gradient-to-r from-black to-[#1B3348] px-3 text-2xl text-white lg:px-14"
	>
		<div class="flex w-full flex-col gap-9 py-14 lg:flex-row">
			<div
				class="static top-4 z-50 flex h-fit min-w-full flex-col gap-3 lg:sticky lg:min-w-[350px]"
			>
				<h2 class="text-6xl font-bold text-[#488BC7]">Sinopsis</h2>
				<div class="flex flex-col">
					<span class="block text-3xl font-bold">Perjalanan ke Pusat Bumi</span>
					<span class="block text-2xl">Jules Verne</span>
				</div>
			</div>

			<div class="text-justify leading-[150%]">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
			</div>
		</div>

		<div class="flex w-full flex-col gap-9 py-14 lg:flex-row">
			<div
				class="static top-4 z-50 flex h-fit min-w-full flex-col gap-3 lg:sticky lg:min-w-[350px]"
			>
				<h2 class="text-6xl font-bold text-[#488BC7]">Daftar Isi</h2>
				<div class="flex flex-col">
					<span class="block text-3xl font-bold">Perjalanan ke Pusat Bumi</span>
					<span class="block text-2xl">Jules Verne</span>
				</div>
			</div>

			<div class="flex flex-col gap-8 text-justify leading-[150%]">
				<a href="./" class="flex flex-col transition-all duration-200 hover:opacity-75">
					<h3 class="text-4xl font-bold text-[#488BC7]">BAB I</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</p>
				</a>
			</div>
		</div>

		<div class="flex w-full flex-col gap-9 py-14 lg:flex-row">
			<div
				class="static top-4 z-50 flex h-fit min-w-full flex-col gap-3 lg:sticky lg:min-w-[350px]"
			>
				<h2 class="text-6xl font-bold text-[#488BC7]">Tentang Novel</h2>
				<div class="flex flex-col">
					<span class="block text-3xl font-bold">Perjalanan ke Pusat Bumi</span>
					<span class="block text-2xl">Jules Verne</span>
				</div>
			</div>

			<div class="text-justify leading-[150%]">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
			</div>
		</div>
	</div>
</main>
