<script lang="ts">
	import type { Snippet } from 'svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import '../styles.css';
	import NavbarF from '../NavbarF.svelte';
	import FooterF from '../FooterF.svelte';

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

<div class="layl-root">
	<NavbarF />
	<main>{@render children()}</main>
	<FooterF />
</div>
