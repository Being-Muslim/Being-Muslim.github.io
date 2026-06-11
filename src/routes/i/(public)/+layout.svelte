<script lang="ts">
	import type { Snippet } from 'svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import '../styles.css';
	import NavbarI from '../NavbarI.svelte';
	import FooterI from '../FooterI.svelte';

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

<div class="zellij-root">
	<NavbarI />
	<main>{@render children()}</main>
	<FooterI />
</div>
