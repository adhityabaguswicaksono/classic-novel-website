<script lang="ts">
	import favicon from '$lib/assets/faviconKBK.svg';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	const props = $props();
	const bookCatalogues = $state(props.data.books);

	onMount(async () => {
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);

		gsap.utils.toArray<HTMLElement>('.animate-section').forEach((el) => {
			gsap.from(el, {
				scrollTrigger: {
					trigger: el,
					start: 'top 90%',
					toggleActions: 'play none none reverse'
				},
				opacity: 0,
				y: 100,
				duration: 0.75,
				ease: 'power3.out'
			});
		});
	});
</script>

<svelte:head>
	<title>Koleksi Buku Klasik Bahasa Indonesia</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="w-full px-2 lg:px-14">
	<div class="animate-section h-screen min-h-[800px] w-full py-2 lg:py-12">
		<div
			class="from-kbk-main to-kbk-secondary flex h-full w-full flex-col justify-between gap-9 overflow-hidden rounded-3xl bg-linear-to-b p-6 text-white"
		>
			<div class="z-10 text-right">
				<span class="text-xl lg:text-2xl"
					>Baca Buku Klasik Menjadi Lebih Mudah dan Menyenangkan</span
				>
			</div>

			<div class="relative flex h-full w-full items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1750"
					height="749"
					viewBox="0 0 1750 749"
					fill="none"
					class="absolute top-1/2 left-1/2 h-fit w-[125dvw] min-w-[2000px] -translate-x-1/2 -translate-y-1/2"
				>
					<g filter="url(#filter0_d_216_2)">
						<path
							d="M182.888 112C138.749 257.822 94.6109 403.644 118.922 420.387C143.232 437.13 237.33 320.376 272.465 309.887C307.601 299.397 280.924 398.711 304.529 391.253C328.134 383.796 402.83 266.557 429.669 275.439C456.508 284.32 433.226 422.875 439.179 453.8C445.131 484.725 481.024 403.82 498.059 381.036C515.094 358.252 512.184 396.039 502.682 452.082C493.179 508.125 477.173 581.279 494.635 571.002C512.096 560.726 563.51 464.803 583.448 451.238C603.386 437.673 590.29 509.373 589.121 533.956C588.648 543.921 621.758 501.593 637.449 514.57C653.081 527.5 639.558 580.838 678.809 545.208C718.06 509.579 799.062 390.402 839.092 371.398C879.122 352.394 875.727 437.174 893.379 433.614C911.032 430.054 949.835 335.585 971.279 317.682C992.724 299.779 995.634 361.305 1011.93 349.641C1028.22 337.978 1057.81 251.26 1077.17 251.641C1096.54 252.023 1104.78 342.132 1120.43 382.739C1136.07 423.345 1158.87 411.718 1184.2 401.853C1209.52 391.988 1236.68 384.236 1245.1 441.527C1253.51 498.818 1242.36 621.386 1258.92 635.597C1275.49 649.807 1320.11 551.947 1345.28 529.148C1370.45 506.349 1374.82 561.577 1393.31 581.792C1411.81 602.008 1444.31 585.536 1472.45 547.983C1500.59 510.43 1523.38 452.295 1543.62 462.072C1563.85 471.85 1580.82 551.301 1596.12 584.237C1611.41 617.173 1624.51 601.185 1638 584.714"
							stroke="white"
							stroke-width="24"
							stroke-linecap="round"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_216_2"
							x="0"
							y="-0.00317383"
							width="1750"
							height="749.003"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset />
							<feGaussianBlur stdDeviation="50" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_216_2" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_216_2"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
			</div>

			<div class="z-10">
				<h1 class="text-7xl font-bold lg:text-8xl">Koleksi Buku Klasik</h1>
				<span class="text-2xl lg:text-4xl">Terjemahan Bahasa Indonesia</span>
			</div>
		</div>
	</div>

	<div class="animate-section h-fit w-full py-12">
		<div class="flex flex-col gap-9">
			<div class="flex w-full flex-col items-center justify-between gap-2 lg:flex-row lg:gap-6">
				<div class="w-full">
					<h2 class="text-kbk-secondary text-6xl font-bold lg:text-7xl">Katalog Buku Klasik</h2>
				</div>
				<div class="w-full lg:w-max lg:text-right">
					<h3 class="text-kbk-secondary text-3xl font-bold lg:text-4xl lg:whitespace-nowrap">
						Koleksi Buku Klasik
					</h3>
					<span class="text-md text-kbk-main">Terjemahan Bahasa Indonesia</span>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
				{#each bookCatalogues as book}
					<div
						class="flex h-full w-full flex-col justify-between gap-9 overflow-hidden rounded-3xl p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<a href={`/buku/${book.tautan}`} aria-label="link">
							<div class="flex justify-end">
								<div
									class="from-kbk-main to-kbk-secondary z-10 flex h-[72px] w-[72px] items-center justify-center rounded-3xl bg-linear-to-b transition-all duration-300 hover:scale-110 active:scale-105"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
									>
										<path
											d="M28 4L4 28M28 4H4M28 4V28"
											stroke="white"
											stroke-width="8"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
						</a>

						<div class="relative flex h-full w-full items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1550"
								height="549"
								viewBox="0 0 1550 549"
								fill="none"
								class="absolute top-1/2 left-1/2 h-fit w-[125dvw] -translate-x-1/2 -translate-y-1/2 opacity-10"
							>
								<path
									d="M82.8877 12C38.7493 157.822 -5.38906 303.644 18.9216 320.387C43.2323 337.13 137.33 220.376 172.465 209.887C207.601 199.397 180.924 298.711 204.529 291.253C228.134 283.796 302.83 166.557 329.669 175.439C356.508 184.32 333.226 322.875 339.179 353.8C345.131 384.725 381.024 303.82 398.059 281.036C415.094 258.252 412.184 296.039 402.682 352.082C393.179 408.125 377.173 481.279 394.635 471.002C412.096 460.726 463.51 364.803 483.448 351.238C503.386 337.673 490.29 409.373 489.121 433.956C488.648 443.921 521.758 401.593 537.449 414.57C553.081 427.5 539.558 480.838 578.809 445.208C618.06 409.579 699.062 290.402 739.092 271.398C779.122 252.394 775.727 337.174 793.379 333.614C811.032 330.054 849.835 235.585 871.279 217.682C892.724 199.779 895.634 261.305 911.927 249.641C928.22 237.978 957.807 151.26 977.172 151.641C996.537 152.023 1004.78 242.132 1020.43 282.739C1036.07 323.345 1058.87 311.718 1084.2 301.853C1109.52 291.988 1136.68 284.236 1145.1 341.527C1153.51 398.818 1142.36 521.386 1158.92 535.597C1175.49 549.807 1220.11 451.947 1245.28 429.148C1270.45 406.349 1274.82 461.577 1293.31 481.792C1311.81 502.008 1344.31 485.536 1372.45 447.983C1400.59 410.43 1423.38 352.295 1443.62 362.072C1463.85 371.85 1480.82 451.301 1496.12 484.237C1511.41 517.173 1524.51 501.185 1538 484.714"
									stroke="url(#paint0_linear_218_4)"
									stroke-width="24"
									stroke-linecap="round"
								/>
								<defs>
									<linearGradient
										id="paint0_linear_218_4"
										x1="12"
										y1="274.5"
										x2="1538"
										y2="274.5"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#0084FF" />
										<stop offset="1" stop-color="#024585" />
									</linearGradient>
								</defs>
							</svg>
						</div>

						<div class="z-10">
							<div
								class="top-0 left-0 mb-2 h-fit w-fit rounded-full px-2 py-1 text-xs text-white
							{book.sudah_selesai ? 'bg-emerald-500' : 'bg-blue-500'}"
							>
								{book.sudah_selesai ? 'Sudah Selesai' : 'Belum Selesai'}
							</div>

							<h1 class="text-kbk-secondary text-3xl font-bold lg:text-4xl">{book.judul}</h1>
							<span class="text-kbk-main text-xl">{book.penulis}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="animate-section h-fit w-full py-12">
		<div class="flex flex-col gap-9">
			<div class="flex w-full flex-col items-center justify-between gap-2 lg:flex-row lg:gap-6">
				<div class="w-full">
					<h2 class="text-kbk-secondary text-6xl font-bold lg:text-7xl">Tentang Web</h2>
				</div>
				<div class="w-full lg:w-max lg:text-right">
					<h3 class="text-kbk-secondary text-3xl font-bold lg:text-4xl lg:whitespace-nowrap">
						Koleksi Buku Klasik
					</h3>
					<span class="text-md text-kbk-main">Terjemahan Bahasa Indonesia</span>
				</div>
			</div>

			<div class="prose max-w-none text-justify leading-loose">
				<h1>Koleksi Buku Klasik</h1>

				<p>
					Selamat datang di <strong>Koleksi Buku Klasik</strong>, sebuah ruang baca digital yang
					menghadirkan
					<em>karya-karya sastra abadi</em> dalam bahasa Indonesia sebagai upaya memperluas akses literasi
					bagi masyarakat.
				</p>

				<p>
					Kami meyakini bahwa setiap buku klasik menyimpan <em>nilai, pemikiran, dan imajinasi</em>
					yang tetap relevan lintas generasi. Melalui situs ini, pembaca dapat menikmati karya-karya
					sastra legendaris tanpa terhalang oleh jarak, biaya, ataupun keterbatasan cetakan fisik.
				</p>

				<h2>Layanan yang Kami Sediakan</h2>
				<ul>
					<li>
						Penyediaan akses mudah terhadap <strong>buku-buku klasik dunia</strong> dalam terjemahan
						bahasa Indonesia.
					</li>
					<li>
						Terjemahan yang berupaya menjaga kesetiaan pada naskah asli sekaligus tetap nyaman
						dibaca.
					</li>
					<li>
						Pengalaman membaca daring yang <em>ringan, cepat, serta ramah bagi pengguna</em>.
					</li>
				</ul>

				<h2>Pentingnya Membaca Karya Klasik</h2>
				<p>
					Dari kisah petualangan yang menegangkan, pemikiran ilmiah yang imajinatif, hingga drama
					kemanusiaan yang menggugah, karya klasik merupakan <strong>warisan sastra</strong> yang tidak
					lekang oleh waktu. Melalui satu akses sederhana, pembaca dapat membuka jendela menuju khazanah
					pengetahuan dan inspirasi.
				</p>

				<blockquote>
					<em>
						"Karya klasik tidak hanya merekam masa lalu — tetapi juga menjadi cermin untuk memahami
						masa kini."
					</em>
				</blockquote>

				<p>
					Mari menjelajahi <strong>Koleksi Buku Klasik</strong> dan menemukan kembali keindahan karya-karya
					abadi. Setiap halaman merupakan undangan untuk menelusuri perjalanan lintas waktu, budaya,
					dan gagasan besar umat manusia.
				</p>
			</div>
		</div>
	</div>

	<div class="animate-section h-fit w-full py-2 lg:py-12">
		<div
			class="from-kbk-main to-kbk-secondary h-full w-full overflow-hidden rounded-3xl bg-linear-to-b px-6 py-24 text-white"
		>
			<div class="flex flex-col gap-6">
				<div class="flex w-full flex-col items-center justify-between gap-2 lg:flex-row lg:gap-8">
					<a
						href="/"
						class="z-10 w-full text-center transition-all duration-300 hover:opacity-70 lg:w-fit lg:text-left"
					>
						<h1 class="text-5xl font-bold">Koleksi Buku Klasik</h1>
						<span class="text-2xl">Terjemahan Bahasa Indonesia</span>
					</a>

					<div class="relative flex h-full w-fit items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1750"
							height="749"
							viewBox="0 0 1750 749"
							fill="none"
							class="absolute top-1/2 left-1/2 h-fit w-[125dvw] min-w-[2000px] -translate-x-1/2 -translate-y-1/2 opacity-10"
						>
							<g filter="url(#filter0_d_216_2)">
								<path
									d="M182.888 112C138.749 257.822 94.6109 403.644 118.922 420.387C143.232 437.13 237.33 320.376 272.465 309.887C307.601 299.397 280.924 398.711 304.529 391.253C328.134 383.796 402.83 266.557 429.669 275.439C456.508 284.32 433.226 422.875 439.179 453.8C445.131 484.725 481.024 403.82 498.059 381.036C515.094 358.252 512.184 396.039 502.682 452.082C493.179 508.125 477.173 581.279 494.635 571.002C512.096 560.726 563.51 464.803 583.448 451.238C603.386 437.673 590.29 509.373 589.121 533.956C588.648 543.921 621.758 501.593 637.449 514.57C653.081 527.5 639.558 580.838 678.809 545.208C718.06 509.579 799.062 390.402 839.092 371.398C879.122 352.394 875.727 437.174 893.379 433.614C911.032 430.054 949.835 335.585 971.279 317.682C992.724 299.779 995.634 361.305 1011.93 349.641C1028.22 337.978 1057.81 251.26 1077.17 251.641C1096.54 252.023 1104.78 342.132 1120.43 382.739C1136.07 423.345 1158.87 411.718 1184.2 401.853C1209.52 391.988 1236.68 384.236 1245.1 441.527C1253.51 498.818 1242.36 621.386 1258.92 635.597C1275.49 649.807 1320.11 551.947 1345.28 529.148C1370.45 506.349 1374.82 561.577 1393.31 581.792C1411.81 602.008 1444.31 585.536 1472.45 547.983C1500.59 510.43 1523.38 452.295 1543.62 462.072C1563.85 471.85 1580.82 551.301 1596.12 584.237C1611.41 617.173 1624.51 601.185 1638 584.714"
									stroke="white"
									stroke-width="24"
									stroke-linecap="round"
								/>
							</g>
							<defs>
								<filter
									id="filter0_d_216_2"
									x="0"
									y="-0.00317383"
									width="1750"
									height="749.003"
									filterUnits="userSpaceOnUse"
									color-interpolation-filters="sRGB"
								>
									<feFlood flood-opacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset />
									<feGaussianBlur stdDeviation="50" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_216_2"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_216_2"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					</div>

					<div class="z-10 w-full text-center lg:w-fit lg:text-right">
						<span class="text-lg lg:text-xl">
							Baca Buku Klasik Menjadi <br /> Lebih Mudah dan Menyenangkan
						</span>
					</div>
				</div>

				<div class="z-10">
					<p class="w-full text-center">Tahun Pembuatan 2025</p>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	* {
		@apply scroll-smooth;
		font-family: 'Outfit', sans-serif;
	}
</style>
