<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';

	interface Concept {
		id: string;
		name: string;
		subtitle: string;
		href: string;
		swatches: string[];
		fonts: string;
		description: string;
	}

	const warmFamily: Concept[] = [
		{
			id: 'A',
			name: 'Warm Editorial',
			subtitle: 'Classic & grounded',
			href: '/a',
			swatches: ['#faf9f5', '#2a2018', '#c8b8a0'],
			fonts: 'Source Serif 4 + DM Sans',
			description:
				'The baseline direction: clean, warm, and editorial. Dark hero, classic grid layouts, warm earth tones, and a calm scholarly tone.'
		},
		{
			id: 'B',
			name: 'Glass & Bento',
			subtitle: 'Airy & explorable',
			href: '/b',
			swatches: ['#faf9f5', '#2a2018', '#c8b8a0'],
			fonts: 'Source Serif 4 + DM Sans',
			description:
				'Same warm palette, modern structure: floating glass pill navbar, bento grid layouts, horizontal carousels, and generous whitespace.'
		},
		{
			id: 'C',
			name: 'Warm + Motion',
			subtitle: 'Scroll-animated',
			href: '/c',
			swatches: ['#faf9f5', '#2a2018', '#c8b8a0'],
			fonts: 'Source Serif 4 + DM Sans',
			description:
				'The warm editorial identity brought to life with Framer/Webflow-style scroll reveal animations and staggered entrances.'
		},
		{
			id: 'D',
			name: 'Parallax Story',
			subtitle: 'Cinematic scroll',
			href: '/d',
			swatches: ['#faf9f5', '#2a2018', '#c8b8a0'],
			fonts: 'Source Serif 4 + DM Sans',
			description:
				'A storytelling scroll experience: parallax hero, animated stat counters, and smooth section transitions on the warm palette.'
		},
		{
			id: 'E',
			name: 'Split Hero Motion',
			subtitle: 'Framer-style',
			href: '/e',
			swatches: ['#faf9f5', '#2a2018', '#c8b8a0'],
			fonts: 'Source Serif 4 + DM Sans',
			description:
				'Framer-style split hero with word-by-word headline reveal, hover micro-interactions, and polished layout transitions.'
		}
	];

	const divergent: Concept[] = [
		{
			id: 'F',
			name: 'Midnight Celestial',
			subtitle: 'Dark, serene, premium',
			href: '/f',
			swatches: ['#0B1020', '#D4AF6A', '#F2EFE6'],
			fonts: 'Cormorant Garamond + Manrope',
			description:
				'The serenity of night prayer: deep ink-navy, starfield textures, gold hairlines and eight-pointed star ornaments, elegant high-contrast serifs. Luxurious and contemplative.'
		},
		{
			id: 'G',
			name: 'Print Editorial',
			subtitle: 'Literary journal',
			href: '/g',
			swatches: ['#FBF8F1', '#1A1612', '#9E2B25'],
			fonts: 'Newsreader + Work Sans',
			description:
				'The site as a beautifully typeset periodical: masthead, hairline rules, drop caps, numbered sections, a single vermilion ink accent. No shadows, no rounded corners — pure typography.'
		},
		{
			id: 'H',
			name: 'Garden Companion',
			subtitle: 'Friendly & app-like',
			href: '/h',
			swatches: ['#1E6B4E', '#E6F2E9', '#F2B84B'],
			fonts: 'Outfit + Rubik',
			description:
				'Headspace/Duolingo warmth for someone brand new to Islam: garden greens, big rounded cards, pill buttons, cheerful category tints, and a "friendly companion" tone.'
		},
		{
			id: 'I',
			name: 'Geometric Bold',
			subtitle: 'Modern-traditional',
			href: '/i',
			swatches: ['#0E5650', '#EDE3CC', '#C2542B'],
			fonts: 'Fraunces + Space Grotesk',
			description:
				'Swiss grid meets Islamic geometric art: flat teal and sand color bands, tessellating zellige patterns, massive display type, oversized section numbers. Museum-poster energy.'
		}
	];
</script>

<svelte:head>
	<title>Design Concepts — Being Muslim</title>
</svelte:head>

{#snippet conceptCard(concept: Concept)}
	<a href={concept.href} class="group">
		<div
			class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
		>
			<!-- Palette bar -->
			<div class="flex h-2">
				{#each concept.swatches as color}
					<div class="flex-1" style="background-color: {color}"></div>
				{/each}
			</div>

			<div class="flex flex-1 flex-col p-6">
				<div class="flex items-center gap-3">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-bold"
						style="background-color: {concept.swatches[0]}; color: {concept.swatches[2]};"
					>
						{concept.id}
					</div>
					<div>
						<h2 class="font-display text-lg font-bold leading-tight">{concept.name}</h2>
						<p class="text-sm text-text-secondary">{concept.subtitle}</p>
					</div>
				</div>

				<p class="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
					{concept.description}
				</p>

				<div class="mt-4 flex items-center justify-between border-t border-border pt-4">
					<span class="text-xs text-text-secondary">{concept.fonts}</span>
					<span
						class="flex items-center gap-1 text-sm font-medium text-accent-primary transition-colors group-hover:text-accent-hover"
					>
						View
						<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</span>
				</div>
			</div>
		</div>
	</a>
{/snippet}

<div class="min-h-screen bg-bg-primary py-16 sm:py-24">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="font-display text-4xl font-bold sm:text-5xl">Design Concepts</h1>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
				Landing page explorations for BeingMuslim.org — four divergent design directions, plus five
				variations on the warm editorial identity.
			</p>
		</div>

		<div class="mt-16">
			<h2 class="font-display text-2xl font-bold">Divergent Directions</h2>
			<p class="mt-1 text-text-secondary">
				Four distinct visual identities — each one a different answer to "what should Being Muslim
				feel like?"
			</p>
			<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each divergent as concept}
					{@render conceptCard(concept)}
				{/each}
			</div>
		</div>

		<div class="mt-16">
			<h2 class="font-display text-2xl font-bold">Warm Editorial Family</h2>
			<p class="mt-1 text-text-secondary">
				One shared identity (warm earth tones, Source Serif 4 + DM Sans) explored through five
				different layout and motion treatments.
			</p>
			<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each warmFamily as concept}
					{@render conceptCard(concept)}
				{/each}
			</div>
		</div>
	</div>
</div>
