<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { BookOpen, FileText, MessageCircle, Heart, ArrowRight, Play, Clock } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/b-staging', href);

	const stats = [
		{ label: 'Courses in Progress', value: '3', icon: BookOpen, bg: 'bg-[#007AFF]/10', fg: 'text-[#007AFF]' },
		{ label: 'Articles Read', value: '24', icon: FileText, bg: 'bg-[#FF9F0A]/10', fg: 'text-[#FF9F0A]' },
		{ label: 'Community Posts', value: '12', icon: MessageCircle, bg: 'bg-[#5856D6]/10', fg: 'text-[#5856D6]' },
		{ label: 'Donation Total', value: '$340', icon: Heart, bg: 'bg-[#FF3B30]/10', fg: 'text-[#FF3B30]' }
	];

	const continueLearning = [
		{ title: 'Foundations of Faith', instructor: 'Dr. Asad Tarsin', progress: 65, lessonsCompleted: 16, totalLessons: 24, lastAccessed: '2 hours ago', slug: 'foundations-of-faith' },
		{ title: 'Prayer Mastery', instructor: 'Imam Ahmad', progress: 30, lessonsCompleted: 5, totalLessons: 16, lastAccessed: '1 day ago', slug: 'prayer-mastery' }
	];

	const recentOrders = [
		{ id: 'BM-2024-0142', date: 'Feb 10, 2026', items: ['Being Muslim Boxed Set', 'Prayer Cards'], status: 'Shipped' as const, total: 99.98 },
		{ id: 'BM-2024-0118', date: 'Jan 25, 2026', items: ['Being Muslim: Digital Edition'], status: 'Delivered' as const, total: 12.99 }
	];

	const communityActivity = [
		{ type: 'post' as const, title: 'Tips for staying consistent with all 5 prayers?', forum: 'Prayer Help', replies: 23, time: '3 hours ago' },
		{ type: 'reply' as const, title: 'How did you tell your family about converting?', forum: 'New Muslim Lounge', replies: 47, time: '1 day ago' },
		{ type: 'post' as const, title: 'Favorite dhikr after salah?', forum: 'Daily Life', replies: 8, time: '3 days ago' }
	];
</script>

<svelte:head>
	<title>Account Dashboard — Being Muslim</title>
</svelte:head>

<div class="space-y-6">
	<!-- Welcome tile -->
	<div class="rounded-[20px] bg-gradient-to-br from-[#007AFF] to-[#5856D6] p-8">
		<h1 class="font-display text-2xl font-bold text-white md:text-3xl">Welcome back, Aminah</h1>
		<p class="mt-2 text-sm text-white/70">Here is what is happening on your journey.</p>
	</div>

	<!-- Stats bento -->
	<div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
		{#each stats as stat}
			{@const Icon = stat.icon}
			<div class="rounded-[20px] bg-white p-5">
				<div class="flex h-10 w-10 items-center justify-center rounded-[14px] {stat.bg}">
					<Icon class="h-5 w-5 {stat.fg}" />
				</div>
				<p class="mt-3 font-display text-2xl font-bold text-[#1C1C1E]">{stat.value}</p>
				<p class="mt-0.5 text-xs text-[#8E8E93]">{stat.label}</p>
			</div>
		{/each}
	</div>

	<!-- Continue Learning -->
	<div>
		<div class="flex items-center justify-between">
			<h2 class="font-display text-xl font-bold text-[#1C1C1E]">Continue Learning</h2>
			<a href={p('/account/learning')} class="inline-flex items-center gap-1 text-sm font-medium text-[#007AFF] hover:underline">
				View all <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
		<div class="mt-4 grid gap-3 sm:grid-cols-2">
			{#each continueLearning as course}
				<div class="rounded-[20px] bg-white p-5">
					<div class="flex items-center gap-3">
						<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[#30D158]/10">
							<Play class="h-5 w-5 text-[#30D158]" />
						</div>
						<div class="min-w-0">
							<h3 class="truncate font-display text-base font-bold text-[#1C1C1E]">{course.title}</h3>
							<p class="text-xs text-[#8E8E93]">{course.instructor}</p>
						</div>
					</div>
					<div class="mt-4">
						<div class="flex items-center justify-between text-xs text-[#8E8E93]">
							<span>{course.lessonsCompleted}/{course.totalLessons} lessons</span>
							<span>{course.progress}%</span>
						</div>
						<div class="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#F2F2F7]">
							<div class="h-full rounded-full bg-[#007AFF]" style="width: {course.progress}%"></div>
						</div>
					</div>
					<div class="mt-4 flex items-center justify-between">
						<span class="flex items-center gap-1 text-xs text-[#8E8E93]"><Clock class="h-3 w-3" /> {course.lastAccessed}</span>
						<button class="rounded-[10px] bg-[#007AFF] px-4 py-1.5 text-xs font-semibold text-white hover:opacity-90">Continue</button>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Recent Orders -->
	<div>
		<div class="flex items-center justify-between">
			<h2 class="font-display text-xl font-bold text-[#1C1C1E]">Recent Orders</h2>
			<a href={p('/account/orders')} class="inline-flex items-center gap-1 text-sm font-medium text-[#007AFF] hover:underline">View all <ArrowRight class="h-3.5 w-3.5" /></a>
		</div>
		<div class="mt-4 space-y-3">
			{#each recentOrders as order}
				<div class="flex flex-col gap-3 rounded-[20px] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<div class="flex items-center gap-2">
							<p class="text-sm font-bold text-[#1C1C1E]">#{order.id}</p>
							<span class="rounded-full px-2.5 py-0.5 text-xs font-medium {order.status === 'Delivered' ? 'bg-[#30D158]/10 text-[#30D158]' : 'bg-[#FF9F0A]/10 text-[#FF9F0A]'}">{order.status}</span>
						</div>
						<p class="mt-1 text-xs text-[#8E8E93]">{order.date}</p>
						<p class="mt-0.5 text-sm text-[#8E8E93]">{order.items.join(', ')}</p>
					</div>
					<div class="flex items-center gap-4">
						<p class="font-display text-lg font-bold text-[#1C1C1E]">${order.total.toFixed(2)}</p>
						<button class="rounded-[10px] bg-[#F2F2F7] px-4 py-1.5 text-xs font-medium text-[#1C1C1E] hover:bg-[#E5E5EA]">View Details</button>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Community Activity -->
	<div>
		<div class="flex items-center justify-between">
			<h2 class="font-display text-xl font-bold text-[#1C1C1E]">Community Activity</h2>
			<a href={p('/community')} class="inline-flex items-center gap-1 text-sm font-medium text-[#007AFF] hover:underline">View all <ArrowRight class="h-3.5 w-3.5" /></a>
		</div>
		<div class="mt-4 space-y-3">
			{#each communityActivity as activity}
				<div class="flex items-start gap-3 rounded-[20px] bg-white p-4">
					<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full {activity.type === 'post' ? 'bg-[#007AFF]/10' : 'bg-[#5856D6]/10'}">
						<MessageCircle class="h-4 w-4 {activity.type === 'post' ? 'text-[#007AFF]' : 'text-[#5856D6]'}" />
					</div>
					<div class="min-w-0 flex-1">
						<p class="text-sm font-medium text-[#1C1C1E]">{activity.title}</p>
						<div class="mt-1 flex items-center gap-2 text-xs text-[#8E8E93]">
							<span class="rounded-full bg-[#F2F2F7] px-2 py-0.5 text-[10px] font-medium">{activity.forum}</span>
							<span>{activity.replies} replies</span>
							<span>{activity.time}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
