<script lang="ts">
	import { withPrefix } from '$lib/data/utils';
	import { BookOpen, ShoppingBag, Heart, MessageSquare, Play, Clock } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/a-staging', href);

	const statsCards = [
		{ label: 'COURSES IN PROGRESS', value: '3', icon: BookOpen },
		{ label: 'LESSONS COMPLETED', value: '18', icon: Play },
		{ label: 'HOURS LEARNED', value: '12.5', icon: Clock },
		{ label: 'FORUM POSTS', value: '7', icon: MessageSquare }
	];

	const continueLearning = [
		{ title: 'Foundations of Faith', lesson: 'The Shahada: Declaration of Faith', progress: 35, slug: 'foundations-of-faith' },
		{ title: 'Prayer Mastery', lesson: 'Pillar 2: Salah - The Daily Prayers', progress: 15, slug: 'prayer-mastery' }
	];

	const recentOrders = [
		{ id: 'ORD-1234', date: '2026-02-15', total: '$24.99', status: 'Delivered', item: 'Being Muslim: A Practical Guide' },
		{ id: 'ORD-1198', date: '2026-01-28', total: '$14.99', status: 'Delivered', item: 'Prayer Reference Cards' }
	];

	const communityActivity = [
		{ type: 'reply', thread: 'Tips for staying consistent with all 5 prayers?', time: '2 hours ago' },
		{ type: 'post', thread: 'My experience learning Al-Fatiha', time: '1 day ago' }
	];
</script>

<svelte:head>
	<title>Dashboard - Being Muslim</title>
</svelte:head>

<div>
	<!-- Welcome -->
	<h1 class="font-display text-3xl font-bold">Welcome back, <span class="highlight">Aminah</span></h1>
	<p class="mono mt-2 text-text-secondary">HERE IS AN OVERVIEW OF YOUR ACTIVITY</p>

	<!-- Stats -->
	<div class="mt-8 grid grid-cols-2 gap-0 border-[3px] border-border lg:grid-cols-4">
		{#each statsCards as stat, i}
			<div class="border-b-[3px] border-r-[3px] border-border p-4 last:border-r-0 lg:border-b-0 {i > 1 ? 'border-b-0' : ''} {i % 2 === 1 ? 'max-lg:border-r-0' : ''}">
				<stat.icon class="h-5 w-5 text-accent-primary" />
				<p class="mt-2 font-display text-3xl font-bold">{stat.value}</p>
				<p class="mono text-text-secondary">{stat.label}</p>
			</div>
		{/each}
	</div>

	<!-- Continue Learning -->
	<div class="mt-10">
		<div class="flex items-end justify-between">
			<h2 class="font-display text-xl font-bold">Continue <span class="highlight">Learning</span></h2>
			<a href={p('/account/learning')} class="mono text-accent-primary hover:text-red-700">VIEW ALL</a>
		</div>
		<div class="mt-4 border-[3px] border-border">
			{#each continueLearning as course}
				<a
					href={p('/courses/' + course.slug)}
					class="group block border-b-[3px] border-border px-4 py-4 transition-colors last:border-b-0 hover:bg-accent-gold/10"
				>
					<div class="flex items-center justify-between">
						<h3 class="font-display font-bold group-hover:text-accent-primary">{course.title}</h3>
						<span class="mono text-text-secondary">{course.progress}%</span>
					</div>
					<p class="mono mt-1 text-text-secondary">NEXT: {course.lesson}</p>
					<div class="mt-3 h-2 border-[3px] border-border">
						<div class="h-full bg-accent-primary" style="width: {course.progress}%"></div>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- Recent Orders -->
	<div class="mt-10">
		<div class="flex items-end justify-between">
			<h2 class="font-display text-xl font-bold">Recent <span class="highlight">Orders</span></h2>
			<a href={p('/account/orders')} class="mono text-accent-primary hover:text-red-700">VIEW ALL</a>
		</div>
		<div class="mt-4 border-[3px] border-border">
			{#each recentOrders as order}
				<div class="flex items-center justify-between border-b-[3px] border-border px-4 py-3 last:border-b-0">
					<div>
						<p class="font-display font-bold">{order.item}</p>
						<span class="mono text-text-secondary">{order.id} · {order.date}</span>
					</div>
					<div class="text-right">
						<p class="font-display font-bold">{order.total}</p>
						<span class="border-[3px] border-border bg-accent-green px-2 py-0.5 text-xs font-bold text-white">{order.status}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Community Activity -->
	<div class="mt-10">
		<div class="flex items-end justify-between">
			<h2 class="font-display text-xl font-bold">Community <span class="highlight">Activity</span></h2>
			<a href={p('/community')} class="mono text-accent-primary hover:text-red-700">VIEW ALL</a>
		</div>
		<div class="mt-4 border-[3px] border-border">
			{#each communityActivity as activity}
				<div class="flex items-center gap-4 border-b-[3px] border-border px-4 py-3 last:border-b-0">
					<MessageSquare class="h-4 w-4 shrink-0 text-text-secondary" />
					<div class="min-w-0 flex-1">
						<p class="text-sm">{activity.type === 'reply' ? 'Replied to' : 'Posted'}: {activity.thread}</p>
						<span class="mono text-text-secondary">{activity.time}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
