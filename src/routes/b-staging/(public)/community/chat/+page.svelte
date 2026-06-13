<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import {
		Hash,
		Users,
		Send,
		Paperclip,
		Smile,
		ChevronRight,
		Menu,
		X,
		Image,
		Heart,
		ThumbsUp,
		Star
	} from 'lucide-svelte';

	// --- Channel Data ---
	interface Channel {
		name: string;
		slug: string;
		members: number;
		unread: number;
		description: string;
		category: 'General' | 'Learning' | 'Support';
	}

	const channels: Channel[] = [
		{ name: 'General', slug: 'general', members: 342, unread: 5, description: 'General community chat', category: 'General' },
		{ name: 'Introductions', slug: 'introductions', members: 280, unread: 2, description: 'Welcome new members!', category: 'General' },
		{ name: 'Announcements', slug: 'announcements', members: 342, unread: 1, description: 'Community news and updates', category: 'General' },
		{ name: 'Quran Study', slug: 'quran-study', members: 156, unread: 0, description: 'Quran reading and discussion', category: 'Learning' },
		{ name: 'Arabic Practice', slug: 'arabic-practice', members: 98, unread: 3, description: 'Practice your Arabic skills', category: 'Learning' },
		{ name: 'Book Club', slug: 'book-club', members: 67, unread: 0, description: 'Monthly book discussions', category: 'Learning' },
		{ name: 'New Muslim Help', slug: 'new-muslim-help', members: 189, unread: 4, description: 'No question is too basic', category: 'Support' },
		{ name: 'Prayer Support', slug: 'prayer-support', members: 134, unread: 0, description: 'Help with salah and wudu', category: 'Support' },
		{ name: 'Daily Reflections', slug: 'daily-reflections', members: 89, unread: 0, description: 'Share daily thoughts and duas', category: 'Support' }
	];

	const channelCategories = ['General', 'Learning', 'Support'] as const;

	// --- Mock Messages ---
	interface Message {
		id: string;
		author: string;
		avatar: string;
		timestamp: string;
		content: string;
		reactions?: { emoji: string; count: number }[];
		hasImage?: boolean;
	}

	const mockMessages: Message[] = [
		{
			id: '1',
			author: 'Aminah_R',
			avatar: 'A',
			timestamp: '9:02 AM',
			content: 'Assalamu alaikum everyone! Hope you all had a blessed morning.'
		},
		{
			id: '2',
			author: 'ImamKhalid',
			avatar: 'I',
			timestamp: '9:05 AM',
			content: 'Wa alaikum assalam, Aminah! Today is a beautiful day to reflect on the blessings we often take for granted.',
			reactions: [{ emoji: '❤️', count: 5 }, { emoji: '🤲', count: 3 }]
		},
		{
			id: '3',
			author: 'OmarK',
			avatar: 'O',
			timestamp: '9:08 AM',
			content: 'Has anyone read the new article on the Being Muslim site about preparing for Ramadan? Really insightful.',
			reactions: [{ emoji: '👍', count: 2 }]
		},
		{
			id: '4',
			author: 'FatimaS',
			avatar: 'F',
			timestamp: '9:12 AM',
			content: "Yes! I loved the section about building a pre-Ramadan routine. It's never too early to start preparing."
		},
		{
			id: '5',
			author: 'NewBeginnings',
			avatar: 'N',
			timestamp: '9:15 AM',
			content: "This will be my first Ramadan! I'm both excited and nervous. Any tips for beginners?"
		},
		{
			id: '6',
			author: 'ImamKhalid',
			avatar: 'I',
			timestamp: '9:18 AM',
			content: "MashaAllah! How exciting. My biggest tip: don't try to be perfect. Start by fasting the days you can, and build up gradually. The intention matters most.",
			reactions: [{ emoji: '❤️', count: 8 }, { emoji: '🌙', count: 4 }]
		},
		{
			id: '7',
			author: 'SeekingLight',
			avatar: 'S',
			timestamp: '9:22 AM',
			content: 'I remember my first Ramadan. It was challenging but genuinely one of the most spiritually fulfilling experiences of my life.'
		},
		{
			id: '8',
			author: 'Aminah_R',
			avatar: 'A',
			timestamp: '9:25 AM',
			content: 'Here is a beautiful reminder I came across today:',
			hasImage: true
		},
		{
			id: '9',
			author: 'DrTarsin',
			avatar: 'D',
			timestamp: '9:30 AM',
			content: "Beautiful share, Aminah. For those preparing for their first Ramadan, we're actually releasing a new guide next week specifically for new Muslims. Stay tuned!",
			reactions: [{ emoji: '🎉', count: 12 }, { emoji: '❤️', count: 7 }, { emoji: '🤲', count: 5 }]
		},
		{
			id: '10',
			author: 'ArabicJourney',
			avatar: 'A',
			timestamp: '9:35 AM',
			content: 'That sounds amazing, Dr. Tarsin! Will it include a glossary of common Arabic terms used during Ramadan?'
		},
		{
			id: '11',
			author: 'DrTarsin',
			avatar: 'D',
			timestamp: '9:37 AM',
			content: 'Yes! There will be a comprehensive glossary, a daily schedule template, and meal planning tips.'
		},
		{
			id: '12',
			author: 'FoodieMuslim',
			avatar: 'F',
			timestamp: '9:42 AM',
			content: "Meal planning tips! That's what I need. Suhoor ideas are always welcome."
		},
		{
			id: '13',
			author: 'OmarK',
			avatar: 'O',
			timestamp: '9:45 AM',
			content: 'Pro tip: overnight oats are a lifesaver for suhoor. Easy to prepare the night before and keeps you full.',
			reactions: [{ emoji: '👍', count: 6 }]
		},
		{
			id: '14',
			author: 'NewBeginnings',
			avatar: 'N',
			timestamp: '9:48 AM',
			content: 'JazakAllah khair everyone! This community is so welcoming. I feel so supported already.'
		},
		{
			id: '15',
			author: 'SeekingLight',
			avatar: 'S',
			timestamp: '9:50 AM',
			content: "That's what we're here for! Don't hesitate to ask anything, no matter how small it seems."
		}
	];

	// --- Mock Members ---
	interface Member {
		name: string;
		avatar: string;
		status: 'online' | 'offline';
	}

	const members: Member[] = [
		{ name: 'ImamKhalid', avatar: 'I', status: 'online' },
		{ name: 'DrTarsin', avatar: 'D', status: 'online' },
		{ name: 'Aminah_R', avatar: 'A', status: 'online' },
		{ name: 'OmarK', avatar: 'O', status: 'online' },
		{ name: 'FatimaS', avatar: 'F', status: 'online' },
		{ name: 'NewBeginnings', avatar: 'N', status: 'online' },
		{ name: 'SeekingLight', avatar: 'S', status: 'online' },
		{ name: 'ArabicJourney', avatar: 'A', status: 'online' },
		{ name: 'FoodieMuslim', avatar: 'F', status: 'offline' },
		{ name: 'SarahAbdullah', avatar: 'S', status: 'offline' },
		{ name: 'KhalidH', avatar: 'K', status: 'offline' },
		{ name: 'YasminA', avatar: 'Y', status: 'offline' },
		{ name: 'HassanM', avatar: 'H', status: 'offline' },
		{ name: 'MariaConvert', avatar: 'M', status: 'offline' }
	];

	const onlineMembers = members.filter((m) => m.status === 'online');
	const offlineMembers = members.filter((m) => m.status === 'offline');

	// --- State ---
	let activeChannelSlug = $state('general');
	let messageInput = $state('');
	let leftSidebarOpen = $state(false);
	let rightSidebarOpen = $state(false);

	let activeChannel = $derived(channels.find((c) => c.slug === activeChannelSlug) || channels[0]);
</script>

<svelte:head>
	<title>Chat — Being Muslim Community</title>
	<meta
		name="description"
		content="Real-time chat with the Being Muslim community. Join channels for general discussion, learning, and support."
	/>
</svelte:head>

<div class="flex h-[calc(100vh-64px)] overflow-hidden bg-bg-primary">
	<!-- Mobile overlay for left sidebar -->
	{#if leftSidebarOpen}
		<button
			class="fixed inset-0 z-30 bg-black/50 lg:hidden"
			onclick={() => (leftSidebarOpen = false)}
			aria-label="Close sidebar"
		></button>
	{/if}

	<!-- Mobile overlay for right sidebar -->
	{#if rightSidebarOpen}
		<button
			class="fixed inset-0 z-30 bg-black/50 lg:hidden"
			onclick={() => (rightSidebarOpen = false)}
			aria-label="Close members panel"
		></button>
	{/if}

	<!-- ===== LEFT SIDEBAR: Channels ===== -->
	<aside
		class="fixed left-0 top-0 z-40 flex h-full w-[260px] flex-col border-r border-border bg-surface pt-16 transition-transform duration-200 lg:static lg:z-auto lg:pt-0 lg:translate-x-0 {leftSidebarOpen
			? 'translate-x-0'
			: '-translate-x-full'}"
	>
		<!-- Sidebar Header -->
		<div class="flex items-center justify-between border-b border-border px-4 py-4">
			<h2 class="font-display text-base font-semibold">Channels</h2>
			<button class="lg:hidden" onclick={() => (leftSidebarOpen = false)} aria-label="Close sidebar">
				<X class="h-5 w-5 text-text-secondary" />
			</button>
		</div>

		<!-- Channel List -->
		<nav class="flex-1 overflow-y-auto px-2 py-3">
			{#each channelCategories as cat}
				<div class="mb-4">
					<p class="mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-text-secondary/70">
						{cat}
					</p>
					{#each channels.filter((c) => c.category === cat) as channel}
						<button
							onclick={() => {
								activeChannelSlug = channel.slug;
								leftSidebarOpen = false;
							}}
							class="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors {activeChannelSlug === channel.slug
								? 'bg-accent-primary/10 font-semibold text-accent-primary'
								: 'text-text-secondary hover:bg-secondary hover:text-text-primary'}"
						>
							<Hash class="h-4 w-4 shrink-0 {activeChannelSlug === channel.slug ? 'text-accent-primary' : 'text-text-secondary/60'}" />
							<span class="truncate">{channel.name}</span>
							{#if channel.unread > 0}
								<span class="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-accent-primary px-1.5 text-xs font-bold text-text-cream">
									{channel.unread}
								</span>
							{/if}
						</button>
					{/each}
				</div>
			{/each}
		</nav>

		<!-- Sidebar Footer -->
		<div class="border-t border-border p-3">
			<div class="flex items-center gap-3 rounded-lg bg-secondary/50 px-3 py-2">
				<div class="relative">
					<div class="flex h-8 w-8 items-center justify-center rounded-full bg-accent-primary text-xs font-bold text-text-cream">
						Y
					</div>
					<div class="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-surface bg-accent-green"></div>
				</div>
				<div class="min-w-0">
					<p class="truncate text-sm font-medium text-text-primary">You</p>
					<p class="text-xs text-text-secondary">Online</p>
				</div>
			</div>
		</div>
	</aside>

	<!-- ===== CENTER: Message Feed ===== -->
	<main class="flex min-w-0 flex-1 flex-col">
		<!-- Channel Header -->
		<header class="flex items-center gap-3 border-b border-border bg-surface px-4 py-3">
			<!-- Mobile menu toggle -->
			<button
				class="lg:hidden"
				onclick={() => (leftSidebarOpen = true)}
				aria-label="Open channels"
			>
				<Menu class="h-5 w-5 text-text-secondary" />
			</button>

			<Hash class="h-5 w-5 text-text-secondary" />
			<div class="min-w-0 flex-1">
				<h1 class="truncate text-sm font-semibold text-text-primary">{activeChannel.name}</h1>
				<p class="truncate text-xs text-text-secondary">{activeChannel.description}</p>
			</div>

			<div class="flex items-center gap-2">
				<div class="hidden items-center gap-1.5 rounded-md bg-secondary/50 px-2.5 py-1 text-xs text-text-secondary sm:flex">
					<Users class="h-3.5 w-3.5" />
					<span>{activeChannel.members}</span>
				</div>
				<button
					onclick={() => (rightSidebarOpen = !rightSidebarOpen)}
					class="flex h-8 w-8 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-secondary hover:text-text-primary {rightSidebarOpen ? 'bg-secondary text-text-primary' : ''}"
					aria-label="Toggle members panel"
				>
					<Users class="h-4 w-4" />
				</button>
			</div>
		</header>

		<!-- Message List -->
		<div class="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
			<!-- Welcome banner -->
			<div class="mb-6 rounded-xl bg-accent-primary/5 p-4 text-center">
				<Hash class="mx-auto h-8 w-8 text-accent-primary/60" />
				<h2 class="mt-2 font-display text-lg font-semibold text-text-primary">
					Welcome to #{activeChannel.name}
				</h2>
				<p class="mt-1 text-sm text-text-secondary">{activeChannel.description}</p>
			</div>

			<!-- Date divider -->
			<div class="mb-4 flex items-center gap-3">
				<div class="h-px flex-1 bg-border"></div>
				<span class="text-xs font-medium text-text-secondary">Today</span>
				<div class="h-px flex-1 bg-border"></div>
			</div>

			<!-- Messages -->
			<div class="space-y-1">
				{#each mockMessages as message, i}
					{@const showAuthor = i === 0 || mockMessages[i - 1].author !== message.author}
					<div class="group rounded-lg px-2 py-0.5 transition-colors hover:bg-secondary/30">
						{#if showAuthor}
							<div class="flex gap-3 pt-3">
								<!-- Avatar -->
								<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-primary/80 text-sm font-bold text-text-cream">
									{message.avatar}
								</div>
								<!-- Content -->
								<div class="min-w-0 flex-1">
									<div class="flex items-baseline gap-2">
										<span class="text-sm font-semibold text-text-primary">{message.author}</span>
										<span class="text-xs text-text-secondary">{message.timestamp}</span>
									</div>
									<p class="mt-0.5 text-sm leading-relaxed text-text-primary">{message.content}</p>

									{#if message.hasImage}
										<div class="mt-2 max-w-sm overflow-hidden rounded-lg border border-border bg-gradient-to-br from-accent-gold/10 to-accent-primary/10">
											<div class="flex aspect-[16/10] items-center justify-center">
												<div class="text-center">
													<Image class="mx-auto h-10 w-10 text-accent-primary/30" />
													<p class="mt-2 text-xs text-text-secondary">Image preview</p>
												</div>
											</div>
										</div>
									{/if}

									{#if message.reactions}
										<div class="mt-1.5 flex flex-wrap gap-1.5">
											{#each message.reactions as reaction}
												<button class="flex items-center gap-1 rounded-full border border-border bg-secondary/50 px-2 py-0.5 text-xs transition-colors hover:border-accent-primary/30 hover:bg-accent-primary/5">
													<span>{reaction.emoji}</span>
													<span class="font-medium text-text-secondary">{reaction.count}</span>
												</button>
											{/each}
										</div>
									{/if}
								</div>
							</div>
						{:else}
							<div class="flex gap-3">
								<!-- Timestamp on hover (aligned with avatar space) -->
								<div class="flex w-9 shrink-0 items-center justify-center">
									<span class="text-[10px] text-text-secondary opacity-0 transition-opacity group-hover:opacity-100">
										{message.timestamp}
									</span>
								</div>
								<div class="min-w-0 flex-1">
									<p class="text-sm leading-relaxed text-text-primary">{message.content}</p>

									{#if message.hasImage}
										<div class="mt-2 max-w-sm overflow-hidden rounded-lg border border-border bg-gradient-to-br from-accent-gold/10 to-accent-primary/10">
											<div class="flex aspect-[16/10] items-center justify-center">
												<div class="text-center">
													<Image class="mx-auto h-10 w-10 text-accent-primary/30" />
													<p class="mt-2 text-xs text-text-secondary">Image preview</p>
												</div>
											</div>
										</div>
									{/if}

									{#if message.reactions}
										<div class="mt-1.5 flex flex-wrap gap-1.5">
											{#each message.reactions as reaction}
												<button class="flex items-center gap-1 rounded-full border border-border bg-secondary/50 px-2 py-0.5 text-xs transition-colors hover:border-accent-primary/30 hover:bg-accent-primary/5">
													<span>{reaction.emoji}</span>
													<span class="font-medium text-text-secondary">{reaction.count}</span>
												</button>
											{/each}
										</div>
									{/if}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<!-- Message Input -->
		<div class="border-t border-border bg-surface px-4 py-3 sm:px-6">
			<div class="flex items-end gap-2 rounded-xl border border-border bg-bg-primary p-2 focus-within:border-accent-primary/50 focus-within:ring-2 focus-within:ring-accent-primary/20">
				<button
					class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-secondary hover:text-text-primary"
					aria-label="Attach file"
				>
					<Paperclip class="h-5 w-5" />
				</button>

				<textarea
					bind:value={messageInput}
					placeholder="Message #{activeChannel.name}"
					rows="1"
					class="max-h-32 min-h-[36px] flex-1 resize-none border-none bg-transparent py-1.5 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none"
					onkeydown={(e) => {
						if (e.key === 'Enter' && !e.shiftKey) {
							e.preventDefault();
							// Send message
							messageInput = '';
						}
					}}
				></textarea>

				<button
					class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-secondary hover:text-text-primary"
					aria-label="Emoji picker"
				>
					<Smile class="h-5 w-5" />
				</button>

				<button
					class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors {messageInput.trim()
						? 'bg-accent-primary text-text-cream hover:bg-accent-hover'
						: 'text-text-secondary/40'}"
					disabled={!messageInput.trim()}
					aria-label="Send message"
				>
					<Send class="h-4 w-4" />
				</button>
			</div>
		</div>
	</main>

	<!-- ===== RIGHT SIDEBAR: Members ===== -->
	<aside
		class="fixed right-0 top-0 z-40 flex h-full w-[260px] flex-col border-l border-border bg-surface pt-16 transition-transform duration-200 lg:static lg:z-auto lg:pt-0 {rightSidebarOpen
			? 'translate-x-0'
			: 'translate-x-full lg:hidden'}"
	>
		<!-- Members Header -->
		<div class="flex items-center justify-between border-b border-border px-4 py-4">
			<h2 class="font-display text-base font-semibold">Members</h2>
			<button class="lg:hidden" onclick={() => (rightSidebarOpen = false)} aria-label="Close members panel">
				<X class="h-5 w-5 text-text-secondary" />
			</button>
		</div>

		<!-- Member List -->
		<div class="flex-1 overflow-y-auto px-3 py-4">
			<!-- Online -->
			<p class="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-text-secondary/70">
				Online -- {onlineMembers.length}
			</p>
			<div class="mb-6 space-y-0.5">
				{#each onlineMembers as member}
					<div class="flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-secondary/50">
						<div class="relative">
							<div class="flex h-8 w-8 items-center justify-center rounded-full bg-accent-primary/80 text-xs font-bold text-text-cream">
								{member.avatar}
							</div>
							<div class="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-surface bg-accent-green"></div>
						</div>
						<span class="truncate text-sm text-text-primary">{member.name}</span>
					</div>
				{/each}
			</div>

			<!-- Offline -->
			<p class="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-text-secondary/70">
				Offline -- {offlineMembers.length}
			</p>
			<div class="space-y-0.5">
				{#each offlineMembers as member}
					<div class="flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-secondary/50">
						<div class="relative">
							<div class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-bold text-text-secondary">
								{member.avatar}
							</div>
						</div>
						<span class="truncate text-sm text-text-secondary">{member.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</aside>
</div>
