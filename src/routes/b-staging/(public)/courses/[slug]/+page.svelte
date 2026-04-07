<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import type { Course, Module } from '$lib/data/mock.js';
	import {
		ArrowRight,
		BookOpen,
		Check,
		CheckCircle,
		ChevronDown,
		ChevronUp,
		Circle,
		Clock,
		FileText,
		GraduationCap,
		HelpCircle,
		MessageSquare,
		Play,
		Star,
		Trophy,
		Users,
		Video
	} from 'lucide-svelte';

	let { data } = $props();
	let course = $derived(data.course);
	let modules = $derived(data.modules);
	let testimonials = $derived(data.testimonials);

	// Expandable module state
	let expandedModules = $state<Set<number>>(new Set([0]));

	function toggleModule(index: number) {
		const newSet = new Set(expandedModules);
		if (newSet.has(index)) {
			newSet.delete(index);
		} else {
			newSet.add(index);
		}
		expandedModules = newSet;
	}

	function getModuleDuration(mod: Module): string {
		let totalMinutes = 0;
		for (const lesson of mod.lessons) {
			const parts = lesson.duration.split(':');
			totalMinutes += parseInt(parts[0]) + (parseInt(parts[1]) || 0) / 60;
		}
		return `${Math.round(totalMinutes)} min`;
	}

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

	const lessonIcons = {
		video: Video,
		reading: FileText,
		quiz: HelpCircle
	} as const;

	const totalLessons = $derived(modules.reduce((sum, m) => sum + m.lessons.length, 0));
	const completedLessons = $derived(
		modules.reduce((sum, m) => sum + m.lessons.filter((l) => l.completed).length, 0)
	);

	const learningPoints = [
		'Understand the core beliefs and practices of Islam',
		'Build a consistent and meaningful prayer routine',
		'Navigate daily life with confidence as a Muslim',
		'Connect with a supportive community of fellow learners',
		'Develop a deeper relationship with the Quran',
		'Learn practical guidance for modern challenges'
	];

	const faqs = [
		{
			question: 'Do I need any prior knowledge to take this course?',
			answer:
				'Not at all. This course is designed for absolute beginners. We start from the very basics and build up gradually, so you can learn at your own pace without feeling overwhelmed.'
		},
		{
			question: 'How long do I have access to the course?',
			answer:
				'Once you enroll, you have lifetime access to all course materials. You can revisit any lesson as many times as you need, and you will also receive access to any future updates we make to the content.'
		},
		{
			question: 'Is there a certificate upon completion?',
			answer:
				'Yes! When you complete all modules and pass the quizzes, you will receive a certificate of completion that you can download and share. The certificate verifies your commitment to learning.'
		},
		{
			question: 'Can I interact with the instructor?',
			answer:
				'Absolutely. Each lesson has a discussion section where you can ask questions. The instructor and teaching assistants regularly monitor and respond to student questions. You can also join our community forum for peer support.'
		}
	];
</script>

<svelte:head>
	<title>{course.title} - Being Muslim Courses</title>
	<meta name="description" content={course.description} />
</svelte:head>

<!-- Hero -->
<section class="bg-bg-dark pt-28 pb-16 sm:pt-36 sm:pb-20">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-8 lg:grid-cols-5">
			<!-- Content -->
			<div class="lg:col-span-3">
				<div class="flex items-center gap-3">
					<a
						href="/courses"
						class="text-sm text-text-cream/60 transition-colors hover:text-text-cream"
					>
						Courses
					</a>
					<span class="text-text-cream/40">/</span>
					<span class="text-sm text-text-cream/80">{course.category}</span>
				</div>

				<h1 class="mt-4 font-display text-3xl font-bold text-text-cream sm:text-4xl lg:text-5xl">
					{course.title}
				</h1>

				<p class="mt-4 text-lg leading-relaxed text-text-cream/70">
					{course.description}
				</p>

				<div class="mt-6 flex flex-wrap items-center gap-4">
					<Badge variant={getDifficultyVariant(course.difficulty)}>
						{#snippet children()}{course.difficulty}{/snippet}
					</Badge>
					<span class="flex items-center gap-1.5 text-sm text-text-cream/70">
						<BookOpen class="h-4 w-4" />
						{course.lessonCount} lessons
					</span>
					<span class="flex items-center gap-1.5 text-sm text-text-cream/70">
						<Clock class="h-4 w-4" />
						{course.duration}
					</span>
					{#if course.enrolled}
						<span class="flex items-center gap-1.5 text-sm text-text-cream/70">
							<Users class="h-4 w-4" />
							{course.enrolled.toLocaleString()} enrolled
						</span>
					{/if}
				</div>

				<div class="mt-6 flex items-center gap-3">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/30 text-sm font-bold text-text-cream"
					>
						{course.instructor
							.split(' ')
							.map((n) => n[0])
							.join('')}
					</div>
					<div>
						<p class="text-sm font-medium text-text-cream">{course.instructor}</p>
						<p class="text-xs text-text-cream/50">Course Instructor</p>
					</div>
				</div>

				<div class="mt-8 flex flex-wrap gap-3">
					<Button
						size="lg"
						class="bg-accent-primary text-text-cream hover:bg-accent-hover"
						onclick={() => {
							const el = document.getElementById('curriculum');
							el?.scrollIntoView({ behavior: 'smooth' });
						}}
					>
						{#snippet children()}
							Enroll Now — Free
							<ArrowRight class="ml-1 h-5 w-5" />
						{/snippet}
					</Button>
					<Button
						variant="outline"
						size="lg"
						class="border-text-cream/20 text-text-cream hover:bg-white/10 hover:text-text-cream"
					>
						{#snippet children()}
							<Play class="mr-1 h-5 w-5" />
							Preview Course
						{/snippet}
					</Button>
				</div>
			</div>

			<!-- Course preview card -->
			<div class="lg:col-span-2">
				<div class="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
					<div
						class="relative aspect-video bg-gradient-to-br from-accent-primary/30 to-accent-gold/20"
					>
						<div class="flex h-full items-center justify-center">
							<button
								class="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur transition-transform hover:scale-110"
							>
								<Play class="h-8 w-8 text-text-cream ml-1" />
							</button>
						</div>
						<div class="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
							Preview
						</div>
					</div>
					<div class="p-5">
						<div class="space-y-3 text-sm text-text-cream/80">
							<div class="flex items-center justify-between">
								<span class="flex items-center gap-2">
									<BookOpen class="h-4 w-4 text-accent-gold" />
									Lessons
								</span>
								<span class="font-medium text-text-cream">{course.lessonCount}</span>
							</div>
							<div class="flex items-center justify-between">
								<span class="flex items-center gap-2">
									<Clock class="h-4 w-4 text-accent-gold" />
									Duration
								</span>
								<span class="font-medium text-text-cream">{course.duration}</span>
							</div>
							<div class="flex items-center justify-between">
								<span class="flex items-center gap-2">
									<GraduationCap class="h-4 w-4 text-accent-gold" />
									Level
								</span>
								<span class="font-medium text-text-cream">{course.difficulty}</span>
							</div>
							<div class="flex items-center justify-between">
								<span class="flex items-center gap-2">
									<Trophy class="h-4 w-4 text-accent-gold" />
									Certificate
								</span>
								<span class="font-medium text-text-cream">Yes</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- What You'll Learn -->
<Section>
	<div class="mx-auto max-w-3xl">
		<h2 class="font-display text-2xl font-bold sm:text-3xl">What you'll learn</h2>
		<div class="mt-8 grid gap-4 sm:grid-cols-2">
			{#each learningPoints as point}
				<div class="flex items-start gap-3">
					<div
						class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-green/15"
					>
						<Check class="h-3 w-3 text-accent-green" />
					</div>
					<span class="text-sm leading-relaxed text-text-secondary">{point}</span>
				</div>
			{/each}
		</div>
	</div>
</Section>

<!-- Curriculum -->
<Section id="curriculum" class="bg-secondary/50">
	<div class="mx-auto max-w-3xl">
		<div class="flex items-end justify-between">
			<div>
				<h2 class="font-display text-2xl font-bold sm:text-3xl">Course Curriculum</h2>
				<p class="mt-2 text-sm text-text-secondary">
					{modules.length} modules &middot; {totalLessons} lessons &middot; {course.duration}
				</p>
			</div>
			{#if completedLessons > 0}
				<div class="text-right">
					<p class="text-sm font-medium">
						{completedLessons} of {totalLessons} complete
					</p>
					<Progress
						value={(completedLessons / totalLessons) * 100}
						class="mt-1.5 h-1.5 w-32"
					/>
				</div>
			{/if}
		</div>

		<div class="mt-8 space-y-3">
			{#each modules as mod, moduleIndex}
				{@const isExpanded = expandedModules.has(moduleIndex)}
				{@const moduleLessonCount = mod.lessons.length}
				{@const moduleCompletedCount = mod.lessons.filter((l) => l.completed).length}

				<div class="overflow-hidden rounded-xl border border-border bg-surface">
					<!-- Module Header -->
					<button
						class="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-secondary/50"
						onclick={() => toggleModule(moduleIndex)}
					>
						<div class="flex items-center gap-4">
							<div
								class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-sm font-bold text-accent-primary"
							>
								{moduleIndex + 1}
							</div>
							<div>
								<h3 class="font-display text-base font-semibold">{mod.title}</h3>
								<p class="mt-0.5 text-xs text-text-secondary">
									{moduleLessonCount} lessons &middot; {getModuleDuration(mod)}
									{#if moduleCompletedCount > 0}
										&middot;
										<span class="text-accent-green">
											{moduleCompletedCount}/{moduleLessonCount} complete
										</span>
									{/if}
								</p>
							</div>
						</div>
						{#if isExpanded}
							<ChevronUp class="h-5 w-5 shrink-0 text-text-secondary" />
						{:else}
							<ChevronDown class="h-5 w-5 shrink-0 text-text-secondary" />
						{/if}
					</button>

					<!-- Lessons List -->
					{#if isExpanded}
						<div class="border-t border-border">
							{#each mod.lessons as lesson, lessonIndex}
								{@const LessonIcon = lessonIcons[lesson.type]}
								<a
									href="/learn/{course.slug}/{lesson.slug}"
									class="flex items-center gap-4 border-b border-border/50 px-5 py-3.5 transition-colors last:border-b-0 hover:bg-secondary/30"
								>
									<!-- Completion indicator -->
									<div class="shrink-0">
										{#if lesson.completed}
											<CheckCircle class="h-5 w-5 text-accent-green" />
										{:else}
											<Circle class="h-5 w-5 text-border" />
										{/if}
									</div>

									<!-- Lesson icon -->
									<div
										class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg {lesson.type === 'video'
											? 'bg-blue-50 text-blue-500'
											: lesson.type === 'reading'
												? 'bg-amber-50 text-amber-600'
												: 'bg-purple-50 text-purple-500'}"
									>
										<LessonIcon class="h-4 w-4" />
									</div>

									<!-- Lesson info -->
									<div class="flex-1 min-w-0">
										<p
											class="text-sm font-medium {lesson.completed
												? 'text-text-secondary line-through'
												: 'text-text-primary'}"
										>
											{lesson.title}
										</p>
										<p class="text-xs text-text-secondary capitalize">{lesson.type}</p>
									</div>

									<!-- Duration -->
									<span class="shrink-0 text-xs text-text-secondary">{lesson.duration}</span>
								</a>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Expand/Collapse all -->
		<div class="mt-4 text-center">
			<button
				class="text-sm font-medium text-accent-primary hover:underline"
				onclick={() => {
					if (expandedModules.size === modules.length) {
						expandedModules = new Set();
					} else {
						expandedModules = new Set(modules.map((_, i) => i));
					}
				}}
			>
				{expandedModules.size === modules.length ? 'Collapse All' : 'Expand All'}
			</button>
		</div>
	</div>
</Section>

<!-- Instructor -->
<Section>
	<div class="mx-auto max-w-3xl">
		<h2 class="font-display text-2xl font-bold sm:text-3xl">Your Instructor</h2>
		<div class="mt-8 flex flex-col items-start gap-6 sm:flex-row">
			<div
				class="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-gold/20"
			>
				<span class="font-display text-2xl font-bold text-accent-primary">
					{course.instructor
						.split(' ')
						.map((n) => n[0])
						.join('')}
				</span>
			</div>
			<div>
				<h3 class="font-display text-xl font-semibold">{course.instructor}</h3>
				<p class="mt-1 text-sm text-accent-primary">Scholar & Educator</p>
				<p class="mt-3 leading-relaxed text-text-secondary">
					A dedicated educator with over 15 years of experience teaching Islamic studies. Known
					for making complex topics accessible and relatable, especially for those new to the
					faith. Has taught thousands of students worldwide through both in-person and online
					courses, and is the author of the bestselling "Being Muslim" guide.
				</p>
				<div class="mt-4 flex flex-wrap gap-4 text-sm text-text-secondary">
					<span class="flex items-center gap-1.5">
						<GraduationCap class="h-4 w-4 text-accent-gold" />
						4 courses
					</span>
					<span class="flex items-center gap-1.5">
						<Users class="h-4 w-4 text-accent-gold" />
						3,000+ students
					</span>
					<span class="flex items-center gap-1.5">
						<Star class="h-4 w-4 text-accent-gold fill-accent-gold" />
						4.9 instructor rating
					</span>
				</div>
			</div>
		</div>
	</div>
</Section>

<!-- Testimonials -->
<Section class="bg-secondary/50">
	<div class="mx-auto max-w-3xl">
		<h2 class="font-display text-2xl font-bold sm:text-3xl">What students are saying</h2>
		<div class="mt-8 grid gap-6 sm:grid-cols-3">
			{#each testimonials as testimonial}
				<div class="rounded-xl border border-border bg-surface p-6">
					<div class="flex gap-0.5">
						{#each Array(5) as _}
							<Star class="h-4 w-4 fill-accent-gold text-accent-gold" />
						{/each}
					</div>
					<blockquote class="mt-4 text-sm leading-relaxed text-text-secondary">
						"{testimonial.quote}"
					</blockquote>
					<div class="mt-4 flex items-center gap-3">
						<div
							class="flex h-8 w-8 items-center justify-center rounded-full bg-accent-primary/10 text-xs font-bold text-accent-primary"
						>
							{testimonial.name[0]}
						</div>
						<div>
							<p class="text-sm font-medium">{testimonial.name}</p>
							<p class="text-xs text-text-secondary">{testimonial.role}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</Section>

<!-- FAQ -->
<Section>
	<div class="mx-auto max-w-3xl">
		<h2 class="font-display text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
		<div class="mt-8">
			<Accordion.Accordion type="multiple">
				{#each faqs as faq, i}
					<Accordion.AccordionItem value="faq-{i}">
						<Accordion.AccordionTrigger class="text-left font-display font-semibold">
							{#snippet children()}{faq.question}{/snippet}
						</Accordion.AccordionTrigger>
						<Accordion.AccordionContent>
							{#snippet children()}
								<p class="leading-relaxed text-text-secondary">{faq.answer}</p>
							{/snippet}
						</Accordion.AccordionContent>
					</Accordion.AccordionItem>
				{/each}
			</Accordion.Accordion>
		</div>
	</div>
</Section>

<!-- Bottom CTA -->
<section class="bg-bg-dark py-16 sm:py-24">
	<div class="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
		<h2 class="font-display text-3xl font-bold text-text-cream sm:text-4xl">
			Ready to begin your learning journey?
		</h2>
		<p class="mx-auto mt-4 max-w-xl text-lg text-text-cream/70">
			Join {course.enrolled?.toLocaleString() ?? 'hundreds of'} students already enrolled in {course.title}.
			Start learning at your own pace today.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
			<Button size="lg" class="bg-accent-primary text-text-cream hover:bg-accent-hover">
				{#snippet children()}
					Enroll Now — Free
					<ArrowRight class="ml-1 h-5 w-5" />
				{/snippet}
			</Button>
			<a href="/courses" class="text-sm font-medium text-text-cream/70 hover:text-text-cream">
				Browse all courses
			</a>
		</div>
	</div>
</section>

<!-- Mobile Sticky CTA -->
<div
	class="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-surface/95 p-4 backdrop-blur sm:hidden"
>
	<Button size="lg" class="w-full bg-accent-primary text-text-cream hover:bg-accent-hover">
		{#snippet children()}
			Enroll Now — Free
			<ArrowRight class="ml-1 h-5 w-5" />
		{/snippet}
	</Button>
</div>

<!-- Spacer for mobile sticky CTA -->
<div class="h-20 sm:hidden"></div>
