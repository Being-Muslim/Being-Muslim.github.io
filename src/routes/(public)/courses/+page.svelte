<script lang="ts">
	import { base } from '$app/paths';
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import { courses, type Course } from '$lib/data/mock.js';
	import {
		ArrowRight,
		BookOpen,
		Clock,
		Play,
		Search,
		SlidersHorizontal,
		Users
	} from 'lucide-svelte';

	const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const;
	const categories = ['All', ...new Set(courses.map((c) => c.category))];

	let selectedDifficulty = $state<string>('All');
	let selectedCategory = $state<string>('All');
	let searchQuery = $state('');

	const featuredCourse = $derived(courses.find((c) => c.featured));

	const filteredCourses = $derived(
		courses.filter((c) => {
			const matchesDifficulty =
				selectedDifficulty === 'All' || c.difficulty === selectedDifficulty;
			const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
			const matchesSearch =
				searchQuery === '' ||
				c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				c.description.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesDifficulty && matchesCategory && matchesSearch;
		})
	);

	function getDifficultyVariant(
		difficulty: Course['difficulty']
	): 'green' | 'gold' | 'destructive' {
		switch (difficulty) {
			case 'Beginner':
				return 'green';
			case 'Intermediate':
				return 'gold';
			case 'Advanced':
				return 'destructive';
		}
	}
</script>

<svelte:head>
	<title>Courses - Being Muslim</title>
	<meta
		name="description"
		content="Structured courses designed by scholars and educators to guide you step by step on your Islamic journey."
	/>
</svelte:head>

<!-- Hero -->
<section class="bg-bg-dark pt-28 pb-16 sm:pt-36 sm:pb-20">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="max-w-2xl">
			<Badge variant="gold">
				{#snippet children()}Structured Learning{/snippet}
			</Badge>
			<h1 class="mt-4 font-display text-4xl font-bold text-text-cream sm:text-5xl">Courses</h1>
			<p class="mt-4 text-lg leading-relaxed text-text-cream/70">
				Comprehensive, self-paced courses designed by scholars and educators. Learn the foundations
				of Islam, deepen your prayer, explore the Quran, and more.
			</p>
		</div>
	</div>
</section>

<!-- Featured Course -->
{#if featuredCourse}
	<section class="-mt-8 relative z-10">
		<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
			<a href="{base}/courses/{featuredCourse.slug}" class="group block">
				<div
					class="overflow-hidden rounded-2xl border border-border bg-surface shadow-lg transition-all hover:shadow-xl"
				>
					<div class="grid lg:grid-cols-5">
						<!-- Image area -->
						<div
							class="relative aspect-[16/9] bg-gradient-to-br from-accent-primary/20 to-accent-gold/20 lg:col-span-2 lg:aspect-auto"
						>
							<div class="flex h-full items-center justify-center">
								<Play class="h-16 w-16 text-accent-primary/40" />
							</div>
							<div class="absolute top-4 left-4">
								<Badge variant="gold">
									{#snippet children()}Featured Course{/snippet}
								</Badge>
							</div>
						</div>

						<!-- Content -->
						<div class="flex flex-col justify-center p-6 sm:p-8 lg:col-span-3">
							<div class="flex flex-wrap items-center gap-2">
								<Badge variant={getDifficultyVariant(featuredCourse.difficulty)}>
									{#snippet children()}{featuredCourse.difficulty}{/snippet}
								</Badge>
								<span class="text-sm text-text-secondary">{featuredCourse.category}</span>
							</div>
							<h2
								class="mt-3 font-display text-2xl font-bold transition-colors group-hover:text-accent-primary sm:text-3xl"
							>
								{featuredCourse.title}
							</h2>
							<p class="mt-3 text-text-secondary leading-relaxed">{featuredCourse.description}</p>

							<div class="mt-6 flex flex-wrap items-center gap-6 text-sm text-text-secondary">
								<span class="flex items-center gap-1.5">
									<BookOpen class="h-4 w-4" />
									{featuredCourse.lessonCount} lessons
								</span>
								<span class="flex items-center gap-1.5">
									<Clock class="h-4 w-4" />
									{featuredCourse.duration}
								</span>
								{#if featuredCourse.enrolled}
									<span class="flex items-center gap-1.5">
										<Users class="h-4 w-4" />
										{featuredCourse.enrolled.toLocaleString()} enrolled
									</span>
								{/if}
							</div>

							<div class="mt-4 flex items-center gap-3">
								<span class="text-sm font-medium text-text-primary">
									by {featuredCourse.instructor}
								</span>
							</div>

							<div class="mt-6">
								<span
									class="inline-flex items-center gap-1.5 text-sm font-medium text-accent-primary"
								>
									Start Learning
									<ArrowRight
										class="h-4 w-4 transition-transform group-hover:translate-x-1"
									/>
								</span>
							</div>
						</div>
					</div>
				</div>
			</a>
		</div>
	</section>
{/if}

<!-- Filter Bar + Grid -->
<Section>
	<!-- Search & Filters -->
	<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<!-- Search -->
		<div class="relative max-w-sm flex-1">
			<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Search courses..."
				class="w-full rounded-lg border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
			/>
		</div>

		<!-- Filters -->
		<div class="flex flex-wrap items-center gap-3">
			<div class="flex items-center gap-1.5 text-sm text-text-secondary">
				<SlidersHorizontal class="h-4 w-4" />
				<span>Filter:</span>
			</div>

			<!-- Difficulty -->
			<div class="flex gap-1 rounded-lg border border-border bg-surface p-1">
				{#each difficulties as diff}
					<button
						class="rounded-md px-3 py-1.5 text-xs font-medium transition-colors {selectedDifficulty ===
						diff
							? 'bg-accent-primary text-text-cream'
							: 'text-text-secondary hover:text-text-primary hover:bg-secondary'}"
						onclick={() => (selectedDifficulty = diff)}
					>
						{diff}
					</button>
				{/each}
			</div>

			<!-- Category -->
			<select
				bind:value={selectedCategory}
				class="rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
			>
				{#each categories as cat}
					<option value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
				{/each}
			</select>
		</div>
	</div>

	<!-- Results count -->
	<div class="mt-6 text-sm text-text-secondary">
		{filteredCourses.length}
		{filteredCourses.length === 1 ? 'course' : 'courses'} found
	</div>

	<!-- Course Grid -->
	<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each filteredCourses as course (course.slug)}
			<a href="{base}/courses/{course.slug}" class="group">
				<div
					class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-accent-primary/30 hover:shadow-lg"
				>
					<!-- Image placeholder -->
					<div
						class="relative aspect-[16/9] bg-gradient-to-br from-accent-green/20 to-accent-primary/20"
					>
						<div class="flex h-full items-center justify-center">
							<Play class="h-12 w-12 text-accent-green/40" />
						</div>
						<div class="absolute top-3 left-3">
							<Badge variant={getDifficultyVariant(course.difficulty)}>
								{#snippet children()}{course.difficulty}{/snippet}
							</Badge>
						</div>
					</div>

					<!-- Content -->
					<div class="flex flex-1 flex-col p-5">
						<div class="flex items-center gap-2">
							<span class="text-xs font-medium text-accent-primary">{course.category}</span>
						</div>

						<h3
							class="mt-2 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent-primary"
						>
							{course.title}
						</h3>

						<p class="mt-2 flex-1 text-sm leading-relaxed text-text-secondary line-clamp-2">
							{course.description}
						</p>

						<div class="mt-4 flex items-center justify-between text-xs text-text-secondary">
							<span class="font-medium">{course.instructor}</span>
							<span class="flex items-center gap-3">
								<span class="flex items-center gap-1">
									<BookOpen class="h-3.5 w-3.5" />
									{course.lessonCount}
								</span>
								<span class="flex items-center gap-1">
									<Clock class="h-3.5 w-3.5" />
									{course.duration}
								</span>
							</span>
						</div>

						{#if course.enrolled}
							<div class="mt-3 border-t border-border pt-3">
								<div class="flex items-center justify-between text-xs text-text-secondary">
									<span class="flex items-center gap-1">
										<Users class="h-3.5 w-3.5" />
										{course.enrolled.toLocaleString()} enrolled
									</span>
									{#if course.progress !== undefined}
										<span>{course.progress}% complete</span>
									{/if}
								</div>
								{#if course.progress !== undefined}
									<Progress value={course.progress} class="mt-2 h-1.5" />
								{/if}
							</div>
						{/if}
					</div>
				</div>
			</a>
		{/each}
	</div>

	<!-- Empty state -->
	{#if filteredCourses.length === 0}
		<div class="mt-16 text-center">
			<Search class="mx-auto h-12 w-12 text-text-secondary/40" />
			<h3 class="mt-4 font-display text-lg font-semibold">No courses found</h3>
			<p class="mt-2 text-sm text-text-secondary">
				Try adjusting your filters or search terms.
			</p>
			<Button
				variant="outline"
				class="mt-6"
				onclick={() => {
					selectedDifficulty = 'All';
					selectedCategory = 'All';
					searchQuery = '';
				}}
			>
				{#snippet children()}Clear Filters{/snippet}
			</Button>
		</div>
	{/if}
</Section>
