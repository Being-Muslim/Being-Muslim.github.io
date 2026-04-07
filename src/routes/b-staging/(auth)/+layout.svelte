<script lang="ts">
	import type { Snippet } from 'svelte';
	import '$lib/styles/concept-c.css';
	let { children }: { children: Snippet } = $props();
</script>

<div class="concept-c flex min-h-screen flex-col items-center justify-center bg-[#F2F2F7] px-4 py-12">
	<!-- Logo -->
	<a href="/b-staging" class="mb-10 flex items-center gap-2">
		<span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#007AFF]">
			<span class="text-sm font-bold text-white">BM</span>
		</span>
		<span class="font-display text-xl font-bold text-[#1C1C1E]">Being Muslim</span>
	</a>

	{@render children()}
</div>
