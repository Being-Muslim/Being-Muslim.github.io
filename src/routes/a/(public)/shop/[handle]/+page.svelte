<script lang="ts">
	import { base } from '$app/paths';
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { products, type Product } from '$lib/data/mock.js';
	import {
		Star,
		ShoppingCart,
		Heart,
		BookOpen,
		Minus,
		Plus,
		Check,
		ChevronLeft,
		ArrowRight,
		Truck,
		Shield,
		RotateCcw,
		Package
	} from 'lucide-svelte';

	let { data } = $props();
	let product: Product = $derived(data.product);

	let quantity = $state(1);
	let selectedImageIndex = $state(0);
	let sponsorOption = $state(false);

	function decrementQty() {
		if (quantity > 1) quantity--;
	}

	function incrementQty() {
		if (quantity < 10) quantity++;
	}

	// Product features (mock)
	const features = [
		'Beautifully designed with full-color illustrations',
		'Written by acclaimed Islamic educator Dr. Asad Tarsin',
		'Practical guidance for daily Muslim life',
		'Covers the five pillars, prayer, fasting, and more',
		'Suitable for new Muslims and those reconnecting with faith',
		'Available in multiple languages'
	];

	// Mock reviews
	const reviews = [
		{
			id: 1,
			name: 'Aminah R.',
			rating: 5,
			date: 'January 15, 2026',
			text: 'This book changed my life. As a new Muslim, I was overwhelmed with information from different sources. Being Muslim organized everything beautifully and made me feel like I had a knowledgeable friend guiding me.',
			verified: true
		},
		{
			id: 2,
			name: 'Omar K.',
			rating: 5,
			date: 'January 3, 2026',
			text: 'I bought this for my wife who recently converted, and she reads it every day. The prayer section is especially helpful — clear, step-by-step, and non-judgmental. Highly recommend.',
			verified: true
		},
		{
			id: 3,
			name: 'Sarah M.',
			rating: 4,
			date: 'December 20, 2025',
			text: 'Great resource for beginners. The writing is warm and accessible. I would love to see more content on community building in future editions, but overall this is the best introductory book I have found.',
			verified: true
		},
		{
			id: 4,
			name: 'Ibrahim J.',
			rating: 5,
			date: 'December 8, 2025',
			text: 'I have been Muslim my whole life but bought this to understand what new converts experience. It gave me so much appreciation and also taught me things I did not know. Beautiful book inside and out.',
			verified: false
		}
	];

	const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

	// Related products
	const relatedProducts = products.filter((p) => p.handle !== product.handle).slice(0, 3);
</script>

<svelte:head>
	<title>{product.title} — Being Muslim Shop</title>
	<meta name="description" content={product.description} />
</svelte:head>

<!-- ============================== -->
<!-- BREADCRUMB                     -->
<!-- ============================== -->
<div class="bg-secondary/50 py-3">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<nav class="flex items-center gap-2 text-sm text-text-secondary">
			<a href="{base}/shop" class="inline-flex items-center gap-1 transition-colors hover:text-accent-primary">
				<ChevronLeft class="h-4 w-4" />
				Back to Shop
			</a>
			<span>/</span>
			<span class="text-text-primary">{product.title}</span>
		</nav>
	</div>
</div>

<!-- ============================== -->
<!-- PRODUCT DETAIL                 -->
<!-- ============================== -->
<Section>
	<div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
		<!-- LEFT: Image Gallery -->
		<div>
			<!-- Main Image -->
			<div
				class="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-accent-primary/10 to-accent-gold/10"
			>
				<div class="flex h-full flex-col items-center justify-center text-center">
					<BookOpen class="h-24 w-24 text-accent-primary/30" />
					<p class="mt-4 font-display text-lg font-semibold text-accent-primary/40">
						Product Image
					</p>
				</div>
			</div>

			<!-- Thumbnail Strip -->
			<div class="mt-4 flex gap-3">
				{#each [0, 1, 2, 3] as idx}
					<button
						onclick={() => (selectedImageIndex = idx)}
						class="aspect-square w-20 overflow-hidden rounded-lg border-2 bg-gradient-to-br from-accent-primary/5 to-accent-gold/5 transition-all {selectedImageIndex ===
						idx
							? 'border-accent-primary'
							: 'border-border hover:border-accent-primary/30'}"
					>
						<div class="flex h-full items-center justify-center">
							<BookOpen class="h-6 w-6 text-accent-primary/20" />
						</div>
					</button>
				{/each}
			</div>
		</div>

		<!-- RIGHT: Product Details -->
		<div>
			<!-- Badge & Category -->
			<div class="flex items-center gap-2">
				{#if product.badge}
					<Badge variant="gold">
						{#snippet children()}{product.badge}{/snippet}
					</Badge>
				{/if}
				<Badge variant="secondary">
					{#snippet children()}{product.category}{/snippet}
				</Badge>
			</div>

			<!-- Title -->
			<h1 class="mt-4 font-display text-3xl font-bold sm:text-4xl">{product.title}</h1>

			<!-- Rating -->
			<div class="mt-3 flex items-center gap-3">
				<div class="flex items-center gap-0.5">
					{#each Array(5) as _, idx}
						<Star
							class="h-5 w-5 {idx < Math.floor(product.rating)
								? 'fill-accent-gold text-accent-gold'
								: 'text-border'}"
						/>
					{/each}
				</div>
				<span class="text-sm font-medium">{product.rating}</span>
				<a href="#reviews" class="text-sm text-text-secondary hover:text-accent-primary hover:underline">
					({product.reviewCount} reviews)
				</a>
			</div>

			<!-- Price -->
			<div class="mt-4 flex items-baseline gap-3">
				<span class="font-display text-3xl font-bold text-accent-primary">
					${product.price.toFixed(2)}
				</span>
				{#if product.compareAtPrice}
					{@const comparePrice = product.compareAtPrice}
					<span class="text-lg text-text-secondary line-through">
						${comparePrice.toFixed(2)}
					</span>
					<Badge variant="green">
						{#snippet children()}
							Save ${(comparePrice - product.price).toFixed(2)}
						{/snippet}
					</Badge>
				{/if}
			</div>

			<!-- Description -->
			<p class="mt-6 text-base leading-relaxed text-text-secondary">{product.description}</p>

			<Separator class="my-6" />

			<!-- Quantity Selector -->
			<div class="flex flex-col gap-4 sm:flex-row sm:items-center">
				<div class="flex items-center gap-1">
					<span class="mr-3 text-sm font-medium">Quantity</span>
					<button
						onclick={decrementQty}
						disabled={quantity <= 1}
						class="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
						aria-label="Decrease quantity"
					>
						<Minus class="h-4 w-4" />
					</button>
					<span
						class="flex h-10 w-12 items-center justify-center rounded-lg border border-border bg-surface text-sm font-semibold"
					>
						{quantity}
					</span>
					<button
						onclick={incrementQty}
						disabled={quantity >= 10}
						class="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
						aria-label="Increase quantity"
					>
						<Plus class="h-4 w-4" />
					</button>
				</div>
			</div>

			<!-- Action Buttons -->
			<div class="mt-6 flex flex-col gap-3 sm:flex-row">
				<Button
					size="lg"
					class="flex-1 bg-accent-primary text-text-cream hover:bg-accent-hover"
					disabled={!product.inStock}
				>
					{#snippet children()}
						<ShoppingCart class="h-5 w-5" />
						{product.inStock ? 'Add to Cart' : 'Out of Stock'}
					{/snippet}
				</Button>
			</div>

			<!-- Sponsor Option -->
			<button
				onclick={() => (sponsorOption = !sponsorOption)}
				class="mt-4 flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-all {sponsorOption
					? 'border-accent-gold bg-accent-gold/5'
					: 'border-border hover:border-accent-gold/30'}"
			>
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full {sponsorOption
						? 'bg-accent-gold text-bg-dark'
						: 'bg-accent-gold/15 text-accent-gold'}"
				>
					<Heart class="h-5 w-5" />
				</div>
				<div class="flex-1">
					<p class="text-sm font-semibold">Sponsor this for a new Muslim</p>
					<p class="text-xs text-text-secondary">
						Add ${product.price.toFixed(2)} to send this to someone beginning their journey
					</p>
				</div>
				<div
					class="flex h-5 w-5 items-center justify-center rounded-full border-2 {sponsorOption
						? 'border-accent-gold bg-accent-gold'
						: 'border-border'}"
				>
					{#if sponsorOption}
						<Check class="h-3 w-3 text-bg-dark" />
					{/if}
				</div>
			</button>

			<Separator class="my-6" />

			<!-- Trust Signals -->
			<div class="grid grid-cols-3 gap-4">
				<div class="flex flex-col items-center text-center">
					<Truck class="h-5 w-5 text-accent-green" />
					<span class="mt-1.5 text-xs text-text-secondary">Free Shipping</span>
				</div>
				<div class="flex flex-col items-center text-center">
					<Shield class="h-5 w-5 text-accent-green" />
					<span class="mt-1.5 text-xs text-text-secondary">Secure Checkout</span>
				</div>
				<div class="flex flex-col items-center text-center">
					<RotateCcw class="h-5 w-5 text-accent-green" />
					<span class="mt-1.5 text-xs text-text-secondary">30-Day Returns</span>
				</div>
			</div>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- PRODUCT FEATURES               -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="mx-auto max-w-3xl">
		<h2 class="font-display text-2xl font-bold sm:text-3xl">Product Features</h2>
		<ul class="mt-8 space-y-4">
			{#each features as feature}
				<li class="flex items-start gap-3">
					<div
						class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-green/15"
					>
						<Check class="h-3 w-3 text-accent-green" />
					</div>
					<span class="text-text-secondary">{feature}</span>
				</li>
			{/each}
		</ul>
	</div>
</Section>

<!-- ============================== -->
<!-- REVIEWS SECTION                -->
<!-- ============================== -->
<Section id="reviews">
	<div class="mx-auto max-w-3xl">
		<div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h2 class="font-display text-2xl font-bold sm:text-3xl">Customer Reviews</h2>
				<div class="mt-2 flex items-center gap-3">
					<div class="flex items-center gap-0.5">
						{#each Array(5) as _, idx}
							<Star
								class="h-5 w-5 {idx < Math.floor(averageRating)
									? 'fill-accent-gold text-accent-gold'
									: 'text-border'}"
							/>
						{/each}
					</div>
					<span class="text-sm text-text-secondary">
						Based on {product.reviewCount} reviews
					</span>
				</div>
			</div>
			<Button variant="outline">
				{#snippet children()}Write a Review{/snippet}
			</Button>
		</div>

		<div class="mt-8 space-y-6">
			{#each reviews as review}
				<div class="rounded-xl border border-border bg-surface p-6">
					<div class="flex items-start justify-between">
						<div>
							<div class="flex items-center gap-2">
								<span class="font-semibold">{review.name}</span>
								{#if review.verified}
									<Badge variant="green">
										{#snippet children()}
											<Check class="mr-0.5 h-3 w-3" />
											Verified
										{/snippet}
									</Badge>
								{/if}
							</div>
							<div class="mt-1 flex items-center gap-2">
								<div class="flex items-center gap-0.5">
									{#each Array(5) as _, idx}
										<Star
											class="h-3.5 w-3.5 {idx < review.rating
												? 'fill-accent-gold text-accent-gold'
												: 'text-border'}"
										/>
									{/each}
								</div>
								<span class="text-xs text-text-secondary">{review.date}</span>
							</div>
						</div>
					</div>
					<p class="mt-3 text-sm leading-relaxed text-text-secondary">{review.text}</p>
				</div>
			{/each}
		</div>

		<div class="mt-8 text-center">
			<Button variant="outline">
				{#snippet children()}Load More Reviews{/snippet}
			</Button>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- RELATED PRODUCTS               -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<h2 class="font-display text-2xl font-bold sm:text-3xl">You might also like</h2>

	<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each relatedProducts as related}
			<a href="{base}/shop/{related.handle}" class="group">
				<div
					class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent-primary/30 hover:shadow-lg"
				>
					<div
						class="relative aspect-[4/3] bg-gradient-to-br from-accent-primary/10 to-accent-gold/10"
					>
						<div class="flex h-full items-center justify-center">
							<BookOpen class="h-10 w-10 text-accent-primary/30" />
						</div>
						{#if related.badge}
							<div class="absolute left-3 top-3">
								<Badge variant="gold">
									{#snippet children()}{related.badge}{/snippet}
								</Badge>
							</div>
						{/if}
					</div>
					<div class="flex flex-1 flex-col p-5">
						<h3
							class="font-display text-base font-semibold transition-colors group-hover:text-accent-primary"
						>
							{related.title}
						</h3>
						<div class="mt-2 flex items-center gap-1.5">
							<div class="flex items-center gap-0.5">
								{#each Array(5) as _, idx}
									<Star
										class="h-3.5 w-3.5 {idx < Math.floor(related.rating)
											? 'fill-accent-gold text-accent-gold'
											: 'text-border'}"
									/>
								{/each}
							</div>
							<span class="text-xs text-text-secondary">{related.rating}</span>
						</div>
						<div class="mt-auto pt-3">
							<span class="text-lg font-bold text-accent-primary">
								${related.price.toFixed(2)}
							</span>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>

	<div class="mt-8 text-center">
		<a
			href="{base}/shop"
			class="inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline"
		>
			View all products
			<ArrowRight class="h-4 w-4" />
		</a>
	</div>
</Section>
