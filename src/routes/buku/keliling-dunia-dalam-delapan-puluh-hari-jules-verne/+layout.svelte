<script lang="ts">
	import './HomeKDDDPH.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Keliling Dunia dalam Delapan Puluh Hari - Bahasa Indonesia</title>
</svelte:head>

{@render children?.()}

<footer
	class="h-fit w-full bg-gradient-to-br from-[#7AE2CF] via-[#077A7D] via-35% to-[#06202B] bg-cover bg-center"
>
	<div class="container mx-auto flex h-full items-center px-6 py-10">
		<div
			class="grid h-fit w-full grid-cols-1 place-items-center gap-[24px] rounded-2xl border-[1px] border-[#F5EEDD] bg-[#F5EEDD]/10 p-[36px] text-[#F5EEDD] backdrop-blur-md md:grid-cols-2"
		>
			<div class="w-full">
				<a
					href="/buku/keliling-dunia-dalam-delapan-puluh-hari-jules-verne"
					class="flex w-fit flex-col transition duration-300 hover:opacity-70"
				>
					<div class="text-[18px]">Jules Verne</div>
					<div class="text-[24px] leading-[100%] font-bold">
						Keliling Dunia <br />dalam <br />Delapan Puluh Hari
					</div>
				</a>
			</div>

			<div class="flex h-full w-full flex-col justify-between gap-4 text-left md:text-right">
				<div>
					<div class="text-[18px] transition duration-300 hover:opacity-70">
						<a href="/buku/keliling-dunia-dalam-delapan-puluh-hari-jules-verne/tentang">
							&rsaquo; Tentang Web
						</a>
					</div>
					<div class="text-[18px] transition duration-300 hover:opacity-70">
						<a href="/"> &rsaquo; Menuju "Koleksi Buku Klasik" </a>
					</div>
				</div>

				<div class="text-[14px]">Tahun Pembuatan 2025</div>
			</div>
		</div>
	</div>
</footer>
