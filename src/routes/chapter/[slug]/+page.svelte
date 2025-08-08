<script lang="ts">
	const props = $props();
	const pageStore = $derived(props.params.slug);

	const chapters = $derived(props.data.chapters || []);
	const content = $derived(props.data.content || '');
	const slug = $derived(props.data.slug || '');
	const slugs = $derived(props.data.slugs || []);

	const chapter = $derived(chapters.find((value: any) => value.slug === pageStore));

	const index = $derived(slugs.indexOf(slug));
	const prevSlug = $derived(index > 0 ? slugs[index - 1] : null);
	const nextSlug = $derived(index < slugs.length - 1 ? slugs[index + 1] : null);

	function setupFootnoteScrolling() {
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
	}

	$effect(() => {
		pageStore;
		setupFootnoteScrolling();
	});
</script>

<div>
	<div
		class="sticky top-4 z-50 flex h-fit w-full flex-col place-items-center gap-[24px] rounded-2xl border-[1px] border-[#06202B] bg-[#F5EEDD]/10 p-[24px] text-[#06202B] backdrop-blur-md md:flex-row"
	>
		<div class="hidden md:flex md:justify-center">
			{#if prevSlug}
				<a href={`/chapter/${prevSlug}`}>
					<div
						class="flex h-[36px] w-fit flex-row items-center gap-[12px] rounded-md border border-[#F5EEDD] bg-[#077A7D] px-[24px] py-[18px] text-white transition duration-300 hover:opacity-70"
					>
						<span>←</span>
					</div>
				</a>
			{:else}
				<a href={`/`}>
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
					BAB {chapter.chapter}
				</div>
				<div class="text-[20px] leading-[100%] text-[#077A7D]">{chapter.title}</div>
			</div>
			<div class="hidden text-[16px] text-[#06202B] md:inline-block">
				Keliling Dunia dalam Delapan Puluh Hari - Jules Verne
			</div>
		</div>

		<div class="flex w-full flex-row justify-between gap-[12px] md:hidden">
			{#if prevSlug}
				<a href={`/chapter/${prevSlug}`}>
					<div
						class="flex h-[36px] w-fit flex-row items-center gap-[12px] rounded-md border border-[#F5EEDD] bg-[#077A7D] px-[24px] py-[18px] text-white transition duration-300 hover:opacity-70"
					>
						<span>←</span>
					</div>
				</a>
			{:else}
				<div class="h-[36px] w-17"></div>
			{/if}

			<a href={`/`}>
				<div
					class="flex h-[36px] w-fit flex-row items-center gap-[12px] rounded-md border border-[#F5EEDD] bg-[#077A7D] px-[24px] py-[18px] text-white transition duration-300 hover:opacity-70"
				>
					<span>&#127968;</span>
				</div>
			</a>

			{#if nextSlug}
				<a href={`/chapter/${nextSlug}`}>
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
				<a href={`/chapter/${nextSlug}`}>
					<div
						class="flex h-[36px] w-fit flex-row items-center gap-[12px] rounded-md border border-[#F5EEDD] bg-[#077A7D] px-[24px] py-[18px] text-white transition duration-300 hover:opacity-70"
					>
						<span>→</span>
					</div>
				</a>
			{:else}
				<a href={`/`}>
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
</div>

<style global>
	:global(.prose blockquote > *::before),
	:global(.prose blockquote > *::after) {
		content: none !important;
	}
</style>
