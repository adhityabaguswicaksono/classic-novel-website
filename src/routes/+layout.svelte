<script lang="ts">
	import '../app.css';
	import './Home.css';
	import favicon from '$lib/assets/faviconKBK.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Koleksi Buku Klasik Bahasa Indonesia</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
