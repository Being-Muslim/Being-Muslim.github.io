<script lang="ts">
	import { withPrefix } from '$lib/data/utils';
	import {
		ArrowLeft,
		ArrowRight,
		ChevronDown,
		Play,
		FileText,
		HelpCircle,
		CheckCircle2,
		Menu,
		X
	} from 'lucide-svelte';

	const p = (href: string) => withPrefix('/a-staging', href);

	let { data } = $props();
	const {
		course,
		modules,
		currentLesson,
		currentModule,
		currentModuleIndex,
		currentLessonIndex,
		currentLessonNumber,
		totalLessons,
		completedCount,
		prevLesson,
		nextLesson
	} = data;

	let sidebarOpen = $state(false);
	let expandedModules = $state<Set<number>>(new Set([currentModuleIndex]));

	function toggleModule(index: number) {
		const next = new Set(expandedModules);
		if (next.has(index)) {
			next.delete(index);
		} else {
			next.add(index);
		}
		expandedModules = next;
	}

	const lessonIcon = (type: string) => {
		if (type === 'video') return Play;
		if (type === 'reading') return FileText;
		return HelpCircle;
	};

	const progress = Math.round((completedCount / totalLessons) * 100);
</script>

<svelte:head>
	<title>{currentLesson.title} - {course.title} - Being Muslim</title>
</svelte:head>

<div class="flex h-screen flex-col">
	<!-- Top Bar -->
	<header class="flex h-14 shrink-0 items-center justify-between border-b-[3px] border-border bg-bg-primary px-4">
		<div class="flex items-center gap-4">
			<a
				href={p('/courses/' + course.slug)}
				class="group flex items-center gap-2 font-display font-bold text-text-secondary transition-colors hover:text-accent-primary"
			>
				<ArrowLeft class="h-4 w-4 transition-transform group-hover:-translate-x-1" />
				<span class="hidden sm:inline">{course.title}</span>
			</a>
		</div>
		<div class="flex items-center gap-4">
			<span class="mono text-text-secondary">
				LESSON {currentLessonNumber} OF {totalLessons}
			</span>
			<div class="hidden h-3 w-32 border-[3px] border-border sm:block">
				<div class="h-full bg-accent-primary" style="width: {progress}%"></div>
			</div>
			<button
				class="flex h-10 w-10 items-center justify-center border-[3px] border-border text-text-secondary transition-colors hover:bg-accent-gold/20 lg:hidden"
				onclick={() => (sidebarOpen = !sidebarOpen)}
				aria-label="Toggle sidebar"
			>
				{#if sidebarOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</button>
		</div>
	</header>

	<div class="flex min-h-0 flex-1">
		<!-- Main Content -->
		<div class="flex min-w-0 flex-1 flex-col overflow-y-auto">
			<!-- Video / Content Area -->
			{#if currentLesson.type === 'video'}
				<div class="flex aspect-video items-center justify-center border-b-[3px] border-border bg-text-primary">
					<div class="text-center">
						<div class="mx-auto flex h-20 w-20 items-center justify-center border-[3px] border-white/30">
							<Play class="h-10 w-10 text-white/50" />
						</div>
						<p class="mono mt-4 text-white/60">VIDEO: {currentLesson.title.toUpperCase()}</p>
						<p class="mono text-white/40">{currentLesson.duration}</p>
					</div>
				</div>
			{:else if currentLesson.type === 'reading'}
				<div class="flex items-center justify-center border-b-[3px] border-border bg-accent-gold/10 p-12">
					<div class="text-center">
						<div class="mx-auto flex h-20 w-20 items-center justify-center border-[3px] border-border">
							<FileText class="h-10 w-10 text-text-secondary/30" />
						</div>
						<p class="mono mt-4 text-text-secondary">READING: {currentLesson.title.toUpperCase()}</p>
					</div>
				</div>
			{:else}
				<div class="flex items-center justify-center border-b-[3px] border-border bg-accent-primary/5 p-12">
					<div class="text-center">
						<div class="mx-auto flex h-20 w-20 items-center justify-center border-[3px] border-border">
							<HelpCircle class="h-10 w-10 text-text-secondary/30" />
						</div>
						<p class="mono mt-4 text-text-secondary">QUIZ: {currentLesson.title.toUpperCase()}</p>
					</div>
				</div>
			{/if}

			<!-- Lesson Details -->
			<div class="p-6 sm:p-8">
				<div class="mx-auto max-w-3xl">
					<div class="flex items-center gap-3">
						<span class="border-[3px] border-border px-3 py-1 text-xs font-bold">
							{currentModule.title}
						</span>
						<span class="mono text-text-secondary">
							LESSON {currentLessonNumber} OF {totalLessons}
						</span>
					</div>
					<h1 class="mt-4 font-display text-3xl font-bold">
						{currentLesson.title}
					</h1>

					<!-- Lesson Content (mock) -->
					<div class="mt-6 border-l-[3px] border-border pl-6 text-text-secondary">
						<p class="mb-4">
							This lesson covers the essential concepts related to {currentLesson.title.toLowerCase()}.
							Take your time to absorb the material and do not hesitate to revisit previous lessons
							if needed.
						</p>
						<p class="mb-4">
							As you progress through this module, you will build upon the knowledge from
							earlier lessons. Each concept connects to the next, creating a comprehensive
							understanding of the topic.
						</p>
						<p>
							After completing this lesson, you will be well-prepared for the next step in
							your learning journey. Remember, consistent practice is more valuable than
							rushing through the content.
						</p>
					</div>

					<!-- Mark Complete -->
					<div class="mt-8">
						<button
							class="border-[3px] border-border bg-accent-primary px-6 py-3 font-bold text-white transition-colors hover:bg-red-700"
						>
							{currentLesson.completed ? 'Completed' : 'Mark as Complete'}
						</button>
					</div>

					<!-- Navigation -->
					<div class="mt-8 flex items-center justify-between border-t-[3px] border-border pt-6">
						{#if prevLesson}
							<a
								href={p('/learn/' + course.slug + '/' + prevLesson.slug)}
								class="group flex items-center gap-2 font-display font-bold text-text-secondary transition-colors hover:text-accent-primary"
							>
								<ArrowLeft class="h-4 w-4 transition-transform group-hover:-translate-x-1" />
								<span class="hidden sm:inline">{prevLesson.title}</span>
								<span class="sm:hidden">Previous</span>
							</a>
						{:else}
							<div></div>
						{/if}
						{#if nextLesson}
							<a
								href={p('/learn/' + course.slug + '/' + nextLesson.slug)}
								class="group flex items-center gap-2 font-display font-bold text-accent-primary transition-colors hover:text-red-700"
							>
								<span class="hidden sm:inline">{nextLesson.title}</span>
								<span class="sm:hidden">Next</span>
								<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
							</a>
						{:else}
							<a
								href={p('/courses/' + course.slug)}
								class="group flex items-center gap-2 font-display font-bold text-accent-primary transition-colors hover:text-red-700"
							>
								Finish Course
								<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
							</a>
						{/if}
					</div>
				</div>
			</div>
		</div>

		<!-- Sidebar -->
		<aside
			class="w-80 shrink-0 overflow-y-auto border-l-[3px] border-border bg-bg-primary {sidebarOpen
				? 'fixed inset-y-14 right-0 z-40 shadow-lg'
				: 'hidden lg:block'}"
		>
			<!-- Course Title + Progress -->
			<div class="border-b-[3px] border-border px-4 py-4">
				<h3 class="font-display font-bold">{course.title}</h3>
				<div class="mt-2 flex items-center gap-3">
					<div class="h-3 flex-1 border-[3px] border-border">
						<div class="h-full bg-accent-primary" style="width: {progress}%"></div>
					</div>
					<span class="mono text-text-secondary">{progress}%</span>
				</div>
			</div>

			<!-- Modules -->
			<div class="flex flex-col">
				{#each modules as mod, mi}
					<div class="border-b-[3px] border-border last:border-b-0">
						<button
							onclick={() => toggleModule(mi)}
							class="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-accent-gold/10"
						>
							<span class="font-display text-sm font-bold">{mod.title}</span>
							<ChevronDown
								class="h-4 w-4 text-text-secondary transition-transform {expandedModules.has(mi) ? 'rotate-180' : ''}"
							/>
						</button>

						{#if expandedModules.has(mi)}
							<div class="border-t-[3px] border-border">
								{#each mod.lessons as lesson}
									{@const LessonIcon = lessonIcon(lesson.type)}
									{@const isCurrent = lesson.slug === currentLesson.slug}
									<a
										href={p('/learn/' + course.slug + '/' + lesson.slug)}
										class="flex items-center gap-3 border-b-[3px] border-border px-4 py-3 text-left transition-colors last:border-b-0 {isCurrent
											? 'border-l-[4px] border-l-accent-primary bg-accent-gold/10'
											: 'hover:bg-accent-gold/5'}"
									>
										{#if lesson.completed}
											<CheckCircle2 class="h-4 w-4 shrink-0 text-accent-green" />
										{:else}
											<LessonIcon
												class="h-4 w-4 shrink-0 {isCurrent
													? 'text-accent-primary'
													: 'text-text-secondary'}"
											/>
										{/if}
										<span
											class="flex-1 truncate text-sm {isCurrent
												? 'font-bold text-accent-primary'
												: lesson.completed
													? 'text-text-secondary line-through'
													: 'text-text-primary'}"
										>
											{lesson.title}
										</span>
										<span class="mono shrink-0 text-text-secondary">{lesson.duration}</span>
									</a>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</aside>
	</div>
</div>
