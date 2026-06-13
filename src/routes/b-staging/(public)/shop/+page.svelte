<script lang="ts">
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

	const productImages: Record<string, string> = {
		'being-muslim-book': 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg',
		'being-muslim-boxed-set': 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x563.jpeg',
		'prayer-cards': 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg',
		'being-muslim-ebook': 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png',
		'being-muslim-spanish': 'https://www.beingmuslim.org/wp-content/uploads/2021/08/Spanish-E-Book-900x1200.png'
	};

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
		content="Browse books, boxed sets, prayer cards, and digital resources to support your journey."
	/>
</svelte:head>

<!-- ============================== -->
<!-- HERO SECTION                   -->
<!-- ============================== -->
<section style="background: #2a2018; padding: 80px 0 64px; position: relative; overflow: hidden;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10" style="text-align: center; position: relative; z-index: 1;">
		<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #c8b8a0; text-transform: uppercase; letter-spacing: 1.5px; display: inline-flex; align-items: center; gap: 6px;">
			<Package class="h-3 w-3" />
			Free shipping on orders over $50
		</span>
		<h1 style="font-family: 'Source Serif 4', serif; font-size: clamp(32px, 5vw, 48px); font-weight: 400; color: #fff; margin: 20px 0 16px; line-height: 1.1;">
			Shop
		</h1>
		<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; color: rgba(255,255,255,0.65); max-width: 520px; margin: 0 auto; line-height: 1.6;">
			Beautifully crafted resources to support your journey — from bestselling books to prayer essentials.
		</p>
		<div style="margin-top: 20px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
			<a href="/b-staging/contact" class="bm-btn-glass" style="padding: 10px 24px; font-size: 13px;">
				Bulk &amp; Institutional Orders <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- FILTERS & SEARCH               -->
<!-- ============================== -->
<section style="background: #faf9f5; padding: 48px 0 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between; align-items: center;">
			<!-- Category Pills -->
			<div style="display: flex; flex-wrap: wrap; gap: 8px;">
				{#each categories as category}
					<button
						onclick={() => (activeCategory = category)}
						style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; padding: 8px 18px; border-radius: 999px; cursor: pointer; transition: all 0.2s; border: 1px solid {activeCategory === category ? '#2a2018' : '#d8d2c8'}; background: {activeCategory === category ? '#2a2018' : 'transparent'}; color: {activeCategory === category ? '#fff' : '#2a2018'};"
					>
						{category}
					</button>
				{/each}
			</div>

			<!-- Search -->
			<div style="position: relative;">
				<Search class="h-4 w-4" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #8a7e70;" />
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search products..."
					style="font-family: 'DM Sans', sans-serif; font-size: 14px; height: 40px; width: 240px; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; padding-left: 36px; padding-right: 16px; color: #2a2018; outline: none;"
				/>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- PRODUCT GRID                   -->
<!-- ============================== -->
<section style="background: #faf9f5; padding: 32px 0 64px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		{#if filteredProducts.length === 0}
			<div style="text-align: center; padding: 64px 0;">
				<Package class="h-16 w-16" style="color: #d8d2c8; margin: 0 auto;" />
				<h3 style="font-family: 'Source Serif 4', serif; font-size: 20px; color: #2a2018; margin: 16px 0 8px;">No products found</h3>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70;">Try adjusting your search or filter criteria.</p>
				<button
					onclick={() => { activeCategory = 'All'; searchQuery = ''; }}
					class="bm-btn-outline"
					style="margin-top: 20px; padding: 10px 24px;"
				>
					Clear Filters
				</button>
			</div>
		{:else}
			<div class="bm-grid-4" style="gap: 24px; margin-top: 8px;">
				{#each filteredProducts as product, i}
					<!-- Sponsor Banner (after 2nd product) -->
					{#if i === 2}
						<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 12px; background: #f4f1eb; padding: 32px; text-align: center;">
							<div style="width: 48px; height: 48px; border-radius: 999px; background: rgba(200,184,160,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
								<Heart class="h-6 w-6" style="color: #c8b8a0;" />
							</div>
							<h3 style="font-family: 'Source Serif 4', serif; font-size: 18px; color: #2a2018; margin: 0 0 8px;">Sponsor a New Muslim</h3>
							<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; line-height: 1.5; margin: 0 0 16px;">Gift a boxed set to someone beginning their journey.</p>
							<a href="/b-staging/give" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;" class="bm-view-all">
								Learn more <ArrowRight class="h-3.5 w-3.5" />
							</a>
						</div>
					{/if}

					<!-- Product Card -->
					<a href="/b-staging/shop/{product.handle}" style="text-decoration: none; display: block;" class="bm-title-underline-parent group">
						<div class="bm-card-hover" style="background: #fff; border-radius: 12px; overflow: hidden; height: 100%; display: flex; flex-direction: column;">
							<!-- Image -->
							<div style="aspect-ratio: 4/3; background: #e2dcd2; position: relative; overflow: hidden;">
								{#if productImages[product.handle]}
									<img src={productImages[product.handle]} alt={product.title} class="transition-transform duration-500 group-hover:scale-105" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
								{:else}
									<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
										<BookOpen class="h-12 w-12" style="color: #c8c0b4;" />
									</div>
								{/if}
								{#if product.badge}
									<span style="position: absolute; top: 12px; left: 12px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; color: #2a2018; background: #fff; padding: 3px 10px; border-radius: 999px;">{product.badge}</span>
								{/if}
								{#if !product.inStock}
									<div style="position: absolute; inset: 0; background: rgba(42,32,24,0.5); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center;">
										<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #fff; background: rgba(42,32,24,0.8); padding: 4px 14px; border-radius: 999px;">Out of Stock</span>
									</div>
								{/if}
							</div>

							<!-- Product Info -->
							<div style="padding: 20px; flex: 1; display: flex; flex-direction: column;">
								<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 400; color: #2a2018; margin: 0 0 8px; line-height: 1.3;">
									{product.title}
								</h3>

								<!-- Rating -->
								<div style="display: flex; align-items: center; gap: 6px; margin-bottom: 10px;">
									<div style="display: flex; gap: 2px;">
										{#each Array(5) as _, idx}
											<Star class="h-3.5 w-3.5 {idx < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : ''}" style="{idx >= Math.floor(product.rating) ? 'color: #d8d2c8;' : ''}" />
										{/each}
									</div>
									<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70;">
										{product.rating} ({product.reviewCount})
									</span>
								</div>

								<!-- Price -->
								<div style="display: flex; align-items: center; gap: 8px; margin-top: auto;">
									<span style="font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 600; color: #2a2018;">
										${product.price.toFixed(2)}
									</span>
									{#if product.compareAtPrice}
										<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; text-decoration: line-through;">
											${product.compareAtPrice.toFixed(2)}
										</span>
									{/if}
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- ============================== -->
<!-- SPONSOR CALLOUT BANNER         -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #2a2018;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: flex; align-items: center; gap: 48px; flex-wrap: wrap; justify-content: center;">
			<div style="width: 80px; height: 80px; border-radius: 999px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
				<Heart class="h-10 w-10" style="color: #c8b8a0;" />
			</div>
			<div style="flex: 1; min-width: 280px;">
				<h2 style="font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #fff; margin: 0 0 8px; line-height: 1.2;">
					Sponsor this for a new Muslim
				</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.6; margin: 0;">
					Many new Muslims cannot afford the resources they need. Your sponsorship puts a complete Being Muslim boxed set in their hands — a gift that transforms lives.
				</p>
			</div>
			<a href="/b-staging/give" class="bm-btn-white" style="flex-shrink: 0;">
				Sponsor Now <Heart class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>
