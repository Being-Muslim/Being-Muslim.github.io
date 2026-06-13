<script lang="ts">
	import '$lib/styles/concept-b.css';
	import type { Snippet } from 'svelte';
	import Navbar from '$lib/components/concepts/b/Navbar.svelte';
	import Footer from '$lib/components/concepts/b/Footer.svelte';
	let { children }: { children: Snippet } = $props();
</script>

<div class="concept-b min-h-screen">
	<Navbar />
	<main>{@render children()}</main>
	<Footer />
</div>
