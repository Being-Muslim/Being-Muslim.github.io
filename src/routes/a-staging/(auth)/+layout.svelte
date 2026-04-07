<script lang="ts">
	import '$lib/styles/concept-b.css';
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<div class="concept-b flex min-h-screen flex-col items-center justify-center bg-bg-primary px-4 py-12">
	<!-- Brutalist logo link -->
	<a href="/a-staging" class="mb-10 font-display text-2xl font-bold tracking-tight text-text-primary">
		BEING <span class="highlight">MUSLIM</span>
	</a>
	{@render children()}
</div>
