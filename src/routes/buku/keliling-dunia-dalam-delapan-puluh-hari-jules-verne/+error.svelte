<script lang="ts">
	import { page } from '$app/state';
</script>

<main>
	<div
		class="h-fit w-full bg-gradient-to-br from-[#7AE2CF] via-[#077A7D] via-35% to-[#06202B] bg-cover bg-center"
	>
		<div class="container mx-auto flex h-full items-center px-6 py-10">
			<div
				class="grid h-fit w-full grid-cols-1 place-items-center gap-[6px] rounded-2xl border-[1px] border-[#F5EEDD] bg-[#F5EEDD]/10 px-[36px] py-[24px] text-[#F5EEDD] backdrop-blur-md md:grid-cols-2 md:gap-[24px]"
			>
				<a href="/" class="flex w-full flex-col">
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

	<article
		class="container mx-auto flex min-h-[500px] w-full flex-col justify-center gap-[24px] px-6 py-10 text-center"
	>
		<div class="flex w-full flex-col justify-center">
			<h1 class="text-[98px] leading-[100%] font-bold text-[#06202B]">{page.status}</h1>
			<h2 class="text-[32px] text-[#077A7D]">{page.error?.message}</h2>
		</div>
		<div class="flex w-full justify-center gap-[12px]">
			<a href={`/`} class="w-fit">
				<div
					class="flex h-[36px] w-fit flex-row items-center gap-[12px] rounded-md border border-[#F5EEDD] bg-[#077A7D] px-[24px] py-[18px] text-white transition duration-300 hover:opacity-70"
				>
					<span>&#127968;</span> <span>Kembali ke Beranda</span>
				</div>
			</a>
		</div>
	</article>
</main>
