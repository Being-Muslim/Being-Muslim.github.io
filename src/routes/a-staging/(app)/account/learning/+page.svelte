<script lang="ts">
	import { withPrefix } from '$lib/data/utils';
	import { BookOpen, Clock, Play, CheckCircle2, ArrowRight } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/a-staging', href);

	const enrolledCourses = [
		{
			slug: 'foundations-of-faith',
			title: 'Foundations of Faith',
			instructor: 'Dr. Asad Tarsin',
			totalLessons: 24,
			completedLessons: 8,
			nextLesson: 'The Shahada: Declaration of Faith',
			lastAccessed: '2 hours ago'
		},
		{
			slug: 'prayer-mastery',
			title: 'Prayer Mastery',
			instructor: 'Imam Ahmad',
			totalLessons: 16,
			completedLessons: 2,
			nextLesson: 'Pillar 2: Salah - The Daily Prayers',
			lastAccessed: '1 day ago'
		},
		{
			slug: 'quran-journey',
			title: 'Your Quran Journey',
			instructor: 'Ustadha Fatima',
			totalLessons: 32,
			completedLessons: 0,
			nextLesson: 'Welcome & Course Overview',
			lastAccessed: 'Not started'
		}
	];

	const completedCourses = [
		{
			slug: 'exploring-islam-intro',
			title: 'Exploring Islam: An Introduction',
			instructor: 'Dr. Asad Tarsin',
			completedDate: '2026-01-15',
			totalLessons: 8
		}
	];
</script>

<svelte:head>
	<title>My Learning - Being Muslim</title>
</svelte:head>

<div>
	<h1 class="font-display text-2xl font-bold">My <span class="highlight">Learning</span></h1>
	<p class="mono mt-2 text-text-secondary">TRACK YOUR COURSE PROGRESS</p>

	<!-- Summary Stats -->
	<div class="mt-8 grid grid-cols-3 gap-0 border-[3px] border-border">
		<div class="border-r-[3px] border-border p-4 text-center">
			<p class="font-display text-3xl font-bold">{enrolledCourses.length}</p>
			<p class="mono text-text-secondary">IN PROGRESS</p>
		</div>
		<div class="border-r-[3px] border-border p-4 text-center">
			<p class="font-display text-3xl font-bold">{completedCourses.length}</p>
			<p class="mono text-text-secondary">COMPLETED</p>
		</div>
		<div class="p-4 text-center">
			<p class="font-display text-3xl font-bold">
				{enrolledCourses.reduce((s, c) => s + c.completedLessons, 0) + completedCourses.reduce((s, c) => s + c.totalLessons, 0)}
			</p>
			<p class="mono text-text-secondary">LESSONS DONE</p>
		</div>
	</div>

	<!-- In Progress -->
	<div class="mt-10">
		<h2 class="font-display text-xl font-bold">In <span class="highlight">Progress</span></h2>
		<div class="mt-4 border-[3px] border-border">
			{#each enrolledCourses as course}
				{@const progress = Math.round((course.completedLessons / course.totalLessons) * 100)}
				<a
					href={p('/courses/' + course.slug)}
					class="group block border-b-[3px] border-border px-4 py-5 transition-colors last:border-b-0 hover:bg-accent-gold/10"
				>
					<div class="flex items-center justify-between">
						<h3 class="font-display text-lg font-bold group-hover:text-accent-primary">{course.title}</h3>
						<span class="font-display text-lg font-bold">{progress}%</span>
					</div>

					<!-- Progress Bar -->
					<div class="mt-3 h-3 border-[3px] border-border">
						<div class="h-full bg-accent-primary transition-all" style="width: {progress}%"></div>
					</div>

					<div class="mt-3 flex flex-wrap items-center gap-4">
						<span class="mono text-text-secondary">{course.instructor}</span>
						<span class="mono text-text-secondary">{course.completedLessons}/{course.totalLessons} LESSONS</span>
						<span class="flex items-center gap-1 text-text-secondary">
							<Clock class="h-3 w-3" />
							<span class="mono">{course.lastAccessed.toUpperCase()}</span>
						</span>
					</div>

					<div class="mt-3 flex items-center justify-between">
						<p class="mono text-text-secondary">
							NEXT: <span class="text-text-primary">{course.nextLesson}</span>
						</p>
						<span class="flex items-center gap-1 font-display font-bold text-accent-primary">
							Continue
							<Play class="h-4 w-4" />
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- Completed -->
	{#if completedCourses.length > 0}
		<div class="mt-10">
			<h2 class="font-display text-xl font-bold"><span class="highlight">Completed</span></h2>
			<div class="mt-4 border-[3px] border-border">
				{#each completedCourses as course}
					<div class="flex items-center gap-4 border-b-[3px] border-border bg-accent-green/5 px-4 py-4 last:border-b-0">
						<div class="flex h-10 w-10 shrink-0 items-center justify-center border-[3px] border-accent-green bg-accent-green">
							<CheckCircle2 class="h-5 w-5 text-white" />
						</div>
						<div class="min-w-0 flex-1">
							<h3 class="font-display font-bold">{course.title}</h3>
							<div class="flex items-center gap-3">
								<span class="mono text-text-secondary">{course.instructor}</span>
								<span class="mono text-text-secondary">COMPLETED {course.completedDate}</span>
							</div>
						</div>
						<span class="mono text-text-secondary">{course.totalLessons} LESSONS</span>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Browse More -->
	<div class="mt-8">
		<a
			href={p('/courses')}
			class="group inline-flex items-center gap-2 font-display font-bold text-accent-primary transition-colors hover:text-red-700"
		>
			Browse More Courses
			<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
		</a>
	</div>
</div>
