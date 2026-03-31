<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';

	const concepts = [
		{
			id: 'A',
			subtitle: 'Original Design',
			href: '/a',
			primary: '#8b2e36',
			fonts: 'Brill + Inter',
			description: 'The original design — warm, scholarly, and rooted in tradition. Dark hero sections with geometric patterns, burgundy accent, and classic typography.'
		},
		{
			id: 'B',
			subtitle: 'Warm & Editorial',
			href: '/b',
			primary: '#2a2018',
			fonts: 'Source Serif 4 + DM Sans',
			description: 'Clean, warm, and editorial. Dark hero with mega-menu navigation, Source Serif 4 headings, DM Sans body text, warm earth tones (#2a2018, #c8b8a0), and a classic grid-based layout throughout.'
		},
		{
			id: 'C',
			subtitle: 'Glass & Bento',
			href: '/c',
			primary: '#2a2018',
			fonts: 'Source Serif 4 + DM Sans',
			description: 'Modern, airy, and explorable. Floating glass-effect pill navbar, bento grid layouts, horizontal scroll course carousels, alternating warm backgrounds, and generous whitespace with the same warm earth palette.'
		}
	];
</script>

<svelte:head>
	<title>Design Concepts — Being Muslim</title>
</svelte:head>

<div class="min-h-screen bg-bg-primary py-16 sm:py-24">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="font-display text-4xl font-bold sm:text-5xl">Design Concepts</h1>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
				Three design approaches for BeingMuslim.org. A is the base design — B and C explore different visual identities and layout patterns.
			</p>
		</div>

		<div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each concepts as concept}
				<a href={concept.href} class="group">
					<div class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:shadow-lg">
						<!-- Color bar -->
						<div class="h-2" style="background-color: {concept.primary}"></div>

						<div class="flex flex-1 flex-col p-6">
							<!-- Header -->
							<div class="flex items-center gap-3">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold text-white"
									style="background-color: {concept.primary}"
								>
									{concept.id}
								</div>
								<div>
									<h2 class="font-display text-xl font-bold">Concept {concept.id}</h2>
									<p class="text-sm text-text-secondary">{concept.subtitle}</p>
								</div>
							</div>

							<!-- Description -->
							<p class="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
								{concept.description}
							</p>

							<!-- Meta -->
							<div class="mt-4 flex items-center justify-between border-t border-border pt-4">
								<span class="text-xs text-text-secondary">Fonts: {concept.fonts}</span>
								<span class="flex items-center gap-1 text-sm font-medium text-accent-primary transition-colors group-hover:text-accent-hover">
									View
									<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
								</span>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
