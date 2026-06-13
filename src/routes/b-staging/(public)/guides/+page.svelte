<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { guides } from '$lib/data/mock.js';
	import {
		ArrowRight,
		BookOpen,
		Clock,
		ListChecks,
		Compass,
		Footprints,
		Map
	} from 'lucide-svelte';
</script>

<svelte:head>
	<title>Step-by-Step Guides — Being Muslim</title>
	<meta
		name="description"
		content="Follow structured, step-by-step guides on your Islamic journey. From your first 30 days as a Muslim to learning how to pray — practical guidance at your own pace."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-bg-dark py-20 sm:py-28">
	<!-- Subtle background pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="guide-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
					<circle cx="20" cy="20" r="1.5" fill="currentColor" class="text-text-cream" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#guide-pattern)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<div class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gold/20">
				<Map class="h-7 w-7 text-accent-gold" />
			</div>
			<h1 class="font-display text-4xl font-bold text-text-cream sm:text-5xl">
				Your Journey, Step by Step
			</h1>
			<p class="mt-4 text-lg text-text-cream/70">
				Structured guides to walk with you at every stage — from curious beginner to committed practitioner. Take it one step at a time.
			</p>
		</div>
	</div>
</section>

<!-- Guides Grid -->
<Section>
	<div class="grid gap-8 sm:grid-cols-2">
		{#each guides as guide, i}
			<a href="/guides/{guide.slug}" class="group">
				<article class="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent-primary/30 hover:shadow-xl">
					<!-- Image Placeholder with Journey Feel -->
					<div class="relative aspect-[2/1] bg-gradient-to-br {i % 4 === 0
						? 'from-accent-primary/20 via-accent-gold/10 to-accent-green/10'
						: i % 4 === 1
							? 'from-accent-green/20 via-accent-primary/10 to-accent-gold/10'
							: i % 4 === 2
								? 'from-accent-gold/20 via-accent-green/10 to-accent-primary/10'
								: 'from-accent-primary/15 via-accent-gold/15 to-accent-green/15'}">
						<div class="flex h-full items-center justify-center">
							<Footprints class="h-16 w-16 text-accent-primary/30" />
						</div>

						<!-- Step Count Overlay -->
						<div class="absolute bottom-4 left-4">
							<Badge variant="gold">
								{#snippet children()}{guide.stepCount} Steps{/snippet}
							</Badge>
						</div>

						<!-- Category -->
						<div class="absolute top-4 right-4">
							<Badge variant="secondary" class="bg-surface/90 backdrop-blur-sm">
								{#snippet children()}{guide.category}{/snippet}
							</Badge>
						</div>
					</div>

					<!-- Content -->
					<div class="flex flex-1 flex-col p-6 sm:p-8">
						<h2 class="font-display text-xl font-bold leading-snug transition-colors group-hover:text-accent-primary sm:text-2xl">
							{guide.title}
						</h2>

						<p class="mt-3 flex-1 text-sm leading-relaxed text-text-secondary sm:text-base">
							{guide.description}
						</p>

						<!-- Meta Info -->
						<div class="mt-6 flex items-center gap-6">
							<div class="flex items-center gap-2 text-sm text-text-secondary">
								<ListChecks class="h-4 w-4 text-accent-primary" />
								<span>{guide.stepCount} steps</span>
							</div>
							<div class="flex items-center gap-2 text-sm text-text-secondary">
								<Clock class="h-4 w-4 text-accent-primary" />
								<span>{guide.estimatedTime}</span>
							</div>
						</div>

						<!-- CTA -->
						<div class="mt-6 flex items-center gap-2 text-sm font-semibold text-accent-primary">
							Begin this guide
							<ArrowRight class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
						</div>
					</div>
				</article>
			</a>
		{/each}
	</div>
</Section>

<!-- Encouragement Section -->
<Section dark>
	<div class="mx-auto max-w-2xl text-center">
		<Compass class="mx-auto h-10 w-10 text-accent-gold" />
		<h2 class="mt-4 font-display text-3xl font-bold text-text-cream sm:text-4xl">
			Not sure where to start?
		</h2>
		<p class="mt-4 text-lg text-text-cream/70">
			Take our short quiz to find the guide that's right for your stage. It only takes a minute.
		</p>
		<Button size="lg" class="mt-8 bg-accent-primary text-text-cream hover:bg-accent-hover">
			{#snippet children()}
				Find Your Path
				<ArrowRight class="ml-1 h-5 w-5" />
			{/snippet}
		</Button>
	</div>
</Section>
