<script lang="ts">
	import { fade } from 'svelte/transition';

	const props = $props();
	const pageStore = $derived(props.params.slug);
	const content = $derived(props.data.content || '');
	const slug = $derived(props.data.slug || '');
	const slugs = $derived(props.data.slugs || []);
	const chapter = $derived(props.data.chapter);
	const title = $derived(props.data.title);

	const index = $derived(slugs.indexOf(slug));
	const prevSlug = $derived(index > 0 ? slugs[index - 1] : null);
	const nextSlug = $derived(index < slugs.length - 1 ? slugs[index + 1] : null);
	let showButton = $state(false);
	let scrollProgress = $state(0);

	const setupFootnoteScrolling = () => {
		const scrollLinks = document.querySelectorAll('[data-scroll-target]');

		scrollLinks.forEach((el) => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				const targetId = (el as HTMLElement).getAttribute('data-scroll-target');
				if (!targetId) return;

				const target = document.getElementById(targetId);
				if (target) {
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });

					target.classList.add(
						'bg-[#077A7D]/15',
						'transition-all',
						'duration-1000',
						'rounded-sm',
						'ease-in-out'
					);

					setTimeout(() => {
						target.classList.remove('bg-[#077A7D]/15');
					}, 1500);
				}
			});
		});
	};

	const buttonToTheTop = () => {
		window.scrollTo({ top: 0 });
	};

	const showButtonFunction = () => {
		showButton = window.scrollY > 200;
	};

	const scrollProgressFunction = () => {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		scrollProgress = (scrollTop / docHeight) * 100;
	};

	$effect(() => {
		pageStore;
		setupFootnoteScrolling();

		window.addEventListener('scroll', showButtonFunction);
		window.addEventListener('scroll', scrollProgressFunction);

		return () => {
			window.removeEventListener('scroll', scrollProgressFunction);
			window.removeEventListener('scroll', showButtonFunction);
		};
	});
</script>

<svelte:head>
	<title>
		Bab {chapter} - Novel Keliling Dunia dalam Delapan Puluh Hari - Bahasa Indonesia
	</title>
</svelte:head>

<main>
	<div class="fixed top-0 left-0 z-50 h-[4px] w-full bg-gray-200">
		<div
			class="h-[4px] bg-[#077A7D] transition-all duration-300"
			style="width: {scrollProgress}%"
		></div>
	</div>

	<div
		class="h-fit w-full bg-gradient-to-br from-[#7AE2CF] via-[#077A7D] via-35% to-[#06202B] bg-cover bg-center"
	>
		<div class="container mx-auto flex h-full items-center px-6 py-10">
			<div
				class="grid h-fit w-full grid-cols-1 place-items-center gap-[6px] rounded-2xl border-[1px] border-[#F5EEDD] bg-[#F5EEDD]/10 px-[36px] py-[24px] text-[#F5EEDD] backdrop-blur-md md:grid-cols-2 md:gap-[24px]"
			>
				<a
					href="/buku/keliling-dunia-dalam-delapan-puluh-hari-jules-verne"
					class="flex w-full flex-col transition duration-300 hover:opacity-70"
				>
					<div class="text-[24px] font-bold">Keliling Dunia dalam Delapan Puluh Hari</div>
					<div class="text-[18px]">Jules Verne</div>
				</a>
				<div class="flex w-full flex-col text-left md:text-right">
					<div class="text-[14px]">
						Terjemahan Bahasa Indonesia dari Novel Klasik <br />
						<span class="font-bold italic">Around the World in Eighty Days by Jules Verne</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<article class="container mx-auto w-full px-6 py-10">
		<div
			class="sticky top-4 z-50 flex h-fit w-full flex-col place-items-center gap-[24px] rounded-2xl border-[1px] border-[#06202B] bg-[#F5EEDD]/10 p-[24px] text-[#06202B] backdrop-blur-md md:flex-row"
		>
			<div class="hidden md:flex md:justify-center">
				{#if prevSlug}
					<a
						data-sveltekit-replacestate
						href={`/buku/keliling-dunia-dalam-delapan-puluh-hari-jules-verne/bab/${prevSlug}`}
					>
						<div
							class="flex h-[36px] w-fit flex-row items-center gap-[12px] rounded-md border border-[#F5EEDD] bg-[#077A7D] px-[24px] py-[18px] text-white transition duration-300 hover:opacity-70"
						>
							<span>←</span>
						</div>
					</a>
				{:else}
					<a
						data-sveltekit-replacestate
						href={`/buku/keliling-dunia-dalam-delapan-puluh-hari-jules-verne/`}
					>
						<div
							class="flex h-[36px] w-fit flex-row items-center gap-[12px] rounded-md border border-[#F5EEDD] bg-[#077A7D] px-[24px] py-[18px] text-white transition duration-300 hover:opacity-70"
						>
							<span>&#127968;</span>
						</div>
					</a>
				{/if}
			</div>

			<div class="flex w-full flex-col gap-[12px] text-center">
				<div class="flex flex-col gap-[4px]">
					<div class="text-[36px] leading-[100%] font-bold text-[#06202B]">
						BAB {chapter}
					</div>
					{#if !showButton}
						<div transition:fade class="text-[20px] leading-[100%] text-[#077A7D]">{title}</div>
					{/if}
				</div>
				<div class="hidden text-[16px] text-[#06202B] md:inline-block">
					Keliling Dunia dalam Delapan Puluh Hari - Jules Verne
				</div>
			</div>

			<div class="flex w-full flex-row justify-between gap-[12px] md:hidden">
				{#if prevSlug}
					<a
						data-sveltekit-replacestate
						href={`/buku/keliling-dunia-dalam-delapan-puluh-hari-jules-verne/bab/${prevSlug}`}
					>
						<div
							class="flex h-[36px] w-fit flex-row items-center gap-[12px] rounded-md border border-[#F5EEDD] bg-[#077A7D] px-[24px] py-[18px] text-white transition duration-300 hover:opacity-70"
						>
							<span>←</span>
						</div>
					</a>
				{:else}
					<div class="h-[36px] w-17"></div>
				{/if}

				<a
					data-sveltekit-replacestate
					href={`/buku/keliling-dunia-dalam-delapan-puluh-hari-jules-verne`}
				>
					<div
						class="flex h-[36px] w-fit flex-row items-center gap-[12px] rounded-md border border-[#F5EEDD] bg-[#077A7D] px-[24px] py-[18px] text-white transition duration-300 hover:opacity-70"
					>
						<span>&#127968;</span>
					</div>
				</a>

				{#if nextSlug}
					<a
						data-sveltekit-replacestate
						href={`/buku/keliling-dunia-dalam-delapan-puluh-hari-jules-verne/bab/${nextSlug}`}
					>
						<div
							class="flex h-[36px] w-fit flex-row items-center gap-[12px] rounded-md border border-[#F5EEDD] bg-[#077A7D] px-[24px] py-[18px] text-white transition duration-300 hover:opacity-70"
						>
							<span>→</span>
						</div>
					</a>
				{:else}
					<div class="h-[36px] w-17"></div>
				{/if}
			</div>

			<div class="hidden md:flex md:justify-center">
				{#if nextSlug}
					<a
						data-sveltekit-replacestate
						href={`/buku/keliling-dunia-dalam-delapan-puluh-hari-jules-verne/bab/${nextSlug}`}
					>
						<div
							class="flex h-[36px] w-fit flex-row items-center gap-[12px] rounded-md border border-[#F5EEDD] bg-[#077A7D] px-[24px] py-[18px] text-white transition duration-300 hover:opacity-70"
						>
							<span>→</span>
						</div>
					</a>
				{:else}
					<a
						data-sveltekit-replacestate
						href={`/buku/keliling-dunia-dalam-delapan-puluh-hari-jules-verne`}
					>
						<div
							class="flex h-[36px] w-fit flex-row items-center gap-[12px] rounded-md border border-[#F5EEDD] bg-[#077A7D] px-[24px] py-[18px] text-white transition duration-300 hover:opacity-70"
						>
							<span>&#127968;</span>
						</div>
					</a>
				{/if}
			</div>
		</div>

		<div
			class="mx-auto prose mt-6 w-full max-w-none text-justify prose-a:text-[#077A7D] prose-blockquote:font-normal prose-blockquote:not-italic prose-hr:my-6"
		>
			{@html content}
		</div>
	</article>

	{#if showButton}
		<div class="fixed right-6 bottom-10 z-50" transition:fade={{ duration: 300 }}>
			<button
				class="flex h-[36px] w-fit cursor-pointer flex-row items-center gap-[12px] rounded-md border border-[#F5EEDD] bg-[#077A7D] px-[18px] py-[24px] text-white transition duration-300 hover:opacity-70"
				onclick={buttonToTheTop}
			>
				<span>↑</span>
			</button>
		</div>
	{/if}
</main>

<style global>
	:global(.prose blockquote > *::before),
	:global(.prose blockquote > *::after) {
		content: none !important;
	}
</style>
