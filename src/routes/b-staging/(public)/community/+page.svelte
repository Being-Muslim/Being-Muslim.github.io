<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { forumCategories, chatChannels } from '$lib/data/mock.js';
	import {
		ArrowRight,
		Users,
		MessageCircle,
		MessageSquare,
		Heart,
		Hand as Hands,
		Sun,
		BookOpen,
		Hash,
		Wifi,
		ChevronRight
	} from 'lucide-svelte';

	const iconMap: Record<string, typeof Heart> = {
		heart: Heart,
		hands: Hands,
		sun: Sun,
		book: BookOpen,
		message: MessageCircle
	};

	const communityStats = [
		{ value: '2,500+', label: 'Members', icon: Users },
		{ value: '1,200+', label: 'Active Discussions', icon: MessageSquare },
		{ value: '128', label: 'Online Now', icon: Wifi }
	];
</script>

<svelte:head>
	<title>Community — Being Muslim</title>
	<meta
		name="description"
		content="Join a supportive community of fellow seekers. Discuss, learn, and grow together on your Islamic journey."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-bg-dark py-20 sm:py-28">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<Badge variant="gold">
				{#snippet children()}Join the Conversation{/snippet}
			</Badge>
			<h1 class="mt-4 font-display text-4xl font-bold text-text-cream sm:text-5xl">
				Community
			</h1>
			<p class="mt-4 text-lg text-text-cream/70">
				Join a supportive community of fellow seekers. Ask questions, share experiences, and grow together on your journey.
			</p>
		</div>
	</div>
</section>

<!-- Stats Bar -->
<section class="relative z-10 -mt-8">
	<div class="mx-auto max-w-[900px] px-4 sm:px-6">
		<div class="grid grid-cols-3 gap-4 rounded-2xl bg-surface p-6 shadow-lg sm:p-8">
			{#each communityStats as stat}
				{@const Icon = stat.icon}
				<div class="text-center">
					<div class="mb-2 flex items-center justify-center">
						<Icon class="h-5 w-5 text-accent-primary" />
					</div>
					<p class="font-display text-2xl font-bold text-accent-primary sm:text-3xl">{stat.value}</p>
					<p class="mt-1 text-sm text-text-secondary">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Main Content: Forums + Chat side by side -->
<Section>
	<div class="grid gap-8 lg:grid-cols-2">
		<!-- Forums Card -->
		<div class="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
			<div class="border-b border-border p-6">
				<div class="flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10">
						<MessageSquare class="h-5 w-5 text-accent-primary" />
					</div>
					<div>
						<h2 class="font-display text-xl font-semibold">Discussion Forums</h2>
						<p class="text-sm text-text-secondary">Ask questions and share knowledge</p>
					</div>
				</div>
			</div>

			<div class="flex-1 divide-y divide-border">
				{#each forumCategories.slice(0, 4) as category}
					{@const Icon = iconMap[category.icon] || MessageCircle}
					<a href="/community/forums" class="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-secondary/50">
						<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary transition-colors group-hover:bg-accent-primary group-hover:text-text-cream">
							<Icon class="h-4 w-4" />
						</div>
						<div class="min-w-0 flex-1">
							<h3 class="text-sm font-semibold text-text-primary group-hover:text-accent-primary">
								{category.title}
							</h3>
							<p class="truncate text-xs text-text-secondary">{category.description}</p>
						</div>
						<div class="hidden shrink-0 text-right sm:block">
							<p class="text-xs font-medium text-text-primary">{category.threadCount} threads</p>
							<p class="text-xs text-text-secondary">{category.lastActivity}</p>
						</div>
						<ChevronRight class="h-4 w-4 shrink-0 text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:text-accent-primary" />
					</a>
				{/each}
			</div>

			<div class="border-t border-border p-4">
				<a href="/community/forums">
					<Button variant="outline" class="w-full">
						{#snippet children()}
							Browse Forums
							<ArrowRight class="ml-1 h-4 w-4" />
						{/snippet}
					</Button>
				</a>
			</div>
		</div>

		<!-- Chat Card -->
		<div class="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
			<div class="border-b border-border p-6">
				<div class="flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-green/10">
						<MessageCircle class="h-5 w-5 text-accent-green" />
					</div>
					<div>
						<h2 class="font-display text-xl font-semibold">Live Chat</h2>
						<p class="text-sm text-text-secondary">Real-time conversations with the community</p>
					</div>
				</div>
			</div>

			<div class="flex-1 divide-y divide-border">
				{#each chatChannels as channel}
					<a href="/community/chat" class="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-secondary/50">
						<Hash class="h-4 w-4 shrink-0 text-text-secondary" />
						<div class="min-w-0 flex-1">
							<h3 class="text-sm font-semibold text-text-primary group-hover:text-accent-primary">
								{channel.name}
							</h3>
							<p class="text-xs text-text-secondary">{channel.members} members</p>
						</div>
						{#if channel.unread > 0}
							<span class="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent-primary px-1.5 text-xs font-bold text-text-cream">
								{channel.unread}
							</span>
						{/if}
					</a>
				{/each}
			</div>

			<div class="border-t border-border p-4">
				<a href="/community/chat">
					<Button variant="outline" class="w-full">
						{#snippet children()}
							Join Chat
							<ArrowRight class="ml-1 h-4 w-4" />
						{/snippet}
					</Button>
				</a>
			</div>
		</div>
	</div>
</Section>

<!-- Join CTA for unauthenticated users -->
<section class="bg-bg-dark py-16 sm:py-24">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<Users class="mx-auto h-10 w-10 text-accent-gold" />
			<h2 class="mt-4 font-display text-3xl font-bold text-text-cream sm:text-4xl">
				Join the conversation
			</h2>
			<p class="mt-4 text-text-cream/70">
				Create a free account to participate in discussions, join live chat, and connect with fellow seekers on their Islamic journey.
			</p>
			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<Button size="lg" class="bg-accent-primary text-text-cream hover:bg-accent-hover">
					{#snippet children()}
						Create Free Account
						<ArrowRight class="ml-1 h-5 w-5" />
					{/snippet}
				</Button>
				<Button variant="outline" size="lg" class="border-text-cream/30 text-text-cream hover:bg-white/10 hover:text-text-cream">
					{#snippet children()}
						Learn More
					{/snippet}
				</Button>
			</div>
		</div>
	</div>
</section>
