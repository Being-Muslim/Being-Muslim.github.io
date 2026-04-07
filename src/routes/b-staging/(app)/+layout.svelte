<script lang="ts">
	import type { Snippet } from 'svelte';
	import '$lib/styles/concept-c.css';
	import Navbar from '$lib/components/concepts/c/Navbar.svelte';
	import Footer from '$lib/components/concepts/c/Footer.svelte';
	let { children }: { children: Snippet } = $props();
</script>

<div class="concept-c min-h-screen">
	<Navbar />
	<main>{@render children()}</main>
	<Footer />
</div>
