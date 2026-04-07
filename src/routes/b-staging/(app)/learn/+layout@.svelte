<script lang="ts">
	import type { Snippet } from 'svelte';
	import '$lib/styles/concept-c.css';
	let { children }: { children: Snippet } = $props();
</script>

<div class="concept-c min-h-screen bg-[#F2F2F7]">
	{@render children()}
</div>
