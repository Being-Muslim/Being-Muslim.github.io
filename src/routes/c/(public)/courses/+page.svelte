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
				return '#6b8f5e';
			case 'Intermediate':
				return '#c8b8a0';
			case 'Advanced':
				return '#b85c4f';
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
<section style="background: #2a2018; padding: 100px 0 80px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 560px;">
			<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #c8b8a0; text-transform: uppercase; letter-spacing: 1.5px;">Structured Learning</span>
			<h1 style="font-family: 'Source Serif 4', serif; font-size: clamp(36px, 5vw, 52px); font-weight: 400; line-height: 1.1; color: #faf9f5; margin: 20px 0 0;">Courses</h1>
			<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.65; color: rgba(250,249,245,0.6); margin: 16px 0 0;">
				Comprehensive, self-paced courses designed by scholars and educators. Learn the foundations
				of Islam, deepen your prayer, explore the Quran, and more.
			</p>
		</div>
	</div>
</section>

<!-- Featured Course -->
{#if featuredCourse}
	<section style="background: #faf9f5; padding: 0;">
		<div class="mx-auto max-w-[1400px] px-6 lg:px-10" style="margin-top: -32px; position: relative; z-index: 10;">
			<a href="/c/courses/{featuredCourse.slug}" style="text-decoration: none; display: block;" class="bm-title-underline-parent">
				<div class="bm-card-hover" style="background: #e2dcd2; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.08);">
					<div class="bm-grid-course-detail">
						<!-- Image area -->
						<div style="position: relative; background: linear-gradient(135deg, rgba(200,184,160,0.4), rgba(226,220,210,0.6)); min-height: 280px; display: flex; align-items: center; justify-content: center;">
							<Play class="h-14 w-14" style="color: rgba(138,126,112,0.35);" />
							<span style="position: absolute; top: 16px; left: 16px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; color: #2a2018; background: #fff; padding: 4px 12px; border-radius: 999px;">Featured Course</span>
						</div>

						<!-- Content -->
						<div style="padding: 36px 40px; display: flex; flex-direction: column; justify-content: center;">
							<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
								<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: {getDifficultyColor(featuredCourse.difficulty)}; background: rgba(250,249,245,0.6); padding: 3px 12px; border-radius: 999px;">{featuredCourse.difficulty}</span>
								<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70;">{featuredCourse.category}</span>
							</div>
							<h2 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: clamp(22px, 3vw, 28px); font-weight: 400; color: #2a2018; margin: 0 0 12px; line-height: 1.25;">
								{featuredCourse.title}
							</h2>
							<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; line-height: 1.6; color: #8a7e70; margin: 0 0 20px;">{featuredCourse.description}</p>

							<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 20px; font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70;">
								<span style="display: flex; align-items: center; gap: 6px;">
									<BookOpen class="h-4 w-4" />
									{featuredCourse.lessonCount} lessons
								</span>
								<span style="display: flex; align-items: center; gap: 6px;">
									<Clock class="h-4 w-4" />
									{featuredCourse.duration}
								</span>
								{#if featuredCourse.enrolled}
									<span style="display: flex; align-items: center; gap: 6px;">
										<Users class="h-4 w-4" />
										{featuredCourse.enrolled.toLocaleString()} enrolled
									</span>
								{/if}
							</div>

							<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin: 16px 0 0;">
								by {featuredCourse.instructor}
							</p>

							<div style="margin-top: 20px;">
								<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: inline-flex; align-items: center; gap: 6px;">
									Start Learning <ArrowRight class="h-4 w-4" />
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
<section class="bm-section-padding" style="background: #faf9f5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<!-- Search & Filters -->
		<div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px;">
			<!-- Search -->
			<div style="position: relative; max-width: 320px; flex: 1;">
				<Search class="h-4 w-4" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #8a7e70;" />
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search courses..."
					style="font-family: 'DM Sans', sans-serif; width: 100%; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; padding: 10px 16px 10px 36px; font-size: 13px; color: #2a2018; outline: none;"
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
							style="font-family: 'DM Sans', sans-serif; border-radius: 8px; padding: 6px 14px; font-size: 12px; font-weight: 500; border: none; cursor: pointer; transition: all 0.2s; background: {selectedDifficulty === diff ? '#2a2018' : 'transparent'}; color: {selectedDifficulty === diff ? '#faf9f5' : '#8a7e70'};"
							onclick={() => (selectedDifficulty = diff)}
						>
							{diff}
						</button>
					{/each}
				</div>

				<!-- Category -->
				<select
					bind:value={selectedCategory}
					style="font-family: 'DM Sans', sans-serif; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; padding: 8px 14px; font-size: 12px; font-weight: 500; color: #2a2018; outline: none; cursor: pointer;"
				>
					{#each categories as cat}
						<option value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Results count -->
		<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; margin: 20px 0 0;">
			{filteredCourses.length}
			{filteredCourses.length === 1 ? 'course' : 'courses'} found
		</p>

		<!-- Course Grid -->
		<div class="bm-grid-3" style="gap: 24px; margin-top: 24px;">
			{#each filteredCourses as course (course.slug)}
				<a href="/c/courses/{course.slug}" style="text-decoration: none; display: block;" class="bm-title-underline-parent">
					<div class="bm-card-hover" style="display: flex; flex-direction: column; height: 100%; border-radius: 14px; overflow: hidden; background: #e2dcd2;">
						<!-- Image placeholder -->
						<div style="position: relative; aspect-ratio: 16/9; background: linear-gradient(135deg, rgba(200,184,160,0.4), rgba(226,220,210,0.6)); display: flex; align-items: center; justify-content: center;">
							<Play class="h-10 w-10" style="color: rgba(138,126,112,0.35);" />
							<span style="position: absolute; top: 12px; left: 12px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; color: {getDifficultyColor(course.difficulty)}; background: rgba(250,249,245,0.85); padding: 3px 10px; border-radius: 999px;">{course.difficulty}</span>
						</div>

						<!-- Content -->
						<div style="flex: 1; display: flex; flex-direction: column; padding: 20px;">
							<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #c8b8a0;">{course.category}</span>

							<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 17px; font-weight: 400; color: #2a2018; margin: 8px 0 0; line-height: 1.35;">
								{course.title}
							</h3>

							<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; line-height: 1.55; color: #8a7e70; margin: 10px 0 0; flex: 1; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
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
								<div style="border-top: 1px solid rgba(200,184,160,0.3); padding-top: 12px; margin-top: 12px;">
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
										<div style="width: 100%; height: 6px; border-radius: 999px; background: rgba(200,184,160,0.3); margin-top: 8px; overflow: hidden;">
											<div style="height: 100%; border-radius: 999px; background: #2a2018; width: {course.progress}%; transition: width 0.3s;"></div>
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
				<Search class="h-12 w-12" style="color: rgba(138,126,112,0.3); margin: 0 auto 16px;" />
				<h3 style="font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 0 0 8px;">No courses found</h3>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; margin: 0 0 24px;">
					Try adjusting your filters or search terms.
				</p>
				<button
					class="bm-btn-outline"
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
