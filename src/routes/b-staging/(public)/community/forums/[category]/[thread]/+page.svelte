<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import type { PageData } from './$types';
	import {
		ChevronRight,
		CheckCircle,
		Pin,
		MessageCircle,
		Clock,
		Eye,
		Bold,
		Italic,
		Link,
		Send,
		ThumbsUp,
		Bookmark,
		Flag,
		Share2
	} from 'lucide-svelte';

	let { data }: { data: PageData } = $props();
	let replyText = $state('');
</script>

<svelte:head>
	<title>{data.thread.title} — {data.category.title} — Being Muslim Forums</title>
	<meta name="description" content="{data.thread.title} - Discussion in {data.category.title} forum" />
</svelte:head>

<!-- Breadcrumb -->
<section class="border-b border-border bg-secondary/30 py-4">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<nav class="flex items-center gap-2 text-sm text-text-secondary">
			<a href="/community" class="transition-colors hover:text-text-primary">Community</a>
			<ChevronRight class="h-3.5 w-3.5" />
			<a href="/community/forums" class="transition-colors hover:text-text-primary">Forums</a>
			<ChevronRight class="h-3.5 w-3.5" />
			<a href="/community/forums/{data.category.slug}" class="transition-colors hover:text-text-primary">{data.category.title}</a>
			<ChevronRight class="h-3.5 w-3.5" />
			<span class="truncate text-text-primary">{data.thread.title}</span>
		</nav>
	</div>
</section>

<!-- Main Content -->
<Section class="!py-8 sm:!py-12">
	<div class="grid gap-8 lg:grid-cols-[1fr_300px]">
		<!-- Main Thread Column -->
		<div>
			<!-- Thread Title -->
			<div class="mb-8">
				<div class="flex flex-wrap items-center gap-2">
					{#if data.thread.pinned}
						<Badge variant="gold">
							{#snippet children()}
								<Pin class="mr-1 h-3 w-3" />
								Pinned
							{/snippet}
						</Badge>
					{/if}
					{#if data.thread.solved}
						<Badge variant="green">
							{#snippet children()}
								<CheckCircle class="mr-1 h-3 w-3" />
								Solved
							{/snippet}
						</Badge>
					{/if}
				</div>
				<h1 class="mt-3 font-display text-2xl font-bold sm:text-3xl">
					{data.thread.title}
				</h1>
			</div>

			<!-- Original Post -->
			<div class="overflow-hidden rounded-xl border border-border bg-surface">
				<div class="flex flex-col gap-4 p-5 sm:flex-row sm:gap-6 sm:p-6">
					<!-- Author Sidebar -->
					<div class="flex items-center gap-3 sm:w-36 sm:shrink-0 sm:flex-col sm:items-center sm:text-center">
						<div class="flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary text-lg font-bold text-text-cream sm:h-16 sm:w-16 sm:text-xl">
							{data.originalPost.avatar}
						</div>
						<div class="sm:mt-2">
							<p class="text-sm font-semibold text-text-primary">{data.originalPost.author}</p>
							<p class="text-xs text-text-secondary">Joined {data.originalPost.joinDate}</p>
							<p class="text-xs text-text-secondary">{data.originalPost.postCount} posts</p>
						</div>
					</div>

					<!-- Post Content -->
					<div class="min-w-0 flex-1">
						<div class="mb-3 flex items-center gap-2 text-xs text-text-secondary">
							<Clock class="h-3 w-3" />
							<span>Posted {data.originalPost.timestamp}</span>
						</div>

						<div class="prose prose-sm max-w-none text-text-primary">
							{#each data.originalPost.content.split('\n\n') as paragraph}
								<p class="mb-4 leading-relaxed">{paragraph}</p>
							{/each}
						</div>

						<!-- Post Actions -->
						<Separator class="my-4" />
						<div class="flex items-center gap-4">
							<button class="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent-primary">
								<ThumbsUp class="h-3.5 w-3.5" />
								<span>Like</span>
							</button>
							<button class="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent-primary">
								<Share2 class="h-3.5 w-3.5" />
								<span>Share</span>
							</button>
							<button class="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent-primary">
								<Bookmark class="h-3.5 w-3.5" />
								<span>Save</span>
							</button>
							<button class="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-text-secondary/70">
								<Flag class="h-3.5 w-3.5" />
								<span>Report</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Replies Header -->
			<div class="mb-4 mt-10 flex items-center gap-2">
				<MessageCircle class="h-5 w-5 text-accent-primary" />
				<h2 class="font-display text-lg font-semibold">
					{data.replies.length} {data.replies.length === 1 ? 'Reply' : 'Replies'}
				</h2>
			</div>

			<!-- Reply List -->
			<div class="space-y-4">
				{#each data.replies as reply}
					<div
						class="overflow-hidden rounded-xl border bg-surface {reply.bestAnswer
							? 'border-accent-green/50 ring-1 ring-accent-green/20'
							: 'border-border'}"
					>
						{#if reply.bestAnswer}
							<div class="flex items-center gap-2 border-b border-accent-green/20 bg-accent-green/5 px-5 py-2 sm:px-6">
								<CheckCircle class="h-4 w-4 text-accent-green" />
								<span class="text-sm font-semibold text-accent-green">Best Answer</span>
							</div>
						{/if}

						<div class="flex flex-col gap-4 p-5 sm:flex-row sm:gap-6 sm:p-6">
							<!-- Author Sidebar -->
							<div class="flex items-center gap-3 sm:w-36 sm:shrink-0 sm:flex-col sm:items-center sm:text-center">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-text-cream sm:h-14 sm:w-14 sm:text-base {reply.bestAnswer
										? 'bg-accent-green'
										: 'bg-accent-primary/80'}"
								>
									{reply.avatar}
								</div>
								<div class="sm:mt-2">
									<p class="text-sm font-semibold text-text-primary">{reply.author}</p>
									<p class="hidden text-xs text-text-secondary sm:block">Joined {reply.joinDate}</p>
									<p class="hidden text-xs text-text-secondary sm:block">{reply.postCount} posts</p>
								</div>
							</div>

							<!-- Reply Content -->
							<div class="min-w-0 flex-1">
								<div class="mb-3 flex items-center gap-2 text-xs text-text-secondary">
									<Clock class="h-3 w-3" />
									<span>{reply.timestamp}</span>
								</div>

								<div class="prose prose-sm max-w-none text-text-primary">
									{#each reply.content.split('\n\n') as paragraph}
										<p class="mb-3 leading-relaxed">{paragraph}</p>
									{/each}
								</div>

								<!-- Reply Actions -->
								<Separator class="my-4" />
								<div class="flex items-center gap-4">
									<button class="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent-primary">
										<ThumbsUp class="h-3.5 w-3.5" />
										<span>Like</span>
									</button>
									<button class="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent-primary">
										<Share2 class="h-3.5 w-3.5" />
										<span>Share</span>
									</button>
									<button class="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-text-secondary/70">
										<Flag class="h-3.5 w-3.5" />
										<span>Report</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Reply Editor -->
			<div class="mt-10">
				<h2 class="mb-4 font-display text-lg font-semibold">Post a Reply</h2>
				<div class="overflow-hidden rounded-xl border border-border bg-surface">
					<!-- Formatting Toolbar -->
					<div class="flex items-center gap-1 border-b border-border px-4 py-2">
						<button
							class="flex h-8 w-8 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-secondary hover:text-text-primary"
							aria-label="Bold"
						>
							<Bold class="h-4 w-4" />
						</button>
						<button
							class="flex h-8 w-8 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-secondary hover:text-text-primary"
							aria-label="Italic"
						>
							<Italic class="h-4 w-4" />
						</button>
						<button
							class="flex h-8 w-8 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-secondary hover:text-text-primary"
							aria-label="Insert link"
						>
							<Link class="h-4 w-4" />
						</button>
					</div>

					<!-- Textarea -->
					<textarea
						bind:value={replyText}
						placeholder="Share your thoughts..."
						rows="5"
						class="w-full resize-none border-none bg-transparent px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none"
					></textarea>

					<!-- Submit -->
					<div class="flex items-center justify-between border-t border-border px-4 py-3">
						<p class="text-xs text-text-secondary">
							Be kind and respectful. Follow the community guidelines.
						</p>
						<Button class="bg-accent-primary text-text-cream hover:bg-accent-hover" disabled={!replyText.trim()}>
							{#snippet children()}
								Post Reply
								<Send class="ml-1 h-4 w-4" />
							{/snippet}
						</Button>
					</div>
				</div>
			</div>
		</div>

		<!-- Sidebar (Desktop) -->
		<aside class="hidden lg:block">
			<div class="sticky top-8 space-y-6">
				<!-- About this thread -->
				<div class="rounded-xl border border-border bg-surface p-5">
					<h3 class="font-display text-sm font-semibold uppercase tracking-wider text-text-secondary">
						About this thread
					</h3>
					<div class="mt-4 space-y-3">
						<div class="flex items-center justify-between text-sm">
							<span class="text-text-secondary">Replies</span>
							<span class="font-semibold text-text-primary">{data.thread.replyCount}</span>
						</div>
						<Separator />
						<div class="flex items-center justify-between text-sm">
							<span class="text-text-secondary">Last reply</span>
							<span class="font-semibold text-text-primary">{data.thread.lastReply}</span>
						</div>
						<Separator />
						<div class="flex items-center justify-between text-sm">
							<span class="text-text-secondary">Views</span>
							<span class="font-semibold text-text-primary">284</span>
						</div>
						<Separator />
						<div class="flex items-center justify-between text-sm">
							<span class="text-text-secondary">Category</span>
							<a href="/community/forums/{data.category.slug}" class="font-semibold text-accent-primary hover:underline">
								{data.category.title}
							</a>
						</div>
					</div>
				</div>

				<!-- Similar Threads -->
				<div class="rounded-xl border border-border bg-surface p-5">
					<h3 class="font-display text-sm font-semibold uppercase tracking-wider text-text-secondary">
						Similar Threads
					</h3>
					<div class="mt-4 space-y-4">
						{#each data.similarThreads as similar}
							<a
								href="/community/forums/{data.category.slug}/{similar.slug}"
								class="group block"
							>
								<h4 class="text-sm font-medium text-text-primary transition-colors group-hover:text-accent-primary">
									{similar.title}
								</h4>
								<div class="mt-1 flex items-center gap-3 text-xs text-text-secondary">
									<span>{similar.author}</span>
									<span class="flex items-center gap-1">
										<MessageCircle class="h-3 w-3" />
										{similar.replyCount}
									</span>
								</div>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</aside>
	</div>
</Section>
