<script lang="ts">
</script>

<svelte:head>
	<title>Tentang Web - Novel Keliling Dunia dalam Delapan Puluh Hari - Bahasa Indonesia</title>
</svelte:head>

<main>
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
		<slot />
	</article>
</main>
