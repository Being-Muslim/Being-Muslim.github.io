<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import {
		BookOpen,
		FileText,
		MessageCircle,
		Heart,
		ArrowRight,
		Play,
		Clock
	} from 'lucide-svelte';

	const stats = [
		{ label: 'Courses in Progress', value: '3', icon: BookOpen, color: 'bg-accent-primary/10 text-accent-primary' },
		{ label: 'Articles Read', value: '24', icon: FileText, color: 'bg-accent-gold/10 text-accent-gold' },
		{ label: 'Community Posts', value: '12', icon: MessageCircle, color: 'bg-accent-green/10 text-accent-green' },
		{ label: 'Donation Total', value: '$340', icon: Heart, color: 'bg-accent-primary/10 text-accent-primary' }
	];

	const continueLearning = [
		{
			title: 'Foundations of Faith',
			instructor: 'Dr. Asad Tarsin',
			progress: 65,
			lessonsCompleted: 16,
			totalLessons: 24,
			lastAccessed: '2 hours ago',
			slug: 'foundations-of-faith'
		},
		{
			title: 'Prayer Mastery',
			instructor: 'Imam Ahmad',
			progress: 30,
			lessonsCompleted: 5,
			totalLessons: 16,
			lastAccessed: '1 day ago',
			slug: 'prayer-mastery'
		}
	];

	const recentOrders = [
		{
			id: 'BM-2024-0142',
			date: 'Feb 10, 2026',
			items: ['Being Muslim Boxed Set', 'Prayer Cards'],
			status: 'Shipped' as const,
			total: 99.98
		},
		{
			id: 'BM-2024-0118',
			date: 'Jan 25, 2026',
			items: ['Being Muslim: Digital Edition'],
			status: 'Delivered' as const,
			total: 12.99
		}
	];

	const communityActivity = [
		{
			type: 'post' as const,
			title: 'Tips for staying consistent with all 5 prayers?',
			forum: 'Prayer Help',
			replies: 23,
			time: '3 hours ago'
		},
		{
			type: 'reply' as const,
			title: 'How did you tell your family about converting?',
			forum: 'New Muslim Lounge',
			replies: 47,
			time: '1 day ago'
		},
		{
			type: 'post' as const,
			title: 'Favorite dhikr after salah?',
			forum: 'Daily Life',
			replies: 8,
			time: '3 days ago'
		}
	];

	const statusVariant: Record<string, 'gold' | 'green' | 'secondary'> = {
		Processing: 'gold',
		Shipped: 'gold',
		Delivered: 'green'
	};
</script>

<svelte:head>
	<title>Account Dashboard - Being Muslim</title>
</svelte:head>

<div class="space-y-8">
	<!-- Welcome -->
	<div>
		<h1 class="font-display text-2xl font-bold text-text-primary sm:text-3xl">Welcome back, Aminah</h1>
		<p class="mt-1 text-text-secondary">Here's what's happening on your journey.</p>
	</div>

	<!-- Stats Cards -->
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat}
			{@const Icon = stat.icon}
			<div class="rounded-xl border border-border bg-surface p-5">
				<div class="flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-lg {stat.color}">
						<Icon class="h-5 w-5" />
					</div>
					<div>
						<p class="font-display text-2xl font-bold text-text-primary">{stat.value}</p>
						<p class="text-xs text-text-secondary">{stat.label}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Continue Learning -->
	<div>
		<div class="flex items-center justify-between">
			<h2 class="font-display text-lg font-semibold text-text-primary">Continue Learning</h2>
			<a href="{base}/account/learning" class="inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline">
				View all
				<ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
		<div class="mt-4 grid gap-4 sm:grid-cols-2">
			{#each continueLearning as course}
				<div class="rounded-xl border border-border bg-surface p-5">
					<div class="flex items-start justify-between">
						<div class="flex items-center gap-3">
							<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-green/10">
								<Play class="h-5 w-5 text-accent-green" />
							</div>
							<div>
								<h3 class="font-display text-base font-semibold text-text-primary">{course.title}</h3>
								<p class="text-xs text-text-secondary">{course.instructor}</p>
							</div>
						</div>
					</div>
					<div class="mt-4">
						<div class="flex items-center justify-between text-xs text-text-secondary">
							<span>{course.lessonsCompleted}/{course.totalLessons} lessons</span>
							<span>{course.progress}%</span>
						</div>
						<Progress value={course.progress} class="mt-1.5 h-1.5" />
					</div>
					<div class="mt-3 flex items-center justify-between">
						<span class="flex items-center gap-1 text-xs text-text-secondary">
							<Clock class="h-3 w-3" />
							{course.lastAccessed}
						</span>
						<Button variant="default" size="sm">
							{#snippet children()}
								Continue
							{/snippet}
						</Button>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Recent Orders -->
	<div>
		<div class="flex items-center justify-between">
			<h2 class="font-display text-lg font-semibold text-text-primary">Recent Orders</h2>
			<a href="{base}/account/orders" class="inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline">
				View all
				<ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
		<div class="mt-4 space-y-3">
			{#each recentOrders as order}
				<div class="flex flex-col gap-3 rounded-xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<div class="flex items-center gap-2">
							<p class="text-sm font-semibold text-text-primary">#{order.id}</p>
							<Badge variant={statusVariant[order.status]}>
								{#snippet children()}{order.status}{/snippet}
							</Badge>
						</div>
						<p class="mt-1 text-xs text-text-secondary">{order.date}</p>
						<p class="mt-0.5 text-sm text-text-secondary">{order.items.join(', ')}</p>
					</div>
					<div class="flex items-center gap-4">
						<p class="font-display text-lg font-semibold text-text-primary">${order.total.toFixed(2)}</p>
						<Button variant="outline" size="sm">
							{#snippet children()}
								View Details
							{/snippet}
						</Button>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Community Activity -->
	<div>
		<div class="flex items-center justify-between">
			<h2 class="font-display text-lg font-semibold text-text-primary">Community Activity</h2>
			<a href="{base}/community" class="inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline">
				View all
				<ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
		<div class="mt-4 space-y-3">
			{#each communityActivity as activity}
				<div class="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
					<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full {activity.type === 'post' ? 'bg-accent-primary/10' : 'bg-accent-gold/10'}">
						<MessageCircle class="h-4 w-4 {activity.type === 'post' ? 'text-accent-primary' : 'text-accent-gold'}" />
					</div>
					<div class="min-w-0 flex-1">
						<p class="text-sm font-medium text-text-primary">{activity.title}</p>
						<div class="mt-1 flex items-center gap-2 text-xs text-text-secondary">
							<Badge variant="secondary">
								{#snippet children()}{activity.forum}{/snippet}
							</Badge>
							<span>{activity.replies} replies</span>
							<span class="text-border">|</span>
							<span>{activity.time}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
