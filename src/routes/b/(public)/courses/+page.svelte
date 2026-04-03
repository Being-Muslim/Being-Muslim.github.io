<script lang="ts">
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

	function getDifficultyColor(difficulty: Course['difficulty']): string {
		switch (difficulty) {
			case 'Beginner':
				return '#5a8a5e';
			case 'Intermediate':
				return '#c4a97d';
			case 'Advanced':
				return '#a05a5a';
		}
	}

	function getDifficultyBg(difficulty: Course['difficulty']): string {
		switch (difficulty) {
			case 'Beginner':
				return 'rgba(90,138,94,0.12)';
			case 'Intermediate':
				return 'rgba(196,169,125,0.15)';
			case 'Advanced':
				return 'rgba(160,90,90,0.12)';
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
<section style="background-color: #2a2018;" class="pt-[72px]">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-28">
		<div class="max-w-2xl">
			<p
				style="color: #c4a97d; font-family: 'DM Sans', sans-serif; letter-spacing: 0.08em;"
				class="text-sm font-medium uppercase mb-4"
			>
				&#9670; Structured Learning
			</p>
			<h1
				style="font-family: 'Source Serif 4', serif; color: #f0ebe3;"
				class="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1]"
			>
				Courses
			</h1>
			<p style="color: #f0ebe3; font-family: 'DM Sans', sans-serif;" class="mt-5 text-lg leading-relaxed opacity-70 max-w-lg">
				Comprehensive, self-paced courses designed by scholars and educators. Learn the foundations
				of Islam, deepen your prayer, explore the Quran, and more.
			</p>
		</div>
	</div>
</section>

<!-- Featured Course -->
{#if featuredCourse}
	<section style="background: #faf9f5; padding: 0 0 32px;">
		<div class="mx-auto max-w-[1400px] px-6 lg:px-10" style="margin-top: -32px; position: relative; z-index: 10;">
			<a href="/b/courses/{featuredCourse.slug}" style="text-decoration: none; display: block;" class="group">
				<div style="background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); transition: box-shadow 0.2s;">
					<div class="bm-grid-course-detail">
						<!-- Image area -->
						<div style="background: linear-gradient(135deg, rgba(200,184,160,0.25), rgba(226,220,210,0.4)); display: flex; align-items: center; justify-content: center; position: relative; min-height: 280px;">
							<Play class="h-16 w-16" style="color: rgba(42,32,24,0.3);" />
							<span style="position: absolute; top: 16px; left: 16px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; color: #2a2018; background: rgba(196,169,125,0.25); padding: 4px 12px; border-radius: 999px;">Featured Course</span>
						</div>

						<!-- Content -->
						<div style="padding: 32px;">
							<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 12px;">
								<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: {getDifficultyColor(featuredCourse.difficulty)}; background: {getDifficultyBg(featuredCourse.difficulty)}; padding: 3px 10px; border-radius: 999px;">{featuredCourse.difficulty}</span>
								<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70;">{featuredCourse.category}</span>
							</div>
							<h2 style="font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #2a2018; margin: 0 0 12px; line-height: 1.2;">
								{featuredCourse.title}
							</h2>
							<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 0 0 20px;">{featuredCourse.description}</p>

							<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 20px; font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70;">
								<span style="display: flex; align-items: center; gap: 5px;">
									<BookOpen class="h-4 w-4" />
									{featuredCourse.lessonCount} lessons
								</span>
								<span style="display: flex; align-items: center; gap: 5px;">
									<Clock class="h-4 w-4" />
									{featuredCourse.duration}
								</span>
								{#if featuredCourse.enrolled}
									<span style="display: flex; align-items: center; gap: 5px;">
										<Users class="h-4 w-4" />
										{featuredCourse.enrolled.toLocaleString()} enrolled
									</span>
								{/if}
							</div>

							<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018; margin: 12px 0 0;">
								by {featuredCourse.instructor}
							</p>

							<div style="margin-top: 20px;">
								<span style="display: inline-flex; align-items: center; gap: 6px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018;">
									Start Learning
									<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
<section style="background: #faf9f5; padding: 32px 0 64px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<!-- Search & Filters -->
		<div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px;">
			<!-- Search -->
			<div style="position: relative; max-width: 320px; flex: 1;">
				<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style="color: #8a7e70;" />
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search courses..."
					style="width: 100%; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; padding: 10px 16px 10px 36px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; outline: none; box-sizing: border-box;"
				/>
			</div>

			<!-- Filters -->
			<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px;">
				<div style="display: flex; align-items: center; gap: 6px; font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70;">
					<SlidersHorizontal class="h-4 w-4" />
					<span>Filter:</span>
				</div>

				<!-- Difficulty -->
				<div style="display: flex; gap: 4px; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; padding: 4px;">
					{#each difficulties as diff}
						<button
							style="border-radius: 6px; padding: 6px 14px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; border: none; cursor: pointer; transition: all 0.2s; background: {selectedDifficulty === diff ? '#2a2018' : 'transparent'}; color: {selectedDifficulty === diff ? '#f0ebe3' : '#8a7e70'};"
							onclick={() => (selectedDifficulty = diff)}
						>
							{diff}
						</button>
					{/each}
				</div>

				<!-- Category -->
				<select
					bind:value={selectedCategory}
					style="border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; padding: 8px 14px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #2a2018; outline: none; cursor: pointer;"
				>
					{#each categories as cat}
						<option value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Results count -->
		<div style="margin-top: 20px; font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70;">
			{filteredCourses.length}
			{filteredCourses.length === 1 ? 'course' : 'courses'} found
		</div>

		<!-- Course Grid -->
		<div class="bm-grid-3" style="gap: 24px; margin-top: 20px;">
			{#each filteredCourses as course (course.slug)}
				<a href="/b/courses/{course.slug}" style="text-decoration: none; display: block;" class="bm-title-underline-parent">
					<div style="background: #fff; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; height: 100%; transition: box-shadow 0.2s;" class="bm-card-hover">
						<!-- Image placeholder -->
						<div style="aspect-ratio: 16/9; background: linear-gradient(135deg, #e9e3da, #d4ccc0); display: flex; align-items: center; justify-content: center; position: relative;">
							<Play class="h-12 w-12" style="color: rgba(42,32,24,0.25);" />
							<span style="position: absolute; top: 12px; left: 12px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; color: {getDifficultyColor(course.difficulty)}; background: {getDifficultyBg(course.difficulty)}; padding: 3px 10px; border-radius: 999px;">{course.difficulty}</span>
						</div>

						<!-- Content -->
						<div style="padding: 20px; display: flex; flex-direction: column; flex: 1;">
							<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #c8b8a0;">{course.category}</span>

							<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 8px 0; line-height: 1.3;">
								{course.title}
							</h3>

							<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.55; margin: 0; flex: 1; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
								{course.description}
							</p>

							<div style="display: flex; align-items: center; justify-content: space-between; margin-top: 16px; font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70;">
								<span style="font-weight: 500; color: #2a2018;">{course.instructor}</span>
								<span style="display: flex; align-items: center; gap: 12px;">
									<span style="display: flex; align-items: center; gap: 4px;">
										<BookOpen class="h-3.5 w-3.5" />
										{course.lessonCount}
									</span>
									<span style="display: flex; align-items: center; gap: 4px;">
										<Clock class="h-3.5 w-3.5" />
										{course.duration}
									</span>
								</span>
							</div>

							{#if course.enrolled}
								<div style="border-top: 1px solid #e8e3da; padding-top: 12px; margin-top: 12px;">
									<div style="display: flex; align-items: center; justify-content: space-between; font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70;">
										<span style="display: flex; align-items: center; gap: 4px;">
											<Users class="h-3.5 w-3.5" />
											{course.enrolled.toLocaleString()} enrolled
										</span>
										{#if course.progress !== undefined}
											<span>{course.progress}% complete</span>
										{/if}
									</div>
									{#if course.progress !== undefined}
										<div style="width: 100%; height: 6px; background: #e8e3da; border-radius: 999px; margin-top: 8px; overflow: hidden;">
											<div style="width: {course.progress}%; height: 100%; background: #2a2018; border-radius: 999px; transition: width 0.3s;"></div>
										</div>
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
			<div style="text-align: center; padding: 64px 0;">
				<Search class="mx-auto h-12 w-12" style="color: rgba(138,126,112,0.3);" />
				<h3 style="font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 16px 0 8px;">No courses found</h3>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; margin: 0 0 20px;">
					Try adjusting your filters or search terms.
				</p>
				<button
					class="bm-btn-outline"
					style="padding: 10px 24px;"
					onclick={() => {
						selectedDifficulty = 'All';
						selectedCategory = 'All';
						searchQuery = '';
					}}
				>
					Clear Filters
				</button>
			</div>
		{/if}
	</div>
</section>
