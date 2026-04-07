<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import {
		ArrowLeft,
		ArrowRight,
		BookOpen,
		Calendar,
		Clock,
		Share2,
		ThumbsUp,
		ThumbsDown,
		Printer,
		List
	} from 'lucide-svelte';

	let { data } = $props();

	let article = $derived(data.article);
	let relatedArticles = $derived(data.relatedArticles);

	let feedbackGiven = $state<'up' | 'down' | null>(null);
	let showToc = $state(false);

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	const tableOfContents = [
		{ id: 'introduction', label: 'Introduction' },
		{ id: 'understanding-the-basics', label: 'Understanding the Basics' },
		{ id: 'practical-application', label: 'Practical Application' },
		{ id: 'common-questions', label: 'Common Questions' },
		{ id: 'next-steps', label: 'Next Steps' }
	];
</script>

<svelte:head>
	<title>{article.title} — Being Muslim</title>
	<meta name="description" content={article.excerpt} />
</svelte:head>

<!-- Hero -->
<section class="bg-bg-dark py-16 sm:py-24">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<a
				href="/articles"
				class="mb-6 inline-flex items-center gap-2 text-sm text-text-cream/60 transition-colors hover:text-text-cream"
			>
				<ArrowLeft class="h-4 w-4" />
				Back to Articles
			</a>

			<div class="flex flex-wrap items-center gap-3">
				<Badge variant="gold">
					{#snippet children()}{article.category}{/snippet}
				</Badge>
				<span class="flex items-center gap-1 text-sm text-text-cream/60">
					<Clock class="h-4 w-4" />
					{article.readingTime}
				</span>
			</div>

			<h1 class="mt-4 font-display text-3xl font-bold leading-tight text-text-cream sm:text-4xl lg:text-5xl">
				{article.title}
			</h1>

			<p class="mt-4 text-lg text-text-cream/70">{article.excerpt}</p>

			<div class="mt-8 flex items-center gap-4">
				<div class="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/20 text-sm font-bold text-text-cream">
					{article.author[0]}
				</div>
				<div>
					<p class="font-medium text-text-cream">{article.author}</p>
					<p class="flex items-center gap-1 text-sm text-text-cream/50">
						<Calendar class="h-3.5 w-3.5" />
						{formatDate(article.date)}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Article Content -->
<Section class="!py-12">
	<div class="relative mx-auto max-w-5xl lg:grid lg:grid-cols-[1fr_240px] lg:gap-12">
		<!-- Main Content -->
		<article class="mx-auto max-w-3xl lg:mx-0">
			<!-- Mobile TOC Toggle -->
			<div class="mb-8 lg:hidden">
				<button
					onclick={() => (showToc = !showToc)}
					class="flex w-full items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium"
				>
					<List class="h-4 w-4" />
					Table of Contents
					<ArrowRight class="ml-auto h-4 w-4 transition-transform {showToc ? 'rotate-90' : ''}" />
				</button>
				{#if showToc}
					<nav class="mt-2 rounded-lg border border-border bg-surface p-4">
						<ul class="space-y-2">
							{#each tableOfContents as item}
								<li>
									<a
										href="#{item.id}"
										class="text-sm text-text-secondary transition-colors hover:text-accent-primary"
										onclick={() => (showToc = false)}
									>
										{item.label}
									</a>
								</li>
							{/each}
						</ul>
					</nav>
				{/if}
			</div>

			<!-- Article Body -->
			<div class="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-text-primary prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-accent-primary prose-blockquote:text-text-secondary prose-strong:text-text-primary">
				<section id="introduction">
					<h2>Introduction</h2>
					<p>
						Islam is a faith built on clear foundations. Whether you are entirely new to the religion or
						revisiting concepts you learned long ago, understanding these core principles is essential.
						This article will walk you through the key ideas in a way that is both accessible and
						rooted in authentic scholarship.
					</p>
					<p>
						The beauty of Islamic teaching lies in its balance between simplicity and depth. The basics
						are straightforward enough for any beginner, yet scholars have spent lifetimes exploring
						their nuances. Wherever you are on your journey, there is always more to discover.
					</p>
				</section>

				<section id="understanding-the-basics">
					<h2>Understanding the Basics</h2>
					<p>
						At its core, Islam rests on a set of beliefs and practices that give life meaning and
						structure. The word "Islam" itself means submission to the will of God, and a Muslim is one
						who submits. This submission is not passive; it is an active, conscious choice made every day.
					</p>
					<blockquote>
						<p>
							"The best of people are those who are most beneficial to others."
							<br />
							<em>— Prophet Muhammad (peace be upon him)</em>
						</p>
					</blockquote>
					<p>
						The five pillars of Islam provide the framework for Muslim life. They are not merely
						rituals; each one serves a deeper spiritual purpose, connecting the individual to God, to
						the community, and to the broader purpose of human existence.
					</p>
					<ul>
						<li><strong>Shahada</strong> — The declaration of faith, affirming the oneness of God and the prophethood of Muhammad.</li>
						<li><strong>Salah</strong> — The five daily prayers that create a rhythm of remembrance throughout the day.</li>
						<li><strong>Zakat</strong> — Charitable giving that purifies wealth and supports those in need.</li>
						<li><strong>Sawm</strong> — Fasting during Ramadan, a month of self-discipline and spiritual reflection.</li>
						<li><strong>Hajj</strong> — The pilgrimage to Makkah, undertaken at least once in a lifetime if able.</li>
					</ul>
				</section>

				<section id="practical-application">
					<h2>Practical Application</h2>
					<p>
						Theory alone is not enough. Islam is a lived faith, and its teachings are meant to be
						practiced in daily life. Start small and build gradually. The Prophet Muhammad (peace be
						upon him) taught that the most beloved deeds to God are those done consistently, even if
						they are small.
					</p>
					<p>
						Here are some practical steps to begin incorporating these principles into your routine:
					</p>
					<ol>
						<li><strong>Begin with the basics of prayer.</strong> Even learning one prayer at a time is a meaningful start. Don't let perfectionism hold you back.</li>
						<li><strong>Read a little Quran each day.</strong> Start with short chapters (surahs) and a good translation. Even five minutes of reflection can shift your day.</li>
						<li><strong>Connect with a community.</strong> Find a local mosque or an online group where you can ask questions and feel supported.</li>
						<li><strong>Practice gratitude.</strong> Islam places great emphasis on thankfulness. Take a few moments each day to acknowledge the blessings in your life.</li>
					</ol>
				</section>

				<section id="common-questions">
					<h2>Common Questions</h2>
					<p>
						It is completely normal to have questions, and asking them is encouraged in Islam.
						The Prophet's companions were known for asking detailed questions, and there is
						no shame in seeking clarity.
					</p>
					<p>
						<strong>What if I make mistakes?</strong> Everyone does, and Islam is a faith of mercy and
						repentance. God's forgiveness is always available to those who sincerely seek it.
					</p>
					<p>
						<strong>Do I need to learn Arabic?</strong> While Arabic is the language of the Quran and
						prayer, you can begin practicing Islam in any language. Learning Arabic is a long-term
						goal, not a prerequisite.
					</p>
					<p>
						<strong>How do I handle reactions from family or friends?</strong> This varies greatly
						depending on your circumstances. Patience, kindness, and leading by example are often
						the most effective approaches. Our community forums are a great place to share
						experiences and advice on this topic.
					</p>
				</section>

				<section id="next-steps">
					<h2>Next Steps</h2>
					<p>
						Your journey in faith is lifelong, and there is no rush. Take things at a pace that
						feels right for you, and remember that consistency matters more than intensity.
						Here are some resources to continue your learning:
					</p>
					<ul>
						<li>Explore our <a href="/guides/new-muslim">New Muslim Guide</a> for a structured 30-day plan.</li>
						<li>Watch our <a href="/videos/how-to-pray-step-by-step">step-by-step prayer video</a> for visual guidance.</li>
						<li>Join the <a href="/community">community forums</a> to connect with others on the same path.</li>
					</ul>
				</section>
			</div>

			<!-- Share & Print Actions -->
			<div class="mt-12 flex flex-wrap gap-3 border-t border-border pt-8">
				<Button variant="outline" size="sm">
					{#snippet children()}
						<Share2 class="h-4 w-4" />
						Share Article
					{/snippet}
				</Button>
				<Button variant="outline" size="sm" onclick={() => window.print()}>
					{#snippet children()}
						<Printer class="h-4 w-4" />
						Print
					{/snippet}
				</Button>
			</div>

			<!-- Feedback Section -->
			<div class="mt-12 rounded-xl border border-border bg-surface p-8 text-center">
				<h3 class="font-display text-xl font-semibold">Was this article helpful?</h3>
				<p class="mt-2 text-sm text-text-secondary">
					Your feedback helps us create better content for the community.
				</p>
				<div class="mt-6 flex justify-center gap-4">
					<button
						onclick={() => (feedbackGiven = 'up')}
						class="flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 {feedbackGiven === 'up'
							? 'bg-accent-green/15 text-accent-green border border-accent-green/30'
							: 'border border-border bg-surface text-text-secondary hover:border-accent-green/30 hover:text-accent-green'}"
					>
						<ThumbsUp class="h-5 w-5" />
						Yes, helpful
					</button>
					<button
						onclick={() => (feedbackGiven = 'down')}
						class="flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 {feedbackGiven === 'down'
							? 'bg-accent-primary/10 text-accent-primary border border-accent-primary/30'
							: 'border border-border bg-surface text-text-secondary hover:border-accent-primary/30 hover:text-accent-primary'}"
					>
						<ThumbsDown class="h-5 w-5" />
						Not really
					</button>
				</div>
				{#if feedbackGiven}
					<p class="mt-4 text-sm text-text-secondary">
						Thank you for your feedback! {feedbackGiven === 'up'
							? "We're glad it was helpful."
							: "We'll work on improving this content."}
					</p>
				{/if}
			</div>
		</article>

		<!-- Sticky Table of Contents (Desktop) -->
		<aside class="hidden lg:block">
			<nav class="sticky top-24">
				<h3 class="mb-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">
					On this page
				</h3>
				<ul class="space-y-2 border-l border-border">
					{#each tableOfContents as item}
						<li>
							<a
								href="#{item.id}"
								class="-ml-px block border-l-2 border-transparent py-1 pl-4 text-sm text-text-secondary transition-colors hover:border-accent-primary hover:text-accent-primary"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</aside>
	</div>
</Section>

<!-- Related Articles -->
<Section class="bg-secondary/50">
	<div class="text-center">
		<h2 class="font-display text-3xl font-bold">Related Articles</h2>
		<p class="mt-2 text-text-secondary">Continue exploring topics that interest you</p>
	</div>

	<div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each relatedArticles as related}
			<a href="/articles/{related.slug}" class="group">
				<article class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent-primary/30 hover:shadow-lg">
					<div class="aspect-[16/10] bg-gradient-to-br from-accent-primary/20 to-accent-gold/20">
						<div class="flex h-full items-center justify-center">
							<BookOpen class="h-12 w-12 text-accent-primary/40" />
						</div>
					</div>
					<div class="flex flex-1 flex-col p-5">
						<div class="flex items-center gap-2">
							<Badge variant="secondary">
								{#snippet children()}{related.category}{/snippet}
							</Badge>
							<span class="flex items-center gap-1 text-xs text-text-secondary">
								<Clock class="h-3 w-3" />
								{related.readingTime}
							</span>
						</div>
						<h3 class="mt-3 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent-primary">
							{related.title}
						</h3>
						<p class="mt-2 flex-1 text-sm text-text-secondary line-clamp-2">{related.excerpt}</p>
					</div>
				</article>
			</a>
		{/each}
	</div>

	<div class="mt-10 text-center">
		<Button variant="outline">
			{#snippet children()}
				View All Articles
				<ArrowRight class="ml-1 h-4 w-4" />
			{/snippet}
		</Button>
	</div>
</Section>
