<script lang="ts">
	import { base } from '$app/paths';
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { products } from '$lib/data/mock.js';
	import {
		Star,
		ShoppingCart,
		Heart,
		BookOpen,
		ArrowRight,
		Package,
		Search
	} from 'lucide-svelte';

	const categories = ['All', 'Books', 'Boxed Sets', 'Cards', 'Digital'] as const;
	let activeCategory = $state<string>('All');
	let searchQuery = $state('');

	let filteredProducts = $derived(
		products.filter((p) => {
			const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
			const matchesSearch =
				searchQuery === '' ||
				p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				p.description.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		})
	);
</script>

<svelte:head>
	<title>Shop — Being Muslim</title>
	<meta
		name="description"
		content="Browse books, boxed sets, prayer cards, and digital resources to support your Islamic journey."
	/>
</svelte:head>

<!-- ============================== -->
<!-- HERO SECTION                   -->
<!-- ============================== -->
<section class="relative overflow-hidden bg-bg-dark py-20 sm:py-28">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="shop-geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-text-cream"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#shop-geo)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
		<Badge variant="gold">
			{#snippet children()}
				<Package class="mr-1 h-3 w-3" />
				Free shipping on orders over $50
			{/snippet}
		</Badge>
		<h1 class="mt-6 font-display text-4xl font-bold text-text-cream sm:text-5xl">Shop</h1>
		<p class="mx-auto mt-4 max-w-xl text-lg text-text-cream/70">
			Beautifully crafted resources to support your Islamic journey — from bestselling books to
			prayer essentials.
		</p>
	</div>

	<div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent"></div>
</section>

<!-- ============================== -->
<!-- FILTERS & SEARCH               -->
<!-- ============================== -->
<Section>
	<div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
		<!-- Category Pills -->
		<div class="flex flex-wrap gap-2">
			{#each categories as category}
				<button
					onclick={() => (activeCategory = category)}
					class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 {activeCategory ===
					category
						? 'bg-accent-primary text-text-cream shadow-md'
						: 'border border-border bg-surface text-text-secondary hover:border-accent-primary/30 hover:text-text-primary'}"
				>
					{category}
				</button>
			{/each}
		</div>

		<!-- Search -->
		<div class="relative">
			<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Search products..."
				class="h-10 w-full rounded-lg border border-border bg-surface pl-10 pr-4 text-sm placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 sm:w-64"
			/>
		</div>
	</div>

	<!-- ============================== -->
	<!-- PRODUCT GRID                   -->
	<!-- ============================== -->
	{#if filteredProducts.length === 0}
		<div class="mt-16 text-center">
			<Package class="mx-auto h-16 w-16 text-text-secondary/30" />
			<h3 class="mt-4 font-display text-xl font-semibold">No products found</h3>
			<p class="mt-2 text-text-secondary">Try adjusting your search or filter criteria.</p>
			<Button
				variant="outline"
				class="mt-6"
				onclick={() => {
					activeCategory = 'All';
					searchQuery = '';
				}}
			>
				{#snippet children()}Clear Filters{/snippet}
			</Button>
		</div>
	{:else}
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each filteredProducts as product, i}
				<!-- Sponsor Banner (after 2nd product) -->
				{#if i === 2}
					<div
						class="flex flex-col items-center justify-center rounded-xl border border-accent-gold/30 bg-gradient-to-br from-accent-gold/5 to-accent-primary/5 p-6 text-center sm:col-span-2 lg:col-span-1"
					>
						<div
							class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/15"
						>
							<Heart class="h-6 w-6 text-accent-gold" />
						</div>
						<h3 class="font-display text-lg font-semibold">Sponsor a New Muslim</h3>
						<p class="mt-2 text-sm text-text-secondary">
							Gift a boxed set to someone beginning their Islamic journey.
						</p>
						<a
							href="{base}/give"
							class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline"
						>
							Learn more
							<ArrowRight class="h-4 w-4" />
						</a>
					</div>
				{/if}

				<!-- Product Card -->
				<a href="{base}/shop/{product.handle}" class="group">
					<div
						class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent-primary/30 hover:shadow-lg"
					>
						<!-- Image Placeholder -->
						<div
							class="relative aspect-[4/3] bg-gradient-to-br from-accent-primary/10 to-accent-gold/10"
						>
							<div class="flex h-full items-center justify-center">
								<BookOpen class="h-12 w-12 text-accent-primary/30" />
							</div>
							{#if product.badge}
								<div class="absolute left-3 top-3">
									<Badge variant="gold">
										{#snippet children()}{product.badge}{/snippet}
									</Badge>
								</div>
							{/if}
							{#if !product.inStock}
								<div
									class="absolute inset-0 flex items-center justify-center bg-bg-dark/50 backdrop-blur-sm"
								>
									<span class="rounded-full bg-bg-dark/80 px-3 py-1 text-sm font-medium text-text-cream">
										Out of Stock
									</span>
								</div>
							{/if}
						</div>

						<!-- Product Info -->
						<div class="flex flex-1 flex-col p-5">
							<h3
								class="font-display text-base font-semibold leading-snug transition-colors group-hover:text-accent-primary"
							>
								{product.title}
							</h3>

							<!-- Rating -->
							<div class="mt-2 flex items-center gap-1.5">
								<div class="flex items-center gap-0.5">
									{#each Array(5) as _, idx}
										<Star
											class="h-3.5 w-3.5 {idx < Math.floor(product.rating)
												? 'fill-accent-gold text-accent-gold'
												: 'text-border'}"
										/>
									{/each}
								</div>
								<span class="text-xs text-text-secondary">
									{product.rating} ({product.reviewCount})
								</span>
							</div>

							<!-- Price -->
							<div class="mt-3 flex items-center gap-2">
								<span class="text-lg font-bold text-accent-primary">
									${product.price.toFixed(2)}
								</span>
								{#if product.compareAtPrice}
									<span class="text-sm text-text-secondary line-through">
										${product.compareAtPrice.toFixed(2)}
									</span>
								{/if}
							</div>

							<!-- Spacer -->
							<div class="flex-1"></div>

							<!-- Add to Cart Button -->
							<div class="mt-4">
								<Button
									class="w-full bg-accent-primary text-text-cream hover:bg-accent-hover"
									onclick={(e) => {
										e.preventDefault();
										// TODO: Add to cart logic
									}}
								>
									{#snippet children()}
										<ShoppingCart class="h-4 w-4" />
										Add to Cart
									{/snippet}
								</Button>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</Section>

<!-- ============================== -->
<!-- SPONSOR CALLOUT BANNER         -->
<!-- ============================== -->
<section class="bg-bg-dark py-16">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div
			class="flex flex-col items-center gap-8 rounded-2xl bg-gradient-to-r from-accent-primary/20 to-accent-gold/20 p-8 sm:flex-row sm:p-12"
		>
			<div
				class="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-accent-gold/20"
			>
				<Heart class="h-10 w-10 text-accent-gold" />
			</div>
			<div class="flex-1 text-center sm:text-left">
				<h2 class="font-display text-2xl font-bold text-text-cream sm:text-3xl">
					Sponsor this for a new Muslim
				</h2>
				<p class="mt-2 text-text-cream/70">
					Many new Muslims cannot afford the resources they need. Your sponsorship puts a complete
					Being Muslim boxed set in their hands — a gift that transforms lives.
				</p>
			</div>
			<a href="{base}/give">
				<Button size="lg" class="shrink-0 bg-accent-gold text-bg-dark hover:bg-accent-gold/90">
					{#snippet children()}
						Sponsor Now
						<Heart class="h-4 w-4" />
					{/snippet}
				</Button>
			</a>
		</div>
	</div>
</section>
