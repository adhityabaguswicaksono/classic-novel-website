<script lang="ts">
	import HeaderIllustration from '$lib/assets/HeaderIllustration.svg';
	export let data;

	const chapters = data.chapters;
</script>

<svelte:head>
	<title>Novel Keliling Dunia dalam Delapan Puluh Hari - Bahasa Indonesia</title>
</svelte:head>

<main>
	<div
		class="h-fit min-h-[500px] w-full overflow-hidden bg-gradient-to-br from-[#7AE2CF] via-[#077A7D] via-35% to-[#06202B] bg-cover bg-center md:h-[100dvh]"
	>
		<div class="container mx-auto flex h-full items-center px-6 py-10">
			<div
				class="grid h-fit w-full grid-cols-1 place-items-center gap-[24px] rounded-2xl border-[1px] border-[#F5EEDD] bg-[#F5EEDD]/10 p-[36px] text-[#F5EEDD] backdrop-blur-md md:grid-cols-2"
			>
				<div>
					<img
						src={HeaderIllustration}
						alt="Header Illustration Keliling Dunia dalam Delapan Puluh Hari"
					/>
				</div>
				<div class="flex w-full flex-col gap-[24px]">
					<div>
						<div class="text-[24px] md:text-[32px]">Jules Verne</div>
						<div class="text-[36px] leading-[100%] font-bold md:text-[48px]">
							Keliling Dunia <br />dalam <br />Delapan Puluh Hari
						</div>
					</div>
					<div>
						<div class="text-[20px] font-bold">Terjemahan Bahasa Indonesia</div>
						<div class="text-[18px]">
							dari Novel Klasik <br />
							<span class="italic">Around the World in Eighty Days by Jules Verne</span>
						</div>
						<div class="text-[14px] font-bold">Sumber: Proyek Guttenberg</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container mx-auto h-fit min-h-[500px] px-6 py-10">
		<div
			class="sticky top-4 z-50 flex h-fit w-full flex-col place-items-center gap-[8px] rounded-2xl border-[1px] border-[#06202B] bg-[#F5EEDD]/10 p-[24px] text-[#06202B] backdrop-blur-md md:flex-row md:gap-[24px]"
		>
			<div class="w-full">
				<div class="text-[36px] font-bold md:text-[48px]">DAFTAR ISI</div>
			</div>
			<div class="flex w-full flex-col text-left md:text-right">
				<div>
					<div class="text-[18px] leading-[100%] font-bold md:text-[24px]">
						Keliling Dunia dalam Delapan Puluh Hari
					</div>
					<div class="text-[18px] text-[#077A7D]">Jules Verne</div>
				</div>
				<div class="hidden text-[14px] text-[#077A7D] md:inline-block">
					Terjemahan Bahasa Indonesia dari Novel Klasik <br />
					<span class="font-bold text-[#06202B] italic"
						>Around the World in Eighty Days by Jules Verne</span
					>
				</div>
			</div>
		</div>
		<div class="mt-6 flex w-full flex-row gap-[24px]">
			<ul class="flex w-full flex-col gap-[24px]">
				{#each chapters as chapter}
					<li class="w-full">
						<a
							href={`/chapter/${chapter.slug}`}
							class="flex flex-col no-underline transition duration-300 hover:opacity-70"
						>
							<span class="text-[24px] font-bold text-[#06202B]">BAB {chapter.chapter}</span>
							<span class="text-[18px] text-[#077A7D]">{chapter.title}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</main>
