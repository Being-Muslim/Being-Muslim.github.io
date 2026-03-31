<script lang="ts">
	import { base } from '$app/paths';
	import '../../../app.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-bg-primary px-4 py-12">
	<!-- Logo -->
	<a href="{base}/" class="mb-8 flex items-center gap-2.5">
		<div class="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary">
			<svg viewBox="0 0 24 24" class="h-5 w-5 text-text-cream" fill="currentColor">
				<path d="M12 2C10.9 4.5 8 6 8 9c0 2 1 3.5 2.5 4.5C9.5 14 9 15 9 16.5c0 2 1.5 3.5 3 5.5 1.5-2 3-3.5 3-5.5 0-1.5-.5-2.5-1.5-3C14.9 12.5 16 11 16 9c0-3-2.9-4.5-4-7z" />
			</svg>
		</div>
		<span class="font-display text-xl font-bold text-text-primary">Being Muslim</span>
	</a>

	{@render children()}
</div>
