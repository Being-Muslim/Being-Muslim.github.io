<script lang="ts">
	import type { Snippet } from 'svelte';
	import NavbarI from '../NavbarI.svelte';
	import FooterI from '../FooterI.svelte';
	import '../styles.css';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="bm-root">
	<NavbarI />
	{@render children()}
	<FooterI />
</div>
