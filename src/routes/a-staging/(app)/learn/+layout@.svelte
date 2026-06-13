<script lang="ts">
	import '$lib/styles/concept-b.css';
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<!-- Layout reset — minimal chrome for lesson player -->
<div class="concept-b min-h-screen bg-bg-primary">
	{@render children()}
</div>
