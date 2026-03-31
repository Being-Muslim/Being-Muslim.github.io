<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import {
		ArrowLeft,
		Check,
		CheckCircle,
		ChevronLeft,
		ChevronRight,
		Circle,
		Download,
		FileText,
		HelpCircle,
		Info,
		Lightbulb,
		Menu,
		NotebookPen,
		PanelLeftClose,
		PanelLeftOpen,
		PanelRightClose,
		PanelRightOpen,
		Play,
		Video,
		X
	} from 'lucide-svelte';

	let { data } = $props();
	let course = $derived(data.course);
	let modules = $derived(data.modules);
	let currentLesson = $derived(data.currentLesson);
	let currentModule = $derived(data.currentModule);
	let currentModuleIndex = $derived(data.currentModuleIndex);
	let currentLessonIndex = $derived(data.currentLessonIndex);
	let currentLessonNumber = $derived(data.currentLessonNumber);
	let totalLessons = $derived(data.totalLessons);
	let completedCount = $derived(data.completedCount);
	let prevLesson = $derived(data.prevLesson);
	let nextLesson = $derived(data.nextLesson);

	// UI state
	let sidebarOpen = $state(true);
	let notesOpen = $state(false);
	let noteText = $state('');

	// Mobile drawers
	let mobileSidebarOpen = $state(false);
	let mobileNotesOpen = $state(false);

	const lessonIcons = {
		video: Video,
		reading: FileText,
		quiz: HelpCircle
	} as const;

	const progressPercent = $derived(
		totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0
	);

	const mockResources = [
		{ title: 'Lesson Transcript (PDF)', size: '245 KB' },
		{ title: 'Supplementary Reading', size: '1.2 MB' },
		{ title: 'Worksheet', size: '89 KB' }
	];

	// Mock lesson content based on type
	let lessonContent = $derived({
		title: currentLesson.title,
		paragraphs: [
			`Welcome to this lesson on "${currentLesson.title}". In this section, we'll explore the key concepts and build a solid understanding of the topic at hand.`,
			'Islam is a comprehensive way of life that provides guidance for every aspect of human existence. The beauty of Islamic teachings lies in their ability to address both the spiritual and practical dimensions of life, making the faith accessible and relevant to people of all backgrounds.',
			'As we progress through this material, take your time to reflect on each concept. Learning about faith is not a race — it is a deeply personal journey that unfolds at its own pace. The Prophet Muhammad (peace be upon him) said: "Facilitate things for people and do not make things difficult."',
			'The concepts we cover here build upon one another, so it is worthwhile to revisit previous lessons if something feels unclear. Understanding the foundations well will make everything that follows more meaningful and easier to absorb.'
		],
		tip: 'Take a moment to pause and reflect after reading each section. Journaling your thoughts can deepen your understanding and help you internalize what you learn.',
		keyTakeaways: [
			'Each concept builds on what came before — review earlier lessons if needed',
			'Practical application is just as important as theoretical understanding',
			'Take notes and reflect to deepen your learning experience'
		]
	});
</script>

<svelte:head>
	<title>{currentLesson.title} - {course.title} | Being Muslim</title>
</svelte:head>

<!-- ======================== -->
<!-- TOP BAR                  -->
<!-- ======================== -->
<header class="fixed top-0 left-0 right-0 z-30 flex h-14 items-center border-b border-border bg-surface/95 backdrop-blur">
	<div class="flex w-full items-center justify-between px-4">
		<!-- Left: Back + Course title -->
		<div class="flex items-center gap-3 min-w-0">
			<a
				href="{base}/courses/{course.slug}"
				class="flex items-center gap-1.5 shrink-0 rounded-lg px-2 py-1.5 text-sm text-text-secondary transition-colors hover:bg-secondary hover:text-text-primary"
			>
				<ArrowLeft class="h-4 w-4" />
				<span class="hidden sm:inline">Back to Course</span>
			</a>
			<div class="hidden h-5 w-px bg-border sm:block"></div>
			<p class="truncate text-sm font-medium text-text-primary hidden sm:block">
				{course.title}
			</p>
		</div>

		<!-- Center: Lesson progress -->
		<div class="flex items-center gap-2 text-sm text-text-secondary">
			<span class="hidden sm:inline">Lesson</span>
			<span class="font-medium text-text-primary">{currentLessonNumber}</span>
			<span>of</span>
			<span class="font-medium text-text-primary">{totalLessons}</span>
		</div>

		<!-- Right: Panel toggles -->
		<div class="flex items-center gap-1">
			<!-- Mobile sidebar toggle -->
			<button
				class="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-secondary hover:text-text-primary sm:hidden"
				onclick={() => (mobileSidebarOpen = !mobileSidebarOpen)}
				aria-label="Toggle curriculum"
			>
				<Menu class="h-5 w-5" />
			</button>

			<!-- Desktop sidebar toggle -->
			<button
				class="hidden h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-secondary hover:text-text-primary sm:flex"
				onclick={() => (sidebarOpen = !sidebarOpen)}
				aria-label="Toggle sidebar"
			>
				{#if sidebarOpen}
					<PanelLeftClose class="h-5 w-5" />
				{:else}
					<PanelLeftOpen class="h-5 w-5" />
				{/if}
			</button>

			<!-- Mobile notes toggle -->
			<button
				class="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-secondary hover:text-text-primary sm:hidden"
				onclick={() => (mobileNotesOpen = !mobileNotesOpen)}
				aria-label="Toggle notes"
			>
				<NotebookPen class="h-5 w-5" />
			</button>

			<!-- Desktop notes toggle -->
			<button
				class="hidden h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-secondary hover:text-text-primary sm:flex"
				onclick={() => (notesOpen = !notesOpen)}
				aria-label="Toggle notes"
			>
				{#if notesOpen}
					<PanelRightClose class="h-5 w-5" />
				{:else}
					<PanelRightOpen class="h-5 w-5" />
				{/if}
			</button>
		</div>
	</div>
</header>

<!-- ======================== -->
<!-- MAIN LAYOUT              -->
<!-- ======================== -->
<div class="flex pt-14" style="height: 100vh;">
	<!-- ======================== -->
	<!-- LEFT SIDEBAR (Desktop)   -->
	<!-- ======================== -->
	{#if sidebarOpen}
		<aside class="hidden w-[280px] shrink-0 flex-col border-r border-border bg-surface sm:flex overflow-hidden">
			<!-- Progress header -->
			<div class="border-b border-border p-4">
				<div class="flex items-center justify-between text-sm">
					<span class="font-medium text-text-primary">Course Progress</span>
					<span class="text-text-secondary">{progressPercent}%</span>
				</div>
				<Progress value={progressPercent} class="mt-2 h-1.5" />
				<p class="mt-2 text-xs text-text-secondary">
					{completedCount} of {totalLessons} lessons complete
				</p>
			</div>

			<!-- Module/Lesson List -->
			<nav class="flex-1 overflow-y-auto p-2">
				{#each modules as mod, mi}
					<div class="mb-1">
						<!-- Module header -->
						<div class="rounded-lg px-3 py-2">
							<p class="text-xs font-semibold uppercase tracking-wider text-text-secondary">
								Module {mi + 1}
							</p>
							<p class="mt-0.5 text-sm font-medium text-text-primary">{mod.title}</p>
						</div>

						<!-- Lessons -->
						<ul class="mt-1 space-y-0.5">
							{#each mod.lessons as lesson}
								{@const isActive = lesson.slug === currentLesson.slug}
								{@const LessonIcon = lessonIcons[lesson.type]}
								<li>
									<a
										href="{base}/learn/{course.slug}/{lesson.slug}"
										class="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors {isActive
											? 'bg-accent-primary/10 text-accent-primary font-medium'
											: lesson.completed
												? 'text-text-secondary hover:bg-secondary/50'
												: 'text-text-primary hover:bg-secondary/50'}"
									>
										<!-- Status icon -->
										<div class="shrink-0">
											{#if lesson.completed}
												<CheckCircle class="h-4 w-4 text-accent-green" />
											{:else if isActive}
												<div class="flex h-4 w-4 items-center justify-center rounded-full bg-accent-primary">
													<Play class="h-2 w-2 text-white ml-px" />
												</div>
											{:else}
												<Circle class="h-4 w-4 text-border" />
											{/if}
										</div>

										<!-- Lesson title -->
										<span class="flex-1 truncate text-xs">{lesson.title}</span>

										<!-- Duration -->
										<span class="shrink-0 text-[10px] text-text-secondary/70">
											{lesson.duration}
										</span>
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</nav>
		</aside>
	{/if}

	<!-- ======================== -->
	<!-- CENTER CONTENT            -->
	<!-- ======================== -->
	<main class="flex flex-1 flex-col overflow-y-auto">
		<!-- Video Player Placeholder -->
		{#if currentLesson.type === 'video'}
			<div class="relative w-full bg-bg-dark">
				<div class="mx-auto aspect-video max-w-5xl">
					<div class="flex h-full items-center justify-center">
						<button
							class="group flex flex-col items-center gap-3"
							aria-label="Play video"
						>
							<div class="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-all group-hover:scale-110 group-hover:bg-white/20">
								<Play class="h-10 w-10 text-text-cream ml-1" />
							</div>
							<span class="text-sm text-text-cream/60">Click to play</span>
						</button>
					</div>
					<!-- Video controls bar -->
					<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
						<div class="mx-auto max-w-5xl">
							<div class="h-1 w-full overflow-hidden rounded-full bg-white/20">
								<div class="h-full w-1/3 rounded-full bg-accent-primary"></div>
							</div>
							<div class="mt-2 flex items-center justify-between text-xs text-white/70">
								<span>0:00</span>
								<span>{currentLesson.duration}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}

		<!-- Lesson Content -->
		<div class="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-8">
			<!-- Lesson header -->
			<div class="mb-8">
				<div class="flex items-center gap-2 text-sm text-text-secondary">
					<Badge variant={currentLesson.type === 'video' ? 'secondary' : currentLesson.type === 'reading' ? 'gold' : 'green'}>
						{#snippet children()}
							{currentLesson.type === 'video' ? 'Video Lesson' : currentLesson.type === 'reading' ? 'Reading' : 'Quiz'}
						{/snippet}
					</Badge>
					<span>&middot;</span>
					<span>{currentLesson.duration}</span>
					<span>&middot;</span>
					<span>Module {currentModuleIndex + 1}: {currentModule.title}</span>
				</div>
				<h1 class="mt-3 font-display text-2xl font-bold text-text-primary sm:text-3xl">
					{currentLesson.title}
				</h1>
			</div>

			<!-- Rich text content -->
			<div class="prose prose-neutral max-w-none">
				{#each lessonContent.paragraphs as paragraph}
					<p class="mb-5 text-base leading-relaxed text-text-secondary">{paragraph}</p>
				{/each}

				<!-- Tip callout -->
				<div class="my-8 flex gap-4 rounded-xl border border-accent-gold/20 bg-accent-gold/5 p-5">
					<Lightbulb class="mt-0.5 h-5 w-5 shrink-0 text-accent-gold" />
					<div>
						<p class="text-sm font-semibold text-accent-gold">Tip</p>
						<p class="mt-1 text-sm leading-relaxed text-text-secondary">{lessonContent.tip}</p>
					</div>
				</div>

				<!-- Key takeaways -->
				<div class="my-8 rounded-xl border border-border bg-secondary/30 p-6">
					<h3 class="font-display text-base font-semibold text-text-primary">Key Takeaways</h3>
					<ul class="mt-4 space-y-3">
						{#each lessonContent.keyTakeaways as takeaway}
							<li class="flex items-start gap-3">
								<Check class="mt-0.5 h-4 w-4 shrink-0 text-accent-green" />
								<span class="text-sm leading-relaxed text-text-secondary">{takeaway}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Info box -->
				<div class="my-8 flex gap-4 rounded-xl border border-accent-primary/20 bg-accent-primary/5 p-5">
					<Info class="mt-0.5 h-5 w-5 shrink-0 text-accent-primary" />
					<div>
						<p class="text-sm font-semibold text-accent-primary">Going Deeper</p>
						<p class="mt-1 text-sm leading-relaxed text-text-secondary">
							For a more thorough exploration of this topic, check the supplementary reading material
							in the Resources panel. You can also discuss this lesson with fellow students in the
							community forum.
						</p>
					</div>
				</div>
			</div>

			<!-- Mark as complete -->
			<div class="mt-8 flex items-center justify-center border-t border-border pt-8">
				{#if currentLesson.completed}
					<div class="flex items-center gap-2 rounded-xl bg-accent-green/10 px-6 py-3">
						<CheckCircle class="h-5 w-5 text-accent-green" />
						<span class="text-sm font-medium text-accent-green">Lesson Completed</span>
					</div>
				{:else}
					<Button class="bg-accent-green text-white hover:bg-accent-green/90">
						{#snippet children()}
							<Check class="mr-1 h-4 w-4" />
							Mark as Complete
						{/snippet}
					</Button>
				{/if}
			</div>

			<!-- Previous / Next Navigation -->
			<div class="mt-8 flex items-stretch gap-4 border-t border-border pt-8 pb-8">
				{#if prevLesson}
					<a
						href="{base}/learn/{course.slug}/{prevLesson.slug}"
						class="group flex flex-1 items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent-primary/30 hover:shadow-sm"
					>
						<ChevronLeft class="h-5 w-5 shrink-0 text-text-secondary transition-transform group-hover:-translate-x-0.5" />
						<div class="min-w-0">
							<p class="text-xs text-text-secondary">Previous</p>
							<p class="mt-0.5 truncate text-sm font-medium text-text-primary group-hover:text-accent-primary">
								{prevLesson.title}
							</p>
						</div>
					</a>
				{:else}
					<div class="flex-1"></div>
				{/if}

				{#if nextLesson}
					<a
						href="{base}/learn/{course.slug}/{nextLesson.slug}"
						class="group flex flex-1 items-center justify-end gap-3 rounded-xl border border-border bg-surface p-4 text-right transition-all hover:border-accent-primary/30 hover:shadow-sm"
					>
						<div class="min-w-0">
							<p class="text-xs text-text-secondary">Next</p>
							<p class="mt-0.5 truncate text-sm font-medium text-text-primary group-hover:text-accent-primary">
								{nextLesson.title}
							</p>
						</div>
						<ChevronRight class="h-5 w-5 shrink-0 text-text-secondary transition-transform group-hover:translate-x-0.5" />
					</a>
				{:else}
					<div class="flex-1"></div>
				{/if}
			</div>
		</div>
	</main>

	<!-- ======================== -->
	<!-- RIGHT PANEL (Desktop)    -->
	<!-- ======================== -->
	{#if notesOpen}
		<aside class="hidden w-[300px] shrink-0 flex-col border-l border-border bg-surface sm:flex overflow-hidden">
			<!-- Notes section -->
			<div class="flex flex-1 flex-col border-b border-border">
				<div class="flex items-center justify-between border-b border-border px-4 py-3">
					<h3 class="flex items-center gap-2 text-sm font-semibold text-text-primary">
						<NotebookPen class="h-4 w-4" />
						My Notes
					</h3>
				</div>
				<div class="flex-1 p-4">
					<textarea
						bind:value={noteText}
						placeholder="Write your notes for this lesson..."
						class="h-full min-h-[200px] w-full resize-none rounded-lg border border-border bg-bg-primary p-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
					></textarea>
				</div>
				<div class="border-t border-border px-4 py-3">
					<Button size="sm" class="w-full">
						{#snippet children()}Save Notes{/snippet}
					</Button>
				</div>
			</div>

			<!-- Resources section -->
			<div class="shrink-0">
				<div class="flex items-center gap-2 border-b border-border px-4 py-3">
					<Download class="h-4 w-4 text-text-secondary" />
					<h3 class="text-sm font-semibold text-text-primary">Resources</h3>
				</div>
				<div class="p-4">
					<ul class="space-y-2">
						{#each mockResources as resource}
							<li>
								<button class="flex w-full items-center gap-3 rounded-lg border border-border bg-bg-primary px-3 py-2.5 text-left transition-colors hover:border-accent-primary/30 hover:bg-secondary/30">
									<FileText class="h-4 w-4 shrink-0 text-accent-primary" />
									<div class="min-w-0 flex-1">
										<p class="truncate text-xs font-medium text-text-primary">
											{resource.title}
										</p>
										<p class="text-[10px] text-text-secondary">{resource.size}</p>
									</div>
									<Download class="h-3.5 w-3.5 shrink-0 text-text-secondary" />
								</button>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</aside>
	{/if}
</div>

<!-- ======================== -->
<!-- MOBILE SIDEBAR DRAWER    -->
<!-- ======================== -->
{#if mobileSidebarOpen}
	<!-- Backdrop -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-40 bg-black/50 sm:hidden"
		onclick={() => (mobileSidebarOpen = false)}
	>
		<!-- Drawer -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="absolute inset-y-0 left-0 w-[300px] max-w-[85vw] bg-surface shadow-xl"
			onclick={(e) => e.stopPropagation()}
		>
			<!-- Drawer header -->
			<div class="flex items-center justify-between border-b border-border p-4">
				<h2 class="font-display text-base font-semibold">Course Content</h2>
				<button
					class="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary hover:bg-secondary"
					onclick={() => (mobileSidebarOpen = false)}
					aria-label="Close sidebar"
				>
					<X class="h-5 w-5" />
				</button>
			</div>

			<!-- Progress -->
			<div class="border-b border-border p-4">
				<div class="flex items-center justify-between text-sm">
					<span class="text-text-secondary">Progress</span>
					<span class="font-medium">{progressPercent}%</span>
				</div>
				<Progress value={progressPercent} class="mt-2 h-1.5" />
				<p class="mt-1.5 text-xs text-text-secondary">
					{completedCount} of {totalLessons} complete
				</p>
			</div>

			<!-- Module/Lesson List -->
			<nav class="overflow-y-auto p-2" style="max-height: calc(100vh - 140px);">
				{#each modules as mod, mi}
					<div class="mb-2">
						<div class="px-3 py-2">
							<p class="text-xs font-semibold uppercase tracking-wider text-text-secondary">
								Module {mi + 1}
							</p>
							<p class="mt-0.5 text-sm font-medium">{mod.title}</p>
						</div>
						<ul class="space-y-0.5">
							{#each mod.lessons as lesson}
								{@const isActive = lesson.slug === currentLesson.slug}
								<li>
									<a
										href="{base}/learn/{course.slug}/{lesson.slug}"
										class="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm {isActive
											? 'bg-accent-primary/10 text-accent-primary font-medium'
											: lesson.completed
												? 'text-text-secondary'
												: 'text-text-primary'}"
										onclick={() => (mobileSidebarOpen = false)}
									>
										<div class="shrink-0">
											{#if lesson.completed}
												<CheckCircle class="h-4 w-4 text-accent-green" />
											{:else if isActive}
												<div class="flex h-4 w-4 items-center justify-center rounded-full bg-accent-primary">
													<Play class="h-2 w-2 text-white ml-px" />
												</div>
											{:else}
												<Circle class="h-4 w-4 text-border" />
											{/if}
										</div>
										<span class="flex-1 truncate text-xs">{lesson.title}</span>
										<span class="text-[10px] text-text-secondary/70">{lesson.duration}</span>
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</nav>
		</div>
	</div>
{/if}

<!-- ======================== -->
<!-- MOBILE NOTES DRAWER      -->
<!-- ======================== -->
{#if mobileNotesOpen}
	<!-- Backdrop -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-40 bg-black/50 sm:hidden"
		onclick={() => (mobileNotesOpen = false)}
	>
		<!-- Drawer -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="absolute inset-y-0 right-0 flex w-[300px] max-w-[85vw] flex-col bg-surface shadow-xl"
			onclick={(e) => e.stopPropagation()}
		>
			<!-- Drawer header -->
			<div class="flex items-center justify-between border-b border-border p-4">
				<h2 class="font-display text-base font-semibold">Notes & Resources</h2>
				<button
					class="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary hover:bg-secondary"
					onclick={() => (mobileNotesOpen = false)}
					aria-label="Close notes"
				>
					<X class="h-5 w-5" />
				</button>
			</div>

			<!-- Notes -->
			<div class="flex-1 p-4">
				<label class="mb-2 block text-sm font-medium text-text-primary" for="mobile-notes">
					My Notes
				</label>
				<textarea
					id="mobile-notes"
					bind:value={noteText}
					placeholder="Write your notes..."
					class="h-40 w-full resize-none rounded-lg border border-border bg-bg-primary p-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
				></textarea>
				<Button size="sm" class="mt-3 w-full">
					{#snippet children()}Save Notes{/snippet}
				</Button>
			</div>

			<!-- Resources -->
			<div class="border-t border-border p-4">
				<h3 class="mb-3 flex items-center gap-2 text-sm font-semibold">
					<Download class="h-4 w-4 text-text-secondary" />
					Resources
				</h3>
				<ul class="space-y-2">
					{#each mockResources as resource}
						<li>
							<button class="flex w-full items-center gap-3 rounded-lg border border-border bg-bg-primary px-3 py-2.5 text-left transition-colors hover:bg-secondary/30">
								<FileText class="h-4 w-4 shrink-0 text-accent-primary" />
								<div class="min-w-0 flex-1">
									<p class="truncate text-xs font-medium">{resource.title}</p>
									<p class="text-[10px] text-text-secondary">{resource.size}</p>
								</div>
								<Download class="h-3.5 w-3.5 shrink-0 text-text-secondary" />
							</button>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
{/if}
