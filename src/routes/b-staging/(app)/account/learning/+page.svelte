<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { Play, Clock, BookOpen, ArrowRight, CheckCircle } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/b-staging', href);

	let activeTab = $state<'progress' | 'completed'>('progress');

	const enrolledCourses = [
		{ title: 'Foundations of Faith', instructor: 'Dr. Asad Tarsin', progress: 65, lessonsCompleted: 16, totalLessons: 24, slug: 'foundations-of-faith', lastAccessed: '2 hours ago' },
		{ title: 'Prayer Mastery', instructor: 'Imam Ahmad', progress: 30, lessonsCompleted: 5, totalLessons: 16, slug: 'prayer-mastery', lastAccessed: '1 day ago' },
		{ title: 'Your Quran Journey', instructor: 'Ustadha Fatima', progress: 10, lessonsCompleted: 3, totalLessons: 32, slug: 'quran-journey', lastAccessed: '3 days ago' }
	];

	const completedCourses = [
		{ title: 'Introduction to Islam', instructor: 'Dr. Asad Tarsin', completedDate: 'Jan 15, 2026', slug: 'intro-to-islam' }
	];

	const totalLessons = enrolledCourses.reduce((s, c) => s + c.totalLessons, 0) + completedCourses.length * 20;
	const completedLessons = enrolledCourses.reduce((s, c) => s + c.lessonsCompleted, 0) + completedCourses.length * 20;
</script>

<svelte:head>
	<title>My Learning — Being Muslim</title>
</svelte:head>

<div class="space-y-6">
	<div>
		<h1 class="font-display text-2xl font-bold text-[#1C1C1E]">My Learning</h1>
		<p class="mt-1 text-sm text-[#8E8E93]">Track your progress across all your courses.</p>
	</div>

	<!-- Stats row -->
	<div class="grid grid-cols-3 gap-3">
		<div class="rounded-[20px] bg-white p-5 text-center">
			<p class="font-display text-3xl font-bold text-[#007AFF]">{enrolledCourses.length}</p>
			<p class="mt-1 text-xs text-[#8E8E93]">In Progress</p>
		</div>
		<div class="rounded-[20px] bg-white p-5 text-center">
			<p class="font-display text-3xl font-bold text-[#30D158]">{completedCourses.length}</p>
			<p class="mt-1 text-xs text-[#8E8E93]">Completed</p>
		</div>
		<div class="rounded-[20px] bg-white p-5 text-center">
			<p class="font-display text-3xl font-bold text-[#FF9F0A]">{completedLessons}</p>
			<p class="mt-1 text-xs text-[#8E8E93]">Lessons Done</p>
		</div>
	</div>

	<!-- Segmented control -->
	<div class="inline-flex rounded-[10px] bg-[#E5E5EA] p-1">
		<button class="rounded-[8px] px-4 py-1.5 text-sm font-medium transition-all {activeTab === 'progress' ? 'bg-white text-[#1C1C1E] shadow-sm' : 'text-[#8E8E93]'}" onclick={() => (activeTab = 'progress')}>In Progress</button>
		<button class="rounded-[8px] px-4 py-1.5 text-sm font-medium transition-all {activeTab === 'completed' ? 'bg-white text-[#1C1C1E] shadow-sm' : 'text-[#8E8E93]'}" onclick={() => (activeTab = 'completed')}>Completed</button>
	</div>

	{#if activeTab === 'progress'}
		<div class="space-y-3">
			{#each enrolledCourses as course}
				<div class="rounded-[20px] bg-white p-5">
					<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#007AFF]/10">
								<Play class="h-6 w-6 text-[#007AFF]" />
							</div>
							<div>
								<h3 class="font-display text-base font-bold text-[#1C1C1E]">{course.title}</h3>
								<p class="text-sm text-[#8E8E93]">{course.instructor}</p>
							</div>
						</div>
						<div class="flex items-center gap-4">
							<div class="w-32">
								<div class="flex items-center justify-between text-xs text-[#8E8E93]">
									<span>{course.lessonsCompleted}/{course.totalLessons}</span>
									<span>{course.progress}%</span>
								</div>
								<div class="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#F2F2F7]">
									<div class="h-full rounded-full bg-[#007AFF]" style="width: {course.progress}%"></div>
								</div>
							</div>
							<a href={p(`/courses/${course.slug}`)} class="rounded-[10px] bg-[#007AFF] px-5 py-2 text-xs font-semibold text-white hover:opacity-90">
								Continue
							</a>
						</div>
					</div>
					<p class="mt-3 flex items-center gap-1 text-xs text-[#8E8E93]"><Clock class="h-3 w-3" /> Last accessed {course.lastAccessed}</p>
				</div>
			{/each}
		</div>
	{:else}
		<div class="space-y-3">
			{#each completedCourses as course}
				<div class="rounded-[20px] bg-white p-5">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#30D158]/10">
								<BookOpen class="h-6 w-6 text-[#30D158]" />
							</div>
							<div>
								<h3 class="font-display text-base font-bold text-[#1C1C1E]">{course.title}</h3>
								<p class="text-sm text-[#8E8E93]">{course.instructor} &middot; Completed {course.completedDate}</p>
							</div>
						</div>
						<div class="flex items-center gap-2 rounded-full bg-[#30D158]/10 px-3 py-1">
							<CheckCircle class="h-4 w-4 text-[#30D158]" />
							<span class="text-xs font-medium text-[#30D158]">Completed</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	<div class="text-center">
		<a href={p('/courses')} class="inline-flex items-center gap-2 rounded-[14px] bg-[#F2F2F7] px-6 py-3 text-sm font-medium text-[#1C1C1E] hover:bg-[#E5E5EA]">
			Browse More Courses <ArrowRight class="h-4 w-4" />
		</a>
	</div>
</div>
