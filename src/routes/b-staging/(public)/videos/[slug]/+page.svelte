<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import {
		ArrowLeft,
		Play,
		Calendar,
		Clock,
		Share2,
		Download,
		Film,
		ThumbsUp,
		Bookmark
	} from 'lucide-svelte';

	let { data } = $props();

	let video = $derived(data.video);
	let relatedVideos = $derived(data.relatedVideos);

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{video.title} — Being Muslim</title>
	<meta name="description" content={video.description} />
</svelte:head>

<!-- Video Player Section -->
<section class="bg-bg-dark">
	<div class="mx-auto max-w-[1280px] px-4 pt-8 sm:px-6 lg:px-8">
		<!-- Back Link -->
		<a
			href="/videos"
			class="mb-6 inline-flex items-center gap-2 text-sm text-text-cream/60 transition-colors hover:text-text-cream"
		>
			<ArrowLeft class="h-4 w-4" />
			Back to Videos
		</a>

		<!-- Video Player Placeholder -->
		<div class="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-bg-dark via-accent-primary/10 to-bg-dark border border-white/10">
			<!-- Background graphic -->
			<div class="absolute inset-0 flex items-center justify-center">
				<Film class="h-24 w-24 text-text-cream/10 sm:h-32 sm:w-32" />
			</div>

			<!-- Play Button -->
			<div class="absolute inset-0 flex items-center justify-center">
				<button
					class="group flex h-20 w-20 items-center justify-center rounded-full bg-accent-primary/90 text-text-cream shadow-2xl transition-all duration-200 hover:scale-110 hover:bg-accent-primary sm:h-24 sm:w-24"
					aria-label="Play video"
				>
					<Play class="h-8 w-8 fill-current pl-1 sm:h-10 sm:w-10" />
				</button>
			</div>

			<!-- Duration indicator -->
			<div class="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-md bg-bg-dark/80 px-3 py-1.5 text-sm font-medium text-text-cream backdrop-blur-sm">
				<Clock class="h-3.5 w-3.5" />
				{video.duration}
			</div>
		</div>
	</div>
</section>

<!-- Video Info -->
<Section class="bg-bg-dark !pt-8 !pb-16">
	<div class="mx-auto max-w-4xl">
		<div class="flex flex-wrap items-center gap-3">
			<Badge variant="gold">
				{#snippet children()}{video.category}{/snippet}
			</Badge>
			<span class="flex items-center gap-1 text-sm text-text-cream/50">
				<Calendar class="h-3.5 w-3.5" />
				{formatDate(video.date)}
			</span>
			<span class="flex items-center gap-1 text-sm text-text-cream/50">
				<Clock class="h-3.5 w-3.5" />
				{video.duration}
			</span>
		</div>

		<h1 class="mt-4 font-display text-3xl font-bold text-text-cream sm:text-4xl">
			{video.title}
		</h1>

		<p class="mt-4 text-lg leading-relaxed text-text-cream/70">
			{video.description}
		</p>

		<!-- Expanded description (mock content) -->
		<div class="mt-6 space-y-4 text-text-cream/60">
			<p>
				In this video, we walk through the essential concepts step by step. Whether you are
				a complete beginner or revisiting the fundamentals, this guide is designed to meet
				you where you are. Each section builds on the previous one, so you can follow along
				at your own pace.
			</p>
			<p>
				Topics covered in this video include an overview of key terminology, practical
				demonstrations, common mistakes to avoid, and tips for building a consistent practice.
				We recommend watching the full video at least once, then returning to specific sections
				as needed.
			</p>
		</div>

		<!-- Action Buttons -->
		<div class="mt-8 flex flex-wrap gap-3">
			<Button variant="outline" size="sm" class="border-white/20 text-text-cream hover:bg-white/10 hover:text-text-cream">
				{#snippet children()}
					<Share2 class="h-4 w-4" />
					Share
				{/snippet}
			</Button>
			<Button variant="outline" size="sm" class="border-white/20 text-text-cream hover:bg-white/10 hover:text-text-cream">
				{#snippet children()}
					<Bookmark class="h-4 w-4" />
					Save
				{/snippet}
			</Button>
			<Button variant="outline" size="sm" class="border-white/20 text-text-cream hover:bg-white/10 hover:text-text-cream">
				{#snippet children()}
					<ThumbsUp class="h-4 w-4" />
					Helpful
				{/snippet}
			</Button>
		</div>
	</div>
</Section>

<!-- Related Videos -->
{#if relatedVideos.length > 0}
	<Section class="bg-secondary/50">
		<div class="text-center">
			<h2 class="font-display text-3xl font-bold">Related Videos</h2>
			<p class="mt-2 text-text-secondary">Continue learning with more video content</p>
		</div>

		<div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each relatedVideos as related}
				<a href="/videos/{related.slug}" class="group">
					<article class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent-primary/30 hover:shadow-lg">
						<!-- Thumbnail -->
						<div class="relative aspect-video bg-gradient-to-br from-bg-dark to-accent-primary/30">
							<div class="flex h-full items-center justify-center">
								<Film class="h-12 w-12 text-text-cream/20" />
							</div>
							<div class="absolute inset-0 flex items-center justify-center">
								<div class="flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary/90 text-text-cream transition-transform duration-200 group-hover:scale-110">
									<Play class="h-5 w-5 fill-current pl-0.5" />
								</div>
							</div>
							<div class="absolute bottom-3 right-3">
								<span class="rounded-md bg-bg-dark/80 px-2 py-1 text-xs font-medium text-text-cream backdrop-blur-sm">
									{related.duration}
								</span>
							</div>
						</div>

						<!-- Content -->
						<div class="flex flex-1 flex-col p-5">
							<Badge variant="secondary" class="w-fit">
								{#snippet children()}{related.category}{/snippet}
							</Badge>
							<h3 class="mt-3 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent-primary">
								{related.title}
							</h3>
							<p class="mt-2 flex-1 text-sm text-text-secondary line-clamp-2">
								{related.description}
							</p>
						</div>
					</article>
				</a>
			{/each}
		</div>

		<div class="mt-10 text-center">
			<a href="/videos">
				<Button variant="outline">
					{#snippet children()}
						Browse All Videos
						<Play class="ml-1 h-4 w-4" />
					{/snippet}
				</Button>
			</a>
		</div>
	</Section>
{/if}
