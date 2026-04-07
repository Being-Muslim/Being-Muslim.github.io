<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import {
		ArrowLeft,
		ArrowRight,
		Printer,
		Clock,
		ListChecks,
		ChevronLeft,
		ChevronRight,
		Lightbulb,
		Check,
		BookOpen,
		Footprints
	} from 'lucide-svelte';

	let { data } = $props();

	let guide = $derived(data.guide);
	let steps = $derived(data.steps);
	let otherGuides = $derived(data.otherGuides);

	let currentStep = $state(0);

	let progressPercentage = $derived(((currentStep + 1) / steps.length) * 100);

	function goToStep(index: number) {
		if (index >= 0 && index < steps.length) {
			currentStep = index;
		}
	}

	function nextStep() {
		goToStep(currentStep + 1);
	}

	function prevStep() {
		goToStep(currentStep - 1);
	}
</script>

<svelte:head>
	<title>{guide.title} — Being Muslim</title>
	<meta name="description" content={guide.description} />
</svelte:head>

<!-- Hero Section -->
<section class="bg-bg-dark py-16 sm:py-20">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<a
			href="/guides"
			class="mb-6 inline-flex items-center gap-2 text-sm text-text-cream/60 transition-colors hover:text-text-cream"
		>
			<ArrowLeft class="h-4 w-4" />
			Back to Guides
		</a>

		<div class="mx-auto max-w-3xl">
			<div class="flex flex-wrap items-center gap-3">
				<Badge variant="gold">
					{#snippet children()}{guide.category}{/snippet}
				</Badge>
				<span class="flex items-center gap-1.5 text-sm text-text-cream/60">
					<ListChecks class="h-4 w-4" />
					{guide.stepCount} steps
				</span>
				<span class="flex items-center gap-1.5 text-sm text-text-cream/60">
					<Clock class="h-4 w-4" />
					{guide.estimatedTime}
				</span>
			</div>

			<h1 class="mt-4 font-display text-3xl font-bold text-text-cream sm:text-4xl lg:text-5xl">
				{guide.title}
			</h1>

			<p class="mt-4 text-lg text-text-cream/70">
				{guide.description}
			</p>

			<!-- Progress Bar -->
			<div class="mt-8">
				<div class="mb-2 flex items-center justify-between text-sm text-text-cream/60">
					<span>Step {currentStep + 1} of {steps.length}</span>
					<span>{Math.round(progressPercentage)}% complete</span>
				</div>
				<Progress value={progressPercentage} class="h-2" />
			</div>
		</div>
	</div>
</section>

<!-- Guide Content -->
<Section>
	<div class="mx-auto max-w-5xl lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
		<!-- Step Navigation Sidebar (Desktop) -->
		<aside class="hidden lg:block">
			<nav class="sticky top-24">
				<h3 class="mb-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">
					Steps
				</h3>
				<ol class="space-y-1">
					{#each steps as step, i}
						<li>
							<button
								onclick={() => goToStep(i)}
								class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-200 {i === currentStep
									? 'bg-accent-primary/10 text-accent-primary font-medium'
									: i < currentStep
										? 'text-accent-green hover:bg-secondary'
										: 'text-text-secondary hover:bg-secondary'}"
							>
								<span
									class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold {i === currentStep
										? 'bg-accent-primary text-text-cream'
										: i < currentStep
											? 'bg-accent-green/15 text-accent-green'
											: 'bg-secondary text-text-secondary'}"
								>
									{#if i < currentStep}
										<Check class="h-3.5 w-3.5" />
									{:else}
										{step.number}
									{/if}
								</span>
								<span class="line-clamp-1">{step.title}</span>
							</button>
						</li>
					{/each}
				</ol>
			</nav>
		</aside>

		<!-- Mobile Step Indicator -->
		<div class="mb-8 flex gap-1.5 overflow-x-auto pb-2 lg:hidden">
			{#each steps as step, i}
				<button
					onclick={() => goToStep(i)}
					class="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors {i === currentStep
						? 'bg-accent-primary text-text-cream'
						: i < currentStep
							? 'bg-accent-green/15 text-accent-green'
							: 'bg-secondary text-text-secondary'}"
				>
					{#if i < currentStep}
						<Check class="h-3 w-3" />
					{/if}
					{step.number}
				</button>
			{/each}
		</div>

		<!-- Step Content -->
		<div class="mx-auto max-w-3xl lg:mx-0">
			{#key currentStep}
				<article>
					<div class="flex items-center gap-3">
						<span class="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary text-sm font-bold text-text-cream">
							{steps[currentStep].number}
						</span>
						<h2 class="font-display text-2xl font-bold sm:text-3xl">
							{steps[currentStep].title}
						</h2>
					</div>

					<div class="mt-6 text-lg leading-relaxed text-text-secondary">
						<p>{steps[currentStep].content}</p>
					</div>

					<!-- Tip Box -->
					{#if steps[currentStep].tip}
						<div class="mt-8 rounded-xl border border-accent-gold/30 bg-accent-gold/5 p-6">
							<div class="flex gap-3">
								<Lightbulb class="mt-0.5 h-5 w-5 shrink-0 text-accent-gold" />
								<div>
									<h4 class="text-sm font-semibold text-accent-gold">Helpful Tip</h4>
									<p class="mt-1 text-sm leading-relaxed text-text-secondary">
										{steps[currentStep].tip}
									</p>
								</div>
							</div>
						</div>
					{/if}
				</article>
			{/key}

			<!-- Step Navigation -->
			<div class="mt-12 flex items-center justify-between border-t border-border pt-8">
				<div>
					{#if currentStep > 0}
						<Button variant="outline" onclick={prevStep}>
							{#snippet children()}
								<ChevronLeft class="h-4 w-4" />
								Previous Step
							{/snippet}
						</Button>
					{/if}
				</div>

				<div>
					{#if currentStep < steps.length - 1}
						<Button onclick={nextStep}>
							{#snippet children()}
								Next Step
								<ChevronRight class="h-4 w-4" />
							{/snippet}
						</Button>
					{:else}
						<Button class="bg-accent-green text-text-cream hover:bg-accent-green/90">
							{#snippet children()}
								<Check class="h-4 w-4" />
								Complete Guide
							{/snippet}
						</Button>
					{/if}
				</div>
			</div>

			<!-- Print Button -->
			<div class="mt-8 text-center">
				<Button variant="ghost" onclick={() => window.print()}>
					{#snippet children()}
						<Printer class="h-4 w-4" />
						Print This Guide
					{/snippet}
				</Button>
			</div>
		</div>
	</div>
</Section>

<!-- Other Guides -->
{#if otherGuides.length > 0}
	<Section class="bg-secondary/50">
		<div class="text-center">
			<h2 class="font-display text-3xl font-bold">Continue Your Journey</h2>
			<p class="mt-2 text-text-secondary">Explore more guides to deepen your understanding</p>
		</div>

		<div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each otherGuides as other}
				<a href="/guides/{other.slug}" class="group">
					<article class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent-primary/30 hover:shadow-lg">
						<div class="relative aspect-[2/1] bg-gradient-to-br from-accent-primary/15 to-accent-gold/15">
							<div class="flex h-full items-center justify-center">
								<Footprints class="h-12 w-12 text-accent-primary/30" />
							</div>
							<div class="absolute bottom-3 left-3">
								<Badge variant="gold">
									{#snippet children()}{other.stepCount} Steps{/snippet}
								</Badge>
							</div>
						</div>
						<div class="flex flex-1 flex-col p-5">
							<h3 class="font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent-primary">
								{other.title}
							</h3>
							<p class="mt-2 flex-1 text-sm text-text-secondary line-clamp-2">
								{other.description}
							</p>
							<div class="mt-4 flex items-center gap-4 text-xs text-text-secondary">
								<span class="flex items-center gap-1">
									<ListChecks class="h-3.5 w-3.5" />
									{other.stepCount} steps
								</span>
								<span class="flex items-center gap-1">
									<Clock class="h-3.5 w-3.5" />
									{other.estimatedTime}
								</span>
							</div>
						</div>
					</article>
				</a>
			{/each}
		</div>

		<div class="mt-10 text-center">
			<a href="/guides">
				<Button variant="outline">
					{#snippet children()}
						View All Guides
						<ArrowRight class="ml-1 h-4 w-4" />
					{/snippet}
				</Button>
			</a>
		</div>
	</Section>
{/if}
