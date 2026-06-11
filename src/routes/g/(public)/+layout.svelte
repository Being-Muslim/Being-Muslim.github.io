<script lang="ts">
	import type { Snippet } from 'svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import '../styles.css';
	import NavbarG from '../NavbarG.svelte';
	import FooterG from '../FooterG.svelte';

	let { children }: { children: Snippet } = $props();

	beforeNavigate(() => {
		document.documentElement.style.scrollBehavior = 'auto';
		window.scrollTo(0, 0);
	});

	afterNavigate(() => {
		window.scrollTo(0, 0);
		// Restore after a tick
		requestAnimationFrame(() => {
			document.documentElement.style.scrollBehavior = '';
		});
	});
</script>

<div class="risala-root">
	<NavbarG />
	<main>{@render children()}</main>
	<FooterG />
</div>
