<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { videos } from '$lib/data/mock.js';
	import { Search, Play, Clock, Film } from 'lucide-svelte';

	let search = $state('');
	let activeCategory = $state<string>('All');

	const categories = ['All', ...new Set(videos.map((v) => v.category))];

	let filteredVideos = $derived.by(() => {
		let result = videos;

		if (activeCategory !== 'All') {
			result = result.filter((v) => v.category === activeCategory);
		}

		if (search.trim()) {
			const q = search.toLowerCase().trim();
			result = result.filter(
				(v) =>
					v.title.toLowerCase().includes(q) ||
					v.description.toLowerCase().includes(q)
			);
		}

		return result;
	});

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Video Library — Being Muslim</title>
	<meta
		name="description"
		content="Watch educational videos on Islamic prayer, Quran recitation, and foundational teachings. Visual guides for new Muslims and those deepening their practice."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-bg-dark py-20 sm:py-28">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<Badge variant="gold">
				{#snippet children()}Visual Learning{/snippet}
			</Badge>
			<h1 class="mt-4 font-display text-4xl font-bold text-text-cream sm:text-5xl">
				Video Library
			</h1>
			<p class="mt-4 text-lg text-text-cream/70">
				Learn at your own pace with clear, step-by-step video guides on prayer, Quran, and the foundations of Islam.
			</p>
		</div>
	</div>
</section>

<!-- Search & Filters -->
<Section class="-mt-8 relative z-10 !pt-0">
	<div class="mx-auto max-w-2xl">
		<!-- Search Bar -->
		<div class="relative">
			<Search class="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
			<input
				type="text"
				placeholder="Search videos..."
				bind:value={search}
				class="flex h-12 w-full rounded-lg border border-input bg-background pl-11 pr-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-lg"
			/>
		</div>

		<!-- Category Filter Pills -->
		<div class="mt-6 flex flex-wrap justify-center gap-2">
			{#each categories as category}
				<button
					onclick={() => (activeCategory = category)}
					class="rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 {activeCategory === category
						? 'bg-accent-primary text-text-cream'
						: 'bg-surface border border-border text-text-secondary hover:border-accent-primary/30 hover:text-text-primary'}"
				>
					{category}
				</button>
			{/each}
		</div>
	</div>
</Section>

<!-- Videos Grid -->
<Section class="!pt-0">
	{#if filteredVideos.length === 0}
		<div class="py-16 text-center">
			<Film class="mx-auto h-12 w-12 text-text-secondary/40" />
			<h3 class="mt-4 font-display text-xl font-semibold">No videos found</h3>
			<p class="mt-2 text-text-secondary">
				Try adjusting your search or filter to find what you're looking for.
			</p>
			<Button
				variant="outline"
				class="mt-6"
				onclick={() => {
					search = '';
					activeCategory = 'All';
				}}
			>
				{#snippet children()}Clear Filters{/snippet}
			</Button>
		</div>
	{:else}
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each filteredVideos as video}
				<a href="/videos/{video.slug}" class="group">
					<article class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent-primary/30 hover:shadow-lg">
						<!-- Thumbnail with Play Overlay -->
						<div class="relative aspect-video bg-gradient-to-br from-bg-dark to-accent-primary/30">
							<div class="flex h-full items-center justify-center">
								<Film class="h-16 w-16 text-text-cream/20" />
							</div>

							<!-- Play Button Overlay -->
							<div class="absolute inset-0 flex items-center justify-center">
								<div class="flex h-14 w-14 items-center justify-center rounded-full bg-accent-primary/90 text-text-cream shadow-lg transition-transform duration-200 group-hover:scale-110">
									<Play class="h-6 w-6 fill-current pl-0.5" />
								</div>
							</div>

							<!-- Duration Badge -->
							<div class="absolute bottom-3 right-3">
								<span class="rounded-md bg-bg-dark/80 px-2 py-1 text-xs font-medium text-text-cream backdrop-blur-sm">
									{video.duration}
								</span>
							</div>

							<!-- Featured Badge -->
							{#if video.featured}
								<div class="absolute top-3 left-3">
									<Badge variant="gold">
										{#snippet children()}Featured{/snippet}
									</Badge>
								</div>
							{/if}
						</div>

						<!-- Content -->
						<div class="flex flex-1 flex-col p-5">
							<div class="flex items-center gap-2">
								<Badge variant="secondary">
									{#snippet children()}{video.category}{/snippet}
								</Badge>
								<span class="text-xs text-text-secondary">{formatDate(video.date)}</span>
							</div>

							<h2 class="mt-3 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent-primary">
								{video.title}
							</h2>

							<p class="mt-2 flex-1 text-sm leading-relaxed text-text-secondary line-clamp-2">
								{video.description}
							</p>

							<div class="mt-4 flex items-center gap-2 text-sm font-medium text-accent-primary">
								<Play class="h-4 w-4" />
								Watch Now
							</div>
						</div>
					</article>
				</a>
			{/each}
		</div>
	{/if}
</Section>
