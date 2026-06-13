<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { forumCategories } from '$lib/data/mock.js';
	import {
		ArrowRight,
		ChevronRight,
		Heart,
		Hand as Hands,
		Sun,
		BookOpen,
		MessageCircle,
		MessageSquare
	} from 'lucide-svelte';

	const iconMap: Record<string, typeof Heart> = {
		heart: Heart,
		hands: Hands,
		sun: Sun,
		book: BookOpen,
		message: MessageCircle
	};
</script>

<svelte:head>
	<title>Discussion Forums — Being Muslim Community</title>
	<meta
		name="description"
		content="Browse discussion forums for new Muslims, prayer help, daily life, study groups, and general discussion."
	/>
</svelte:head>

<!-- Breadcrumb + Hero -->
<section class="bg-bg-dark py-16 sm:py-20">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<!-- Breadcrumb -->
		<nav class="mb-6 flex items-center gap-2 text-sm text-text-cream/50">
			<a href="/community" class="transition-colors hover:text-text-cream">Community</a>
			<ChevronRight class="h-3.5 w-3.5" />
			<span class="text-text-cream">Forums</span>
		</nav>

		<div class="flex items-center gap-4">
			<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/20">
				<MessageSquare class="h-6 w-6 text-accent-primary" />
			</div>
			<div>
				<h1 class="font-display text-3xl font-bold text-text-cream sm:text-4xl">
					Discussion Forums
				</h1>
				<p class="mt-1 text-text-cream/60">
					Browse categories and join the discussions that matter to you
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Forum Categories -->
<Section>
	<div class="space-y-4">
		{#each forumCategories as category}
			{@const Icon = iconMap[category.icon] || MessageCircle}
			<a href="/community/forums/{category.slug}" class="group block">
				<div class="flex items-center gap-5 rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-accent-primary/30 hover:shadow-lg sm:p-6">
					<!-- Icon -->
					<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary transition-colors group-hover:bg-accent-primary group-hover:text-text-cream">
						<Icon class="h-6 w-6" />
					</div>

					<!-- Content -->
					<div class="min-w-0 flex-1">
						<h2 class="font-display text-lg font-semibold text-text-primary transition-colors group-hover:text-accent-primary">
							{category.title}
						</h2>
						<p class="mt-1 text-sm text-text-secondary">{category.description}</p>
					</div>

					<!-- Stats -->
					<div class="hidden shrink-0 items-center gap-6 sm:flex">
						<div class="text-right">
							<p class="text-lg font-semibold text-text-primary">{category.threadCount}</p>
							<p class="text-xs text-text-secondary">threads</p>
						</div>
						<div class="text-right">
							<p class="text-sm font-medium text-text-primary">{category.lastActivity}</p>
							<p class="text-xs text-text-secondary">last activity</p>
						</div>
					</div>

					<!-- Mobile stats -->
					<div class="flex shrink-0 items-center gap-3 sm:hidden">
						<Badge variant="secondary">
							{#snippet children()}{category.threadCount} threads{/snippet}
						</Badge>
					</div>

					<ChevronRight class="h-5 w-5 shrink-0 text-text-secondary transition-transform group-hover:translate-x-1 group-hover:text-accent-primary" />
				</div>
			</a>
		{/each}
	</div>
</Section>
