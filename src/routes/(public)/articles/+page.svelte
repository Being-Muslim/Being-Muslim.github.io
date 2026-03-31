<script lang="ts">
	import { base } from '$app/paths';
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { articles, articleCategories } from '$lib/data/mock.js';
	import {
		Search,
		BookOpen,
		Clock,
		Calendar,
		User,
		ArrowRight
	} from 'lucide-svelte';

	let search = $state('');
	let activeCategory = $state<string>('All');

	let filteredArticles = $derived.by(() => {
		let result = articles;

		if (activeCategory !== 'All') {
			result = result.filter((a) => a.category === activeCategory);
		}

		if (search.trim()) {
			const q = search.toLowerCase().trim();
			result = result.filter(
				(a) =>
					a.title.toLowerCase().includes(q) ||
					a.excerpt.toLowerCase().includes(q) ||
					a.author.toLowerCase().includes(q)
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
	<title>Resources & Articles — Being Muslim</title>
	<meta
		name="description"
		content="Explore articles and resources on Islamic faith, prayer, fasting, community, and daily life. Written for new Muslims, converts, and those reconnecting with their faith."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-bg-dark py-20 sm:py-28">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<Badge variant="gold">
				{#snippet children()}Knowledge & Guidance{/snippet}
			</Badge>
			<h1 class="mt-4 font-display text-4xl font-bold text-text-cream sm:text-5xl">
				Resources & Articles
			</h1>
			<p class="mt-4 text-lg text-text-cream/70">
				Thoughtful articles to guide you on every step of your Islamic journey — from foundational beliefs to daily practice.
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
				placeholder="Search articles..."
				bind:value={search}
				class="flex h-12 w-full rounded-lg border border-input bg-background pl-11 pr-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-lg"
			/>
		</div>

		<!-- Category Filter Pills -->
		<div class="mt-6 flex flex-wrap justify-center gap-2">
			{#each articleCategories as category}
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

<!-- Articles Grid -->
<Section class="!pt-0">
	{#if filteredArticles.length === 0}
		<div class="py-16 text-center">
			<BookOpen class="mx-auto h-12 w-12 text-text-secondary/40" />
			<h3 class="mt-4 font-display text-xl font-semibold">No articles found</h3>
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
			{#each filteredArticles as article}
				<a href="{base}/articles/{article.slug}" class="group">
					<article class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent-primary/30 hover:shadow-lg">
						<!-- Image Placeholder -->
						<div class="aspect-[16/10] bg-gradient-to-br from-accent-primary/20 to-accent-gold/20">
							<div class="flex h-full items-center justify-center">
								<BookOpen class="h-12 w-12 text-accent-primary/40" />
							</div>
						</div>

						<!-- Content -->
						<div class="flex flex-1 flex-col p-5">
							<div class="flex items-center gap-2">
								<Badge variant="secondary">
									{#snippet children()}{article.category}{/snippet}
								</Badge>
								<span class="flex items-center gap-1 text-xs text-text-secondary">
									<Clock class="h-3 w-3" />
									{article.readingTime}
								</span>
							</div>

							<h2 class="mt-3 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent-primary">
								{article.title}
							</h2>

							<p class="mt-2 flex-1 text-sm leading-relaxed text-text-secondary line-clamp-2">
								{article.excerpt}
							</p>

							<div class="mt-4 flex items-center justify-between border-t border-border pt-4">
								<div class="flex items-center gap-2">
									<div class="flex h-7 w-7 items-center justify-center rounded-full bg-accent-primary/10 text-xs font-bold text-accent-primary">
										{article.author[0]}
									</div>
									<span class="text-xs font-medium text-text-primary">{article.author}</span>
								</div>
								<span class="flex items-center gap-1 text-xs text-text-secondary">
									<Calendar class="h-3 w-3" />
									{formatDate(article.date)}
								</span>
							</div>
						</div>
					</article>
				</a>
			{/each}
		</div>
	{/if}
</Section>
