<script lang="ts">
	import './HomeKDDDPH.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Keliling Dunia dalam Delapan Puluh Hari - Bahasa Indonesia</title>
</svelte:head>

{@render children?.()}

<footer
	class="h-fit w-full overflow-hidden bg-[radial-gradient(circle,_black_50%,_#488BC7_80%,_black_90%,_#488BC7_100%)] bg-cover bg-center px-3 py-14 lg:px-14"
>
	<div class="flex h-full w-full items-center justify-center">
		<div class="flex flex-col gap-8 text-center text-white">
			<div>
				<span class="block text-2xl">Jules Verne</span>
				<h1 class="block text-5xl font-bold">Perjalanan ke Pusat Bumi</h1>
			</div>

			<div class="flex flex-col items-center justify-center gap-1.5">
				<span class="block text-2xl font-bold">Tautan Penting</span>

				<div class="flex w-full flex-col items-center justify-center gap-1">
					<a
						href="/"
						class="flex w-fit flex-row items-center justify-center gap-3 transition-all duration-200 hover:opacity-75"
					>
						<div class="h-[9px] w-[9px] rounded-full bg-[#488BC7]"></div>
						<span class="block text-xl underline decoration-wavy">
							Menuju Halaman “Koleksi Buku Klasik”
						</span>
						<div class="h-[9px] w-[9px] rounded-full bg-[#488BC7]"></div>
					</a>
				</div>
			</div>

			<span class="block">Tahun Pembuatan 2025</span>
		</div>
	</div>
</footer>
