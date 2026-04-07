<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import type { PageData } from './$types';
	import {
		Search,
		ChevronRight,
		Pin,
		CheckCircle,
		MessageCircle,
		Plus,
		Clock
	} from 'lucide-svelte';

	let { data }: { data: PageData } = $props();

	let search = $state('');

	let filteredThreads = $derived.by(() => {
		if (!search.trim()) return data.threads;
		const q = search.toLowerCase().trim();
		return data.threads.filter((t) => t.title.toLowerCase().includes(q) || t.author.toLowerCase().includes(q));
	});

	// Sort: pinned first, then by replyCount descending
	let sortedThreads = $derived.by(() => {
		return [...filteredThreads].sort((a, b) => {
			if (a.pinned && !b.pinned) return -1;
			if (!a.pinned && b.pinned) return 1;
			return b.replyCount - a.replyCount;
		});
	});
</script>

<svelte:head>
	<title>{data.category.title} — Being Muslim Forums</title>
	<meta name="description" content={data.category.description} />
</svelte:head>

<!-- Breadcrumb + Hero -->
<section class="bg-bg-dark py-16 sm:py-20">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<!-- Breadcrumb -->
		<nav class="mb-6 flex items-center gap-2 text-sm text-text-cream/50">
			<a href="/community" class="transition-colors hover:text-text-cream">Community</a>
			<ChevronRight class="h-3.5 w-3.5" />
			<a href="/community/forums" class="transition-colors hover:text-text-cream">Forums</a>
			<ChevronRight class="h-3.5 w-3.5" />
			<span class="text-text-cream">{data.category.title}</span>
		</nav>

		<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h1 class="font-display text-3xl font-bold text-text-cream sm:text-4xl">
					{data.category.title}
				</h1>
				<p class="mt-2 text-text-cream/60">
					{data.category.description}
				</p>
			</div>
			<Button class="shrink-0 bg-accent-primary text-text-cream hover:bg-accent-hover">
				{#snippet children()}
					<Plus class="h-4 w-4" />
					New Thread
				{/snippet}
			</Button>
		</div>
	</div>
</section>

<!-- Search + Thread List -->
<Section>
	<!-- Search -->
	<div class="mb-8 max-w-md">
		<div class="relative">
			<Search class="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
			<Input
				type="text"
				placeholder="Search threads in {data.category.title}..."
				bind:value={search}
				class="pl-10"
			/>
		</div>
	</div>

	<!-- Thread Count -->
	<div class="mb-4 flex items-center justify-between">
		<p class="text-sm text-text-secondary">
			{sortedThreads.length} {sortedThreads.length === 1 ? 'thread' : 'threads'}
		</p>
	</div>

	<!-- Thread List -->
	{#if sortedThreads.length === 0}
		<div class="py-16 text-center">
			<MessageCircle class="mx-auto h-12 w-12 text-text-secondary/40" />
			<h3 class="mt-4 font-display text-xl font-semibold">No threads found</h3>
			<p class="mt-2 text-text-secondary">
				Try adjusting your search or start a new thread.
			</p>
			<Button variant="outline" class="mt-6" onclick={() => (search = '')}>
				{#snippet children()}Clear Search{/snippet}
			</Button>
		</div>
	{:else}
		<div class="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
			{#each sortedThreads as thread}
				<a
					href="/community/forums/{data.category.slug}/{thread.slug}"
					class="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-secondary/50"
				>
					<!-- Author Avatar -->
					<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-sm font-bold text-accent-primary">
						{thread.authorAvatar || thread.author[0].toUpperCase()}
					</div>

					<!-- Thread Info -->
					<div class="min-w-0 flex-1">
						<div class="flex items-center gap-2">
							{#if thread.pinned}
								<Pin class="h-3.5 w-3.5 shrink-0 text-accent-gold" />
							{/if}
							<h3 class="truncate text-sm font-semibold text-text-primary transition-colors group-hover:text-accent-primary">
								{thread.title}
							</h3>
							{#if thread.solved}
								<Badge variant="green">
									{#snippet children()}
										<CheckCircle class="mr-1 h-3 w-3" />
										Solved
									{/snippet}
								</Badge>
							{/if}
						</div>
						<div class="mt-1 flex items-center gap-3 text-xs text-text-secondary">
							<span class="font-medium text-text-primary">{thread.author}</span>
							<span class="flex items-center gap-1">
								<Clock class="h-3 w-3" />
								{thread.lastReply}
							</span>
						</div>
					</div>

					<!-- Reply Count -->
					<div class="hidden shrink-0 items-center gap-1.5 text-text-secondary sm:flex">
						<MessageCircle class="h-4 w-4" />
						<span class="text-sm font-medium">{thread.replyCount}</span>
					</div>

					<ChevronRight class="h-4 w-4 shrink-0 text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:text-accent-primary" />
				</a>
			{/each}
		</div>
	{/if}
</Section>
