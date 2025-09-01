<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(async () => {
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);

		gsap.utils.toArray<HTMLElement>('.animate-section').forEach((el) => {
			gsap.from(el, {
				scrollTrigger: {
					trigger: el,
					start: 'top 70%',
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

<main class="w-full px-2 lg:px-14">
	<div class="animate-section h-screen min-h-[800px] w-full py-2 lg:py-12">
		<div
			class="from-kbk-main to-kbk-secondary flex h-full w-full flex-col justify-between gap-9 overflow-hidden rounded-3xl bg-linear-to-b p-6 text-white"
		>
			<div class="z-10 flex w-full flex-row justify-between gap-6">
				<div class="text-2xl">
					<a href="/" class="transition-all duration-300 hover:opacity-70">
						<div class="flex flex-row gap-2">
							<div
								class="z-10 flex h-[24px] w-[24px] -rotate-90 items-center justify-center rounded-3xl bg-linear-to-b"
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

							<span>Kembali ke Halaman Utama</span>
						</div>
					</a>
				</div>
				<div class="text-right">
					<h1 class="text-9xl leading-[100%] font-bold">{page.status}</h1>
					<h2 class="text-[32px]">{page.error?.message}</h2>
				</div>
			</div>

			<div class="relative flex h-full w-full items-center">
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
</main>

<style>
	* {
		@apply scroll-smooth;
		font-family: 'Outfit', sans-serif;
	}
</style>
