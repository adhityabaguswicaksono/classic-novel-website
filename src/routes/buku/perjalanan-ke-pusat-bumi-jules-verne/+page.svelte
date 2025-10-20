<script lang="ts">
	const bookLink = 'perjalanan-ke-pusat-bumi-jules-verne';
	const props = $props();
	const chapters = $state(props.data.chapters);
</script>

<svelte:head>
	<title>Novel Perjalanan ke Pusat Bumi - Bahasa Indonesia</title>
</svelte:head>

<main>
	<div
		class="h-[100dvh] w-full overflow-hidden bg-[radial-gradient(circle,_black_50%,_#488BC7_80%,_black_90%,_#488BC7_100%)] bg-cover bg-center px-3 py-8 lg:px-14"
	>
		<div class="flex h-full w-full items-center justify-center">
			<div class="flex flex-col gap-8 text-center text-white">
				<div>
					<span class="block text-4xl">Jules Verne</span>
					<h1 class="block text-6xl font-bold">Perjalanan ke Pusat Bumi</h1>
				</div>
				<div>
					<span class="block text-xl">Terjemahan Bahasa Indonesia dari Novel Klasik</span>
					<span class="block text-2xl font-bold italic"
						>Journey to the Centre of the Earth by Jules Verne</span
					>
				</div>
			</div>
		</div>
	</div>

	<div
		class="flex flex-col gap-0 bg-gradient-to-r from-black to-[#1B3348] px-3 text-2xl text-white lg:px-14"
	>
		<div class="flex w-full flex-col gap-9 py-14 lg:flex-row">
			<div
				class="static top-4 z-50 flex h-fit min-w-full flex-col gap-3 lg:sticky lg:min-w-[350px]"
			>
				<h2 class="text-6xl font-bold text-[#488BC7]">Sinopsis</h2>
				<div class="flex flex-col">
					<span class="block text-3xl font-bold">Perjalanan ke Pusat Bumi</span>
					<span class="block text-2xl">Jules Verne</span>
				</div>
			</div>

			<div
				class="prose w-full max-w-none text-justify text-2xl leading-[150%] text-white prose-headings:text-[#488BC7] prose-p:indent-16 prose-a:text-[#488BC7] prose-blockquote:font-normal prose-blockquote:not-italic prose-strong:text-white prose-hr:my-6"
			>
				<p>
					Perjalanan ke Pusat Bumi membawa kita pada ambisi luar biasa Profesor Otto Lidenbrock,
					seorang ahli geologi yang brilian namun eksentrik, yang terobsesi pada rahasia bumi.
				</p>
				<p>
					Ketika Profesor Lidenbrock menemukan manuskrip kuno yang misterius, ia percaya bahwa ia
					telah menemukan petunjuk untuk memasuki inti planet kita. Manuskrip itu mengarahkan pada
					sebuah pintu masuk yang tersembunyi jauh di dalam kawah gunung berapi yang sudah tidak
					aktif di Islandia.
				</p>
				<p>
					Didampingi keponakannya, Axel, yang lebih pragmatis, dan pemandu Islandia yang tangguh,
					Hans, Profesor Lidenbrock memulai sebuah ekspedisi yang berani dan belum pernah
					terpikirkan sebelumnya. Mereka meninggalkan dunia permukaan yang mereka kenal untuk
					menempuh jalur vertikal menuju kedalaman bumi.
				</p>
				<p>
					Apakah penemuan di bawah sana akan sesuai dengan teori yang mereka harapkan? Bahaya tak
					terduga apa yang menunggu di kegelapan abadi? Novel klasik Jules Verne ini mengundang
					pembaca untuk bergabung dalam perjalanan epik ke tempat yang belum pernah dijamah manusia,
					mempertanyakan batas-batas ilmu pengetahuan dan membangkitkan imajinasi tentang apa yang
					mungkin tersembunyi di jantung bumi.
				</p>
			</div>
		</div>

		<div class="flex w-full flex-col gap-9 py-14 lg:flex-row">
			<div
				class="static top-4 z-50 flex h-fit min-w-full flex-col gap-3 lg:sticky lg:min-w-[350px]"
			>
				<h2 class="text-6xl font-bold text-[#488BC7]">Daftar Isi</h2>
				<div class="flex flex-col">
					<span class="block text-3xl font-bold">Perjalanan ke Pusat Bumi</span>
					<span class="block text-2xl">Jules Verne</span>
				</div>
			</div>

			<div class="flex flex-col gap-8 text-justify leading-[150%]">
				{#each chapters as chapter}
					<a
						href={`/buku/${bookLink}/bab/${chapter.slug}`}
						class="flex flex-col transition-all duration-200 hover:opacity-75"
					>
						<h3 class="text-4xl font-bold text-[#488BC7]">Bab {chapter.chapter}</h3>
						<span>
							{chapter.title}
						</span>
					</a>
				{/each}
			</div>
		</div>

		<div class="flex w-full flex-col gap-9 py-14 lg:flex-row">
			<div
				class="static top-4 z-50 flex h-fit min-w-full flex-col gap-3 lg:sticky lg:min-w-[350px]"
			>
				<h2 class="text-6xl font-bold text-[#488BC7]">Tentang Novel</h2>
				<div class="flex flex-col">
					<span class="block text-3xl font-bold">Perjalanan ke Pusat Bumi</span>
					<span class="block text-2xl">Jules Verne</span>
				</div>
			</div>

			<div
				class="prose w-full max-w-none text-justify text-2xl leading-[150%] text-white prose-headings:text-[#488BC7] prose-p:indent-16 prose-a:text-[#488BC7] prose-blockquote:font-normal prose-blockquote:not-italic prose-strong:text-white prose-hr:my-6"
			>
				<p>
					Novel <strong>Perjalanan ke Pusat Bumi</strong> (judul asli:
					<em>Voyage au centre de la Terre</em>) diterbitkan pada tahun <strong>1864</strong> oleh
					penulis Prancis, <strong>Jules Verne</strong> (1828 – 1905).
				</p>

				<h3>1. Mengenal Jules Verne dan Genre Fiksi Ilmiah</h3>
				<p>
					Jules Verne adalah seorang visioner yang sering dianggap sebagai salah satu
					<strong>"Bapak Fiksi Ilmiah"</strong> modern, bersama dengan H.G. Wells.
				</p>
				<ul>
					<li>
						<strong>Visi Masa Depan:</strong> Verne memiliki kemampuan unik untuk meramalkan dan menggambarkan
						teknologi dan penemuan jauh sebelum teknologi itu benar-benar ada. Karyanya menggabungkan
						petualangan dengan detail teknis dan ilmiah, menjadikannya menarik sekaligus mendidik.
					</li>
					<li>
						<strong>Bagian dari Seri:</strong> Novel ini adalah bagian dari seri terkenalnya yang
						berjudul <strong>"Perjalanan Luar Biasa" (<em>Voyages Extraordinaires</em>)</strong>,
						yang bertujuan untuk merangkum seluruh pengetahuan geografis, geologis, ilmiah, dan
						kosmografis yang terakumulasi oleh sains modern.
					</li>
				</ul>

				<h3>2. Konteks Penciptaan Novel</h3>
				<p>
					Novel ini muncul pada masa di mana eksplorasi dan ilmu pengetahuan tengah berkembang
					pesat. Verne menulisnya dengan tujuan untuk:
				</p>
				<ul>
					<li>
						<strong>Membawa Ilmu Pengetahuan ke Publik:</strong> Verne ingin membuat ilmu geologi, mineralogi,
						dan paleontologi menjadi menarik dan mudah dicerna oleh masyarakat umum melalui sebuah cerita
						petualangan yang mendebarkan.
					</li>
					<li>
						<strong>Menggugah Semangat Eksplorasi:</strong> Kisah ini menangkap semangat era Victorian,
						di mana setiap sudut Bumi, baik di permukaan maupun yang belum terjamah, dianggap sebagai
						batas akhir yang harus ditaklukkan oleh manusia.
					</li>
				</ul>

				<h3>3. Dampak dan Warisan Novel</h3>
				<p>
					<strong>Perjalanan ke Pusat Bumi</strong> tidak hanya sukses pada masanya, tetapi juga meninggalkan
					jejak mendalam dalam budaya populer dan ilmu pengetahuan:
				</p>
				<ul>
					<li>
						<strong>Pencetus Genre Petualangan Fantastis:</strong> Novel ini menetapkan standar
						untuk cerita-cerita tentang ekspedisi ekstrem ke lokasi-lokasi yang tak terbayangkan. Ia
						menjadi cetak biru untuk genre petualangan bawah tanah (<em>subterranean fiction</em>).
					</li>
					<li>
						<strong>Inspirasi bagi Ilmuwan dan Penjelajah:</strong> Banyak ilmuwan, insinyur, dan penjelajah
						di masa depan menyatakan bahwa karya Verne, termasuk novel ini, telah menginspirasi mereka
						untuk mengejar karier di bidang eksplorasi dan sains.
					</li>
					<li>
						<strong>Adaptasi Budaya Populer:</strong> Kisah ini telah diadaptasi berkali-kali ke berbagai
						media, termasuk film, serial televisi, komik, dan bahkan atraksi taman hiburan, membuktikan
						daya tarik abadi dari perjalanan ke inti Bumi. Adaptasi yang paling terkenal antara lain
						film tahun 1959 dan 2008.
					</li>
				</ul>
				<p>
					Singkatnya, Jules Verne menciptakan novel ini sebagai jembatan antara fakta ilmiah dan
					fantasi, dan dampaknya terus terasa hingga kini sebagai salah satu karya fiksi ilmiah dan
					petualangan paling berpengaruh sepanjang masa.
				</p>
			</div>
		</div>
	</div>
</main>
