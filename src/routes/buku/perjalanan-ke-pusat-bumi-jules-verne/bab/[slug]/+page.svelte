<script lang="ts">
	import { slide } from 'svelte/transition';

	const bookLink = 'perjalanan-ke-pusat-bumi-jules-verne';
	const props = $props();
	const content = $derived(props.data.content || '');
	const chapter = $derived(props.data.chapter || '');
	const title = $derived(props.data.title || '');
	const bibliography = $derived(props.data.bibliography || []);
	const pageStore = $derived(props.params.slug || 0);

	let hideMenu = $state(true);
	let showButtonToTheTop = $state(false);
	let scrollProgress = $state(0);

	const stateMenu = () => {
		hideMenu = !hideMenu;
	};

	const buttonToTheTop = () => {
		window.scrollTo({ top: 0 });
	};

	const showButtonToTheTopFunction = () => {
		showButtonToTheTop = window.scrollY > 200;
	};

	const scrollProgressFunction = () => {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		scrollProgress = (scrollTop / docHeight) * 100;
	};

	$effect(() => {
		// pageStore;
		// setupFootnoteScrolling();

		window.addEventListener('scroll', scrollProgressFunction);
		window.addEventListener('scroll', showButtonToTheTopFunction);

		return () => {
			window.removeEventListener('scroll', scrollProgressFunction);
			window.removeEventListener('scroll', showButtonToTheTopFunction);
		};
	});
</script>

<svelte:head>
	<title>Bab {chapter} - Novel Perjalanan ke Pusat Bumi - Bahasa Indonesia</title>
</svelte:head>

<main>
	<div class="fixed top-0 left-0 z-50 h-[4px] w-full bg-gray-200">
		<div
			class="h-[4px] bg-[#488BC7] transition-all duration-300"
			style="width: {scrollProgress}%"
		></div>
	</div>

	<div
		class="flex h-fit w-full flex-col gap-6 bg-gradient-to-b from-[#1B3348] to-black bg-cover bg-center px-3 py-14 text-2xl leading-[150%] text-white lg:flex-row lg:p-14"
	>
		<div
			class={`static top-6 z-50 flex flex-col gap-1.5 rounded-3xl bg-[#488BC7]/25 p-9 transition-all duration-1000 ease-in-out lg:sticky ${hideMenu ? 'h-[200px] min-w-[150px] lg:h-[400px]' : 'h-[95dvh] min-w-[350px]'} overflow-hidden`}
		>
			<div class="flex w-full flex-col items-center gap-5">
				<div class="flex w-full flex-row items-center gap-4 lg:flex-col">
					<a
						href={`/buku/${bookLink}`}
						class="hidden w-full flex-col items-end gap-1.5 transition-all duration-200 hover:opacity-75 lg:flex lg:w-fit"
						style={hideMenu ? 'writing-mode: sideways-lr; text-orientation: mixed;' : ''}
					>
						<span class={`w-full text-4xl font-bold ${hideMenu ? 'block' : 'hidden'}`}>
							Daftar Isi
						</span>
						<span class="block w-full text-xl">Jules Verne</span>
						<span class="block w-full text-2xl font-bold">Perjalanan ke Pusat Bumi</span>
					</a>

					<a
						href={`/buku/${bookLink}`}
						class="flex w-full flex-col items-end gap-1.5 transition-all duration-200 hover:opacity-75 lg:hidden lg:w-fit"
					>
						<span class={`w-full text-4xl font-bold ${hideMenu ? 'block' : 'hidden'}`}>
							Daftar Isi
						</span>
						<span class="block w-full text-xl">Jules Verne</span>
						<span class="block w-full text-2xl font-bold">Perjalanan ke Pusat Bumi</span>
					</a>

					<button
						class={`flex h-9 min-h-9 w-9 min-w-9 cursor-pointer flex-row items-center justify-center rounded-full bg-white transition-all duration-200 ease-in-out hover:opacity-75  ${hideMenu ? '-rotate-90 lg:rotate-180' : 'hidden'}`}
						onclick={stateMenu}
						aria-label="Toggle Menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="10"
							height="16"
							viewBox="0 0 10 16"
							fill="none"
						>
							<path
								d="M8.2193 1.56055L1.78027 7.99957L8.2193 14.4386"
								stroke="#488BC7"
								stroke-width="2.92683"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>

				<div
					class={`flex w-full flex-col gap-6 transition-all duration-1000 ease-in-out ${hideMenu ? 'hidden' : ''}`}
				>
					<div class="flex flex-row items-center gap-2">
						<span class="block w-full text-4xl font-bold">Daftar Isi</span>
						<button
							class={`flex min-h-9 min-w-9 cursor-pointer flex-row items-center justify-center rounded-full bg-white transition-all duration-200 ease-in-out hover:opacity-75 ${hideMenu ? '-rotate-90 lg:rotate-180' : 'rotate-90 lg:rotate-0'}`}
							onclick={stateMenu}
							aria-label="Toggle Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="16"
								viewBox="0 0 10 16"
								fill="none"
							>
								<path
									d="M8.2193 1.56055L1.78027 7.99957L8.2193 14.4386"
									stroke="#488BC7"
									stroke-width="2.92683"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>

					<hr />

					<div class="flex flex-col gap-3 overflow-auto">
						{#each bibliography as chapter}
							<a
								href={`/buku/${bookLink}/bab/${chapter.slug}`}
								class="flex w-fit flex-row gap-3 transition-all duration-200 hover:opacity-75"
								data-sveltekit-replacestate
							>
								<div
									class={`rotate-180 cursor-pointer flex-row items-center justify-center rounded-full ${chapter.slug === pageStore ? 'flex' : 'hidden'}`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="10"
										height="16"
										viewBox="0 0 10 16"
										fill="none"
									>
										<path
											d="M8.2193 1.56055L1.78027 7.99957L8.2193 14.4386"
											stroke="#FFFFFF"
											stroke-width="2.92683"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
								<span class={`block w-fit ${chapter.slug === pageStore ? 'font-bold' : ''}`}>
									Bab {chapter.chapter}
								</span>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div>
			<div
				class="sticky top-6 z-50 flex h-fit w-full flex-col gap-4 rounded-3xl bg-[#488BC7]/25 p-9 backdrop-blur-lg"
			>
				<div class="flex flex-col gap-1">
					<span class="block w-full text-5xl font-bold">Bab {chapter}</span>
					{#if !showButtonToTheTop}
						<span class="block w-full text-2xl" transition:slide={{ duration: 200 }}>{title}</span>
					{/if}
				</div>

				<a
					href={`/buku/${bookLink}`}
					class="flex w-full flex-row items-center justify-between gap-3 transition-all duration-200 hover:opacity-75 lg:hidden"
				>
					<span class="block w-fit text-start text-sm font-bold">Perjalanan ke Pusat Bumi</span>
					<span class="block w-fit text-end text-sm">Jules Verne</span>
				</a>
			</div>

			<div
				class="prose mt-6 w-full max-w-none text-justify text-2xl leading-[150%] text-white prose-headings:text-[#488BC7] prose-a:text-[#488BC7] prose-a:no-underline prose-blockquote:font-normal prose-blockquote:not-italic prose-strong:text-white prose-hr:my-6"
			>
				{@html content}
			</div>
		</div>
	</div>

	{#if showButtonToTheTop}
		<div class="fixed right-3 bottom-6 z-50 lg:right-14" transition:slide={{ duration: 200 }}>
			<button
				class="flex min-h-14 min-w-14 rotate-90 cursor-pointer flex-row items-center justify-center rounded-full bg-white transition-all duration-200 hover:opacity-75"
				onclick={buttonToTheTop}
				aria-label="Kembali ke Atas"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="16"
					viewBox="0 0 10 16"
					fill="none"
				>
					<path
						d="M8.2193 1.56055L1.78027 7.99957L8.2193 14.4386"
						stroke="#488BC7"
						stroke-width="2.92683"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
	{/if}
</main>
