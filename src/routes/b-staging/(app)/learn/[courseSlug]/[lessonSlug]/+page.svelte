<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import {
		ArrowLeft, Check, CheckCircle, ChevronLeft, ChevronRight, Circle,
		Download, FileText, HelpCircle, Info, Lightbulb, Menu, NotebookPen,
		PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen, Play, Video, X
	} from 'lucide-svelte';

	const p = (href: string) => withPrefix('/b-staging', href);

	let { data } = $props();
	let course = $derived(data.course);
	let modules = $derived(data.modules);
	let currentLesson = $derived(data.currentLesson);
	let currentModule = $derived(data.currentModule);
	let currentModuleIndex = $derived(data.currentModuleIndex);
	let currentLessonNumber = $derived(data.currentLessonNumber);
	let totalLessons = $derived(data.totalLessons);
	let completedCount = $derived(data.completedCount);
	let prevLesson = $derived(data.prevLesson);
	let nextLesson = $derived(data.nextLesson);

	let sidebarOpen = $state(true);
	let notesOpen = $state(false);
	let noteText = $state('');
	let mobileSidebarOpen = $state(false);
	let mobileNotesOpen = $state(false);

	const lessonIcons = { video: Video, reading: FileText, quiz: HelpCircle } as const;
	const progressPercent = $derived(totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0);

	const mockResources = [
		{ title: 'Lesson Transcript (PDF)', size: '245 KB' },
		{ title: 'Supplementary Reading', size: '1.2 MB' },
		{ title: 'Worksheet', size: '89 KB' }
	];

	let lessonContent = $derived({
		title: currentLesson.title,
		paragraphs: [
			`Welcome to this lesson on "${currentLesson.title}". In this section, we will explore the key concepts and build a solid understanding of the topic.`,
			'Islam is a comprehensive way of life that provides guidance for every aspect of human existence. The beauty of Islamic teachings lies in their ability to address both the spiritual and practical dimensions of life.',
			'As we progress, take your time to reflect on each concept. Learning about faith is not a race — it is a deeply personal journey that unfolds at its own pace.',
			'The concepts we cover here build upon one another, so it is worthwhile to revisit previous lessons if something feels unclear.'
		],
		tip: 'Take a moment to pause and reflect after reading each section. Journaling your thoughts can deepen your understanding.',
		keyTakeaways: [
			'Each concept builds on what came before — review earlier lessons if needed',
			'Practical application is just as important as theoretical understanding',
			'Take notes and reflect to deepen your learning experience'
		]
	});
</script>

<svelte:head>
	<title>{currentLesson.title} — {course.title} | Being Muslim</title>
</svelte:head>

<!-- Top Bar -->
<header class="fixed top-0 left-0 right-0 z-30 flex h-12 items-center bg-white/95 backdrop-blur">
	<div class="flex w-full items-center justify-between px-4">
		<div class="flex items-center gap-3 min-w-0">
			<a href={p(`/courses/${course.slug}`)} class="flex items-center gap-1.5 shrink-0 rounded-[10px] px-2 py-1.5 text-sm text-[#8E8E93] hover:bg-[#F2F2F7] hover:text-[#1C1C1E]">
				<ArrowLeft class="h-4 w-4" />
				<span class="hidden sm:inline">Back to Course</span>
			</a>
			<div class="hidden h-4 w-px bg-[#E5E5EA] sm:block"></div>
			<p class="hidden truncate text-sm font-medium text-[#1C1C1E] sm:block">{course.title}</p>
		</div>
		<div class="flex items-center gap-2 text-sm text-[#8E8E93]">
			<span class="hidden sm:inline">Lesson</span>
			<span class="font-medium text-[#1C1C1E]">{currentLessonNumber}</span>
			<span>of</span>
			<span class="font-medium text-[#1C1C1E]">{totalLessons}</span>
		</div>
		<div class="flex items-center gap-1">
			<button class="flex h-8 w-8 items-center justify-center rounded-[10px] text-[#8E8E93] hover:bg-[#F2F2F7] sm:hidden" onclick={() => (mobileSidebarOpen = !mobileSidebarOpen)} aria-label="Curriculum">
				<Menu class="h-5 w-5" />
			</button>
			<button class="hidden h-8 w-8 items-center justify-center rounded-[10px] text-[#8E8E93] hover:bg-[#F2F2F7] sm:flex" onclick={() => (sidebarOpen = !sidebarOpen)} aria-label="Sidebar">
				{#if sidebarOpen}<PanelLeftClose class="h-5 w-5" />{:else}<PanelLeftOpen class="h-5 w-5" />{/if}
			</button>
			<button class="flex h-8 w-8 items-center justify-center rounded-[10px] text-[#8E8E93] hover:bg-[#F2F2F7] sm:hidden" onclick={() => (mobileNotesOpen = !mobileNotesOpen)} aria-label="Notes">
				<NotebookPen class="h-5 w-5" />
			</button>
			<button class="hidden h-8 w-8 items-center justify-center rounded-[10px] text-[#8E8E93] hover:bg-[#F2F2F7] sm:flex" onclick={() => (notesOpen = !notesOpen)} aria-label="Notes">
				{#if notesOpen}<PanelRightClose class="h-5 w-5" />{:else}<PanelRightOpen class="h-5 w-5" />{/if}
			</button>
		</div>
	</div>
</header>

<!-- Main Layout -->
<div class="flex pt-12" style="height: 100vh;">
	<!-- Left Sidebar -->
	{#if sidebarOpen}
		<aside class="hidden w-[280px] shrink-0 flex-col overflow-hidden border-r border-[#E5E5EA] bg-white sm:flex">
			<div class="border-b border-[#F2F2F7] p-4">
				<div class="flex items-center justify-between text-sm">
					<span class="font-medium text-[#1C1C1E]">Course Progress</span>
					<span class="text-[#8E8E93]">{progressPercent}%</span>
				</div>
				<div class="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#F2F2F7]">
					<div class="h-full rounded-full bg-[#007AFF]" style="width: {progressPercent}%"></div>
				</div>
				<p class="mt-2 text-xs text-[#8E8E93]">{completedCount} of {totalLessons} lessons complete</p>
			</div>
			<nav class="flex-1 overflow-y-auto p-2">
				{#each modules as mod, mi}
					<div class="mb-1">
						<div class="rounded-[10px] px-3 py-2">
							<p class="text-xs font-semibold uppercase tracking-wider text-[#8E8E93]">Module {mi + 1}</p>
							<p class="mt-0.5 text-sm font-medium text-[#1C1C1E]">{mod.title}</p>
						</div>
						<ul class="mt-1 space-y-0.5">
							{#each mod.lessons as lesson}
								{@const isActive = lesson.slug === currentLesson.slug}
								<li>
									<a href={p(`/learn/${course.slug}/${lesson.slug}`)} class="flex items-center gap-2.5 rounded-[10px] px-3 py-2 text-sm {isActive ? 'bg-[#007AFF]/10 text-[#007AFF] font-medium' : lesson.completed ? 'text-[#8E8E93]' : 'text-[#1C1C1E] hover:bg-[#F2F2F7]'}">
										<div class="shrink-0">
											{#if lesson.completed}<CheckCircle class="h-4 w-4 text-[#30D158]" />{:else if isActive}<div class="flex h-4 w-4 items-center justify-center rounded-full bg-[#007AFF]"><Play class="h-2 w-2 text-white ml-px" /></div>{:else}<Circle class="h-4 w-4 text-[#E5E5EA]" />{/if}
										</div>
										<span class="flex-1 truncate text-xs">{lesson.title}</span>
										<span class="shrink-0 text-[10px] text-[#8E8E93]/70">{lesson.duration}</span>
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</nav>
		</aside>
	{/if}

	<!-- Center Content -->
	<main class="flex flex-1 flex-col overflow-y-auto bg-[#F2F2F7]">
		{#if currentLesson.type === 'video'}
			<div class="relative w-full bg-[#1C1C1E]">
				<div class="mx-auto aspect-video max-w-5xl">
					<div class="flex h-full items-center justify-center">
						<button class="group flex flex-col items-center gap-3" aria-label="Play video">
							<div class="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-all group-hover:scale-110 group-hover:bg-white/20">
								<Play class="h-10 w-10 text-white ml-1" />
							</div>
							<span class="text-sm text-white/50">Click to play</span>
						</button>
					</div>
					<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 p-4">
						<div class="mx-auto max-w-5xl">
							<div class="h-1 w-full overflow-hidden rounded-full bg-white/20">
								<div class="h-full w-1/3 rounded-full bg-[#007AFF]"></div>
							</div>
							<div class="mt-2 flex items-center justify-between text-xs text-white/60">
								<span>0:00</span><span>{currentLesson.duration}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}

		<div class="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-8">
			<!-- Lesson header tile -->
			<div class="rounded-[20px] bg-white p-6 sm:p-8">
				<div class="flex items-center gap-2 text-sm text-[#8E8E93]">
					<span class="rounded-full bg-[#F2F2F7] px-3 py-1 text-xs font-medium">{currentLesson.type === 'video' ? 'Video Lesson' : currentLesson.type === 'reading' ? 'Reading' : 'Quiz'}</span>
					<span>&middot;</span><span>{currentLesson.duration}</span>
					<span>&middot;</span><span>Module {currentModuleIndex + 1}: {currentModule.title}</span>
				</div>
				<h1 class="mt-4 font-display text-2xl font-bold text-[#1C1C1E] sm:text-3xl">{currentLesson.title}</h1>
			</div>

			<!-- Content tile -->
			<div class="mt-3 rounded-[20px] bg-white p-6 sm:p-8">
				{#each lessonContent.paragraphs as paragraph}
					<p class="mb-6 text-base leading-[1.8] text-[#8E8E93]">{paragraph}</p>
				{/each}

				<!-- Tip -->
				<div class="my-8 flex gap-4 rounded-[14px] bg-[#FF9F0A]/10 p-5">
					<Lightbulb class="mt-0.5 h-5 w-5 shrink-0 text-[#FF9F0A]" />
					<div>
						<p class="text-sm font-semibold text-[#FF9F0A]">Tip</p>
						<p class="mt-1 text-sm leading-relaxed text-[#8E8E93]">{lessonContent.tip}</p>
					</div>
				</div>

				<!-- Key Takeaways -->
				<div class="my-8 rounded-[14px] bg-[#F2F2F7] p-5">
					<h3 class="font-display text-base font-bold text-[#1C1C1E]">Key Takeaways</h3>
					<ul class="mt-4 space-y-3">
						{#each lessonContent.keyTakeaways as takeaway}
							<li class="flex items-start gap-3">
								<Check class="mt-0.5 h-4 w-4 shrink-0 text-[#30D158]" />
								<span class="text-sm leading-relaxed text-[#8E8E93]">{takeaway}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Going Deeper -->
				<div class="my-8 flex gap-4 rounded-[14px] bg-[#007AFF]/5 p-5">
					<Info class="mt-0.5 h-5 w-5 shrink-0 text-[#007AFF]" />
					<div>
						<p class="text-sm font-semibold text-[#007AFF]">Going Deeper</p>
						<p class="mt-1 text-sm leading-relaxed text-[#8E8E93]">For a more thorough exploration of this topic, check the supplementary reading material in the Resources panel.</p>
					</div>
				</div>
			</div>

			<!-- Mark as complete -->
			<div class="mt-4 rounded-[20px] bg-white p-6 text-center">
				{#if currentLesson.completed}
					<div class="inline-flex items-center gap-2 rounded-full bg-[#30D158]/10 px-6 py-3">
						<CheckCircle class="h-5 w-5 text-[#30D158]" />
						<span class="text-sm font-medium text-[#30D158]">Lesson Completed</span>
					</div>
				{:else}
					<button class="inline-flex items-center gap-2 rounded-[14px] bg-[#30D158] px-6 py-3 text-sm font-semibold text-white hover:opacity-90">
						<Check class="h-4 w-4" /> Mark as Complete
					</button>
				{/if}
			</div>

			<!-- Navigation -->
			<div class="mt-4 grid grid-cols-2 gap-3 pb-10">
				{#if prevLesson}
					<a href={p(`/learn/${course.slug}/${prevLesson.slug}`)} class="group flex items-center gap-3 rounded-[20px] bg-white p-5 transition-shadow hover:shadow-md">
						<ChevronLeft class="h-5 w-5 shrink-0 text-[#8E8E93] transition-transform group-hover:-translate-x-0.5" />
						<div class="min-w-0">
							<p class="text-xs text-[#8E8E93]">Previous</p>
							<p class="mt-0.5 truncate text-sm font-medium text-[#1C1C1E] group-hover:text-[#007AFF]">{prevLesson.title}</p>
						</div>
					</a>
				{:else}<div></div>{/if}
				{#if nextLesson}
					<a href={p(`/learn/${course.slug}/${nextLesson.slug}`)} class="group flex items-center justify-end gap-3 rounded-[20px] bg-white p-5 text-right transition-shadow hover:shadow-md">
						<div class="min-w-0">
							<p class="text-xs text-[#8E8E93]">Next</p>
							<p class="mt-0.5 truncate text-sm font-medium text-[#1C1C1E] group-hover:text-[#007AFF]">{nextLesson.title}</p>
						</div>
						<ChevronRight class="h-5 w-5 shrink-0 text-[#8E8E93] transition-transform group-hover:translate-x-0.5" />
					</a>
				{:else}<div></div>{/if}
			</div>
		</div>
	</main>

	<!-- Right Panel -->
	{#if notesOpen}
		<aside class="hidden w-[300px] shrink-0 flex-col overflow-hidden border-l border-[#E5E5EA] bg-white sm:flex">
			<div class="flex flex-1 flex-col border-b border-[#F2F2F7]">
				<div class="flex items-center gap-2 border-b border-[#F2F2F7] px-4 py-3">
					<NotebookPen class="h-4 w-4 text-[#007AFF]" />
					<h3 class="text-sm font-bold text-[#1C1C1E]">My Notes</h3>
				</div>
				<div class="flex-1 p-4">
					<textarea bind:value={noteText} placeholder="Write your notes for this lesson..." class="h-full min-h-[200px] w-full resize-none rounded-[14px] bg-[#F2F2F7] p-3 text-sm text-[#1C1C1E] placeholder:text-[#8E8E93]/50 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30"></textarea>
				</div>
				<div class="border-t border-[#F2F2F7] px-4 py-3">
					<button class="w-full rounded-[14px] bg-[#007AFF] py-2 text-sm font-semibold text-white hover:opacity-90">Save Notes</button>
				</div>
			</div>
			<div class="shrink-0">
				<div class="flex items-center gap-2 border-b border-[#F2F2F7] px-4 py-3">
					<Download class="h-4 w-4 text-[#8E8E93]" />
					<h3 class="text-sm font-bold text-[#1C1C1E]">Resources</h3>
				</div>
				<div class="p-4">
					<ul class="space-y-2">
						{#each mockResources as resource}
							<li>
								<button class="flex w-full items-center gap-3 rounded-[14px] bg-[#F2F2F7] px-3 py-2.5 text-left hover:bg-[#E5E5EA]">
									<FileText class="h-4 w-4 shrink-0 text-[#007AFF]" />
									<div class="min-w-0 flex-1">
										<p class="truncate text-xs font-medium text-[#1C1C1E]">{resource.title}</p>
										<p class="text-[10px] text-[#8E8E93]">{resource.size}</p>
									</div>
									<Download class="h-3.5 w-3.5 shrink-0 text-[#8E8E93]" />
								</button>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</aside>
	{/if}
</div>

<!-- Mobile Sidebar Drawer -->
{#if mobileSidebarOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="fixed inset-0 z-40 bg-black/40 sm:hidden" onclick={() => (mobileSidebarOpen = false)}>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="absolute inset-y-0 left-0 w-[300px] max-w-[85vw] bg-white shadow-xl" onclick={(e) => e.stopPropagation()}>
			<div class="flex items-center justify-between border-b border-[#F2F2F7] p-4">
				<h2 class="font-display text-base font-bold text-[#1C1C1E]">Course Content</h2>
				<button class="flex h-8 w-8 items-center justify-center rounded-[10px] text-[#8E8E93] hover:bg-[#F2F2F7]" onclick={() => (mobileSidebarOpen = false)} aria-label="Close"><X class="h-5 w-5" /></button>
			</div>
			<div class="border-b border-[#F2F2F7] p-4">
				<div class="flex items-center justify-between text-sm"><span class="text-[#8E8E93]">Progress</span><span class="font-medium text-[#1C1C1E]">{progressPercent}%</span></div>
				<div class="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#F2F2F7]"><div class="h-full rounded-full bg-[#007AFF]" style="width: {progressPercent}%"></div></div>
			</div>
			<nav class="overflow-y-auto p-2" style="max-height: calc(100vh - 140px);">
				{#each modules as mod, mi}
					<div class="mb-2">
						<div class="px-3 py-2">
							<p class="text-xs font-semibold uppercase tracking-wider text-[#8E8E93]">Module {mi + 1}</p>
							<p class="mt-0.5 text-sm font-medium text-[#1C1C1E]">{mod.title}</p>
						</div>
						<ul class="space-y-0.5">
							{#each mod.lessons as lesson}
								{@const isActive = lesson.slug === currentLesson.slug}
								<li>
									<a href={p(`/learn/${course.slug}/${lesson.slug}`)} class="flex items-center gap-2.5 rounded-[10px] px-3 py-2 text-sm {isActive ? 'bg-[#007AFF]/10 text-[#007AFF] font-medium' : lesson.completed ? 'text-[#8E8E93]' : 'text-[#1C1C1E]'}" onclick={() => (mobileSidebarOpen = false)}>
										<div class="shrink-0">
											{#if lesson.completed}<CheckCircle class="h-4 w-4 text-[#30D158]" />{:else if isActive}<div class="flex h-4 w-4 items-center justify-center rounded-full bg-[#007AFF]"><Play class="h-2 w-2 text-white ml-px" /></div>{:else}<Circle class="h-4 w-4 text-[#E5E5EA]" />{/if}
										</div>
										<span class="flex-1 truncate text-xs">{lesson.title}</span>
										<span class="text-[10px] text-[#8E8E93]/70">{lesson.duration}</span>
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

<!-- Mobile Notes Drawer -->
{#if mobileNotesOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="fixed inset-0 z-40 bg-black/40 sm:hidden" onclick={() => (mobileNotesOpen = false)}>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="absolute inset-y-0 right-0 flex w-[300px] max-w-[85vw] flex-col bg-white shadow-xl" onclick={(e) => e.stopPropagation()}>
			<div class="flex items-center justify-between border-b border-[#F2F2F7] p-4">
				<h2 class="font-display text-base font-bold text-[#1C1C1E]">Notes & Resources</h2>
				<button class="flex h-8 w-8 items-center justify-center rounded-[10px] text-[#8E8E93] hover:bg-[#F2F2F7]" onclick={() => (mobileNotesOpen = false)} aria-label="Close"><X class="h-5 w-5" /></button>
			</div>
			<div class="flex-1 p-4">
				<label class="mb-2 block text-sm font-medium text-[#1C1C1E]" for="mobile-notes">My Notes</label>
				<textarea id="mobile-notes" bind:value={noteText} placeholder="Write your notes..." rows="6" class="w-full rounded-[14px] bg-[#F2F2F7] p-3 text-sm text-[#1C1C1E] placeholder:text-[#8E8E93]/50 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30"></textarea>
				<button class="mt-3 w-full rounded-[14px] bg-[#007AFF] py-2 text-sm font-semibold text-white hover:opacity-90">Save Notes</button>
			</div>
			<div class="border-t border-[#F2F2F7] p-4">
				<h3 class="mb-3 flex items-center gap-2 text-sm font-bold text-[#1C1C1E]"><Download class="h-4 w-4 text-[#8E8E93]" /> Resources</h3>
				<ul class="space-y-2">
					{#each mockResources as resource}
						<li>
							<button class="flex w-full items-center gap-3 rounded-[14px] bg-[#F2F2F7] px-3 py-2.5 text-left hover:bg-[#E5E5EA]">
								<FileText class="h-4 w-4 shrink-0 text-[#007AFF]" />
								<div class="min-w-0 flex-1"><p class="truncate text-xs font-medium text-[#1C1C1E]">{resource.title}</p><p class="text-[10px] text-[#8E8E93]">{resource.size}</p></div>
								<Download class="h-3.5 w-3.5 shrink-0 text-[#8E8E93]" />
							</button>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
{/if}
