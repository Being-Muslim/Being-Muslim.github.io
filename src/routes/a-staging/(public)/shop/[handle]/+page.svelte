<script lang="ts">
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
		RotateCcw
	} from 'lucide-svelte';

	let { data } = $props();
	let product: Product = $derived(data.product);

	let quantity = $state(1);
	let selectedImageIndex = $state(0);

	// Product variants
	interface Variant { label: string; price: number; }
	interface OptionGroup { name: string; options: Variant[]; }

	const productOptions: Record<string, OptionGroup[]> = {
		'being-muslim-book': [
			{ name: 'Format', options: [
				{ label: 'Paperback — $14.95', price: 14.95 },
				{ label: 'eBook — $9.00', price: 9.00 }
			]},
			{ name: 'Language', options: [
				{ label: 'English', price: 0 },
				{ label: 'Spanish', price: 0 }
			]}
		],
		'being-muslim-boxed-set': [
			{ name: 'Language', options: [{ label: 'English', price: 0 }] }
		],
		'prayer-cards': [
			{ name: 'Language', options: [
				{ label: 'English (25-pack) — $37.50', price: 37.50 },
				{ label: 'Spanish (25-pack) — $37.50', price: 37.50 }
			]}
		],
		'being-muslim-ebook': [
			{ name: 'Language', options: [
				{ label: 'English — $9.00', price: 9.00 },
				{ label: 'Spanish — $7.00', price: 7.00 }
			]}
		],
		'being-muslim-spanish': [
			{ name: 'Language', options: [{ label: 'Spanish — $7.00', price: 7.00 }] }
		]
	};

	let options = $derived(productOptions[product.handle] ?? []);
	let selections = $state<Record<string, number>>({});
	function getSelection(groupName: string): number { return selections[groupName] ?? 0; }

	function decrementQty() { if (quantity > 1) quantity--; }
	function incrementQty() { if (quantity < 10) quantity++; }

	// Per-product gallery images
	const productGalleries: Record<string, string[]> = {
		'being-muslim-book': [
			'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg',
			'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png',
			'https://www.beingmuslim.org/wp-content/uploads/2021/08/Spanish-E-Book-900x1200.png'
		],
		'being-muslim-boxed-set': [
			'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x563.jpeg',
			'https://www.beingmuslim.org/wp-content/uploads/2021/08/box-ontable_2-wide-header-e1589251789625.jpeg',
			'https://www.beingmuslim.org/wp-content/uploads/2020/04/open-box-1-e1587881495483-900x616.jpg'
		],
		'prayer-cards': [
			'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg',
			'https://www.beingmuslim.org/wp-content/uploads/2025/04/Prayer-Card-Spanish.png'
		],
		'being-muslim-ebook': [
			'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png',
			'https://www.beingmuslim.org/wp-content/uploads/2021/08/Spanish-E-Book-900x1200.png'
		],
		'being-muslim-spanish': [
			'https://www.beingmuslim.org/wp-content/uploads/2021/08/Spanish-E-Book-900x1200.png',
			'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png'
		]
	};

	let gallery = $derived(productGalleries[product.handle] ?? []);
	let currentImage = $derived(gallery[selectedImageIndex] ?? gallery[0] ?? '');

	// Per-product features
	const productFeatures: Record<string, string[]> = {
		'being-muslim-book': [
			'Written by acclaimed Islamic educator Dr. Asad Tarsin',
			'Assumes no background knowledge — perfect for complete beginners',
			'Covers the five pillars, daily prayer, fasting, and more',
			'Available in English paperback, English eBook, and Spanish eBook',
			'Full-color illustrations throughout',
			'Dimensions: 9 × 6 × 1.10 in · Weight: 1.05 lbs'
		],
		'being-muslim-boxed-set': [
			'Quran translation',
			'Prophet Muhammad biography',
			'Purification of the Heart by Hamza Yusuf',
			'Being Muslim: A Practical Guide by Asad Tarsin',
			'Being Muslim Daily Prayer Pocket Reference',
			'Prayer rug',
			'Dimensions: 10 × 10 × 4 in · Weight: 5 lbs'
		],
		'prayer-cards': [
			'Pack of 25 pocket-sized reference cards',
			'Step-by-step daily prayer instructions',
			'Laminated for durability',
			'Available in English and Spanish',
			'Dimensions: 5 × 4 × 1.4 in · Weight: 0.7 lbs'
		],
		'being-muslim-ebook': [
			'Instant digital download after purchase',
			'Read on any device — phone, tablet, or computer',
			'Same complete content as the paperback edition',
			'Available in English and Spanish'
		],
		'being-muslim-spanish': [
			'Full Spanish translation of Being Muslim: A Practical Guide',
			'Digital format — read on any device',
			'Same comprehensive content as the English edition'
		]
	};

	let features = $derived(productFeatures[product.handle] ?? productFeatures['being-muslim-book']);

	const reviews = [
		{ id: 1, name: 'Aminah R.', rating: 5, date: 'January 15, 2026', text: 'This book changed my life. As a new Muslim, I was overwhelmed with information from different sources. Being Muslim organized everything beautifully and made me feel like I had a knowledgeable friend guiding me.', verified: true },
		{ id: 2, name: 'Omar K.', rating: 5, date: 'January 3, 2026', text: 'I bought this for my wife who recently converted, and she reads it every day. The prayer section is especially helpful — clear, step-by-step, and non-judgmental.', verified: true },
		{ id: 3, name: 'Sarah M.', rating: 4, date: 'December 20, 2025', text: 'Great resource for beginners. The writing is warm and accessible. I would love to see more content on community building in future editions.', verified: true },
		{ id: 4, name: 'Ibrahim J.', rating: 5, date: 'December 8, 2025', text: 'I have been Muslim my whole life but bought this to understand what new converts experience. It gave me so much appreciation and taught me things I did not know.', verified: false }
	];

	const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
	const relatedProducts = $derived(products.filter((p) => p.handle !== product.handle).slice(0, 3));
</script>

<svelte:head>
	<title>{product.title} — Being Muslim Shop</title>
	<meta name="description" content={product.description} />
</svelte:head>

<!-- ============================== -->
<!-- DARK BREADCRUMB BAR            -->
<!-- ============================== -->
<div style="background: #2a2018; padding-top: 72px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10" style="padding: 14px 0;">
		<nav style="display: flex; align-items: center; gap: 8px; font-family: 'DM Sans', sans-serif; font-size: 13px; color: rgba(255,255,255,0.5);">
			<a href="/a-staging/shop" style="display: inline-flex; align-items: center; gap: 4px; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s;" class="bm-view-all">
				<ChevronLeft style="width: 14px; height: 14px;" />
				Shop
			</a>
			<span>/</span>
			<span style="color: rgba(255,255,255,0.8);">{product.title}</span>
		</nav>
	</div>
</div>

<!-- ============================== -->
<!-- PRODUCT DETAIL                 -->
<!-- ============================== -->
<section style="background: #faf9f5; padding: 48px 0 64px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="bm-grid-product">
			<!-- LEFT: Vertical thumbnails + main image -->
			<div class="bm-gallery-layout">
				<!-- Vertical thumbnail strip (desktop only) -->
				{#if gallery.length > 1}
					<div class="bm-gallery-thumbs-vertical">
						{#each gallery as thumb, idx}
							<button
								onclick={() => (selectedImageIndex = idx)}
								style="width: 72px; height: 72px; overflow: hidden; border-radius: 8px; border: 2px solid {selectedImageIndex === idx ? '#2a2018' : '#d8d2c8'}; background: #e2dcd2; cursor: pointer; transition: border-color 0.2s; flex-shrink: 0;"
							>
								<img src={thumb} alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
							</button>
						{/each}
					</div>
				{/if}

				<!-- Main Image -->
				<div class="bm-gallery-main" style="aspect-ratio: 1; overflow: hidden; border-radius: 12px; background: #e2dcd2;">
					{#if currentImage}
						<img src={currentImage} alt={product.title} style="width: 100%; height: 100%; object-fit: cover; display: block;" />
					{:else}
						<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
							<BookOpen style="width: 80px; height: 80px; color: rgba(200,184,160,0.3);" />
						</div>
					{/if}
				</div>

				<!-- Horizontal thumbnail strip (mobile only) -->
				{#if gallery.length > 1}
					<div class="bm-gallery-thumbs-horizontal">
						{#each gallery as thumb, idx}
							<button
								onclick={() => (selectedImageIndex = idx)}
								style="width: 60px; height: 60px; overflow: hidden; border-radius: 8px; border: 2px solid {selectedImageIndex === idx ? '#2a2018' : '#d8d2c8'}; background: #e2dcd2; cursor: pointer; transition: border-color 0.2s; flex-shrink: 0;"
							>
								<img src={thumb} alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
							</button>
						{/each}
					</div>
				{/if}
			</div>

			<!-- RIGHT: Product Details -->
			<div>
				<!-- Badge & Category -->
				<div style="display: flex; align-items: center; gap: 8px;">
					{#if product.badge}
						<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #c8b8a0; background: rgba(200,184,160,0.15); padding: 4px 12px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.5px;">{product.badge}</span>
					{/if}
					<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #8a7e70; background: #f4f1eb; padding: 4px 12px; border-radius: 999px;">{product.category}</span>
				</div>

				<h1 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3vw, 34px); font-weight: 400; color: #2a2018; margin: 14px 0 0; line-height: 1.15;">{product.title}</h1>

				<!-- Rating -->
				<div style="display: flex; align-items: center; gap: 8px; margin-top: 10px;">
					<div style="display: flex; gap: 2px;">
						{#each Array(5) as _, idx}
							<Star style="width: 16px; height: 16px; {idx < Math.floor(product.rating) ? 'fill: #d4a843; color: #d4a843;' : 'color: #d8d2c8;'}" />
						{/each}
					</div>
					<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018;">{product.rating}</span>
					<a href="#reviews" style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; text-decoration: none;" class="bm-view-all">({product.reviewCount} reviews)</a>
				</div>

				<!-- Price -->
				<p style="font-family: 'DM Sans', sans-serif; font-size: 28px; font-weight: 700; color: #2a2018; margin: 14px 0 0;">
					${product.price.toFixed(2)}
					{#if product.compareAtPrice}
						<span style="font-size: 16px; color: #8a7e70; text-decoration: line-through; margin-left: 8px;">${product.compareAtPrice.toFixed(2)}</span>
					{/if}
				</p>

				<!-- Sponsor inline banner -->
				<div style="background: #f4f1eb; border-radius: 10px; padding: 14px 18px; margin-top: 18px; display: flex; align-items: center; gap: 12px;">
					<Heart style="width: 18px; height: 18px; color: #c8b8a0; flex-shrink: 0;" />
					<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #5a5248; margin: 0; line-height: 1.4;">
						<strong style="color: #2a2018;">Sponsor this for a new Muslim</strong> — add ${product.price.toFixed(2)} to gift this to someone beginning their journey.
						<a href="/a-staging/support" style="color: #2a2018; text-decoration: underline; text-underline-offset: 2px;">Learn more</a>
					</p>
				</div>

				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; line-height: 1.7; color: #5a5248; margin: 20px 0 0;">{product.description}</p>

				<!-- Variant Options — Dropdowns -->
				{#if options.length > 0}
					<div style="margin-top: 20px; display: flex; gap: 16px; flex-wrap: wrap;">
						{#each options as group}
							{#if group.options.length > 1}
								<div style="flex: 1; min-width: 180px;">
									<label style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #2a2018; display: block; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">{group.name}</label>
									<select
										onchange={(e) => { selections = { ...selections, [group.name]: (e.target as HTMLSelectElement).selectedIndex }; }}
										style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; width: 100%; padding: 10px 14px; border-radius: 8px; border: 1px solid #d8d2c8; background: #fff; cursor: pointer; appearance: auto;"
									>
										{#each group.options as option}
											<option>{option.label}</option>
										{/each}
									</select>
								</div>
							{/if}
						{/each}
					</div>
				{/if}

				<div style="height: 1px; background: #e8e3da; margin: 22px 0;"></div>

				<!-- Quantity + Add to Cart -->
				<div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
					<div style="display: flex; align-items: center; gap: 2px;">
						<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin-right: 10px;">Qty</span>
						<button onclick={decrementQty} disabled={quantity <= 1} style="width: 36px; height: 36px; border-radius: 8px; border: 1px solid #d8d2c8; background: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; opacity: {quantity <= 1 ? '0.4' : '1'};">
							<Minus style="width: 14px; height: 14px; color: #2a2018;" />
						</button>
						<span style="width: 40px; height: 36px; display: flex; align-items: center; justify-content: center; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #2a2018;">{quantity}</span>
						<button onclick={incrementQty} disabled={quantity >= 10} style="width: 36px; height: 36px; border-radius: 8px; border: 1px solid #d8d2c8; background: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; opacity: {quantity >= 10 ? '0.4' : '1'};">
							<Plus style="width: 14px; height: 14px; color: #2a2018;" />
						</button>
					</div>
					<button class="bm-btn-dark" style="padding: 12px 32px; font-size: 14px; flex: 1;" disabled={!product.inStock}>
						<ShoppingCart style="width: 16px; height: 16px;" />
						{product.inStock ? 'Add to Cart' : 'Out of Stock'}
					</button>
				</div>

				<!-- Trust Signals -->
				<div style="display: flex; gap: 24px; margin-top: 20px;">
					{#each [
						{ icon: Truck, label: 'Free Shipping' },
						{ icon: Shield, label: 'Secure Checkout' },
						{ icon: RotateCcw, label: '30-Day Returns' }
					] as signal}
						<div style="display: flex; align-items: center; gap: 6px;">
							<svelte:component this={signal.icon} style="width: 15px; height: 15px; color: #c8b8a0;" />
							<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70;">{signal.label}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- PRODUCT FEATURES — NUMBERED    -->
<!-- ============================== -->
<section style="background: #f4f1eb; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(24px, 3vw, 30px); font-weight: 400; color: #2a2018; margin: 0 0 32px;">
			{product.handle === 'being-muslim-boxed-set' ? "What's Inside" : 'Product Features'}
		</h2>
		<div style="display: flex; flex-direction: column; gap: 0;">
			{#each features as feature, i}
				<div style="display: flex; align-items: start; gap: 16px; padding: 16px 0; {i > 0 ? 'border-top: 1px solid #e2dcd2;' : ''}">
					<span style="font-family: 'Source Serif 4', serif; font-size: 20px; font-weight: 400; color: #c8b8a0; width: 28px; flex-shrink: 0; text-align: right;">{i + 1}</span>
					<span style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #5a5248; line-height: 1.5;">{feature}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- REVIEWS — STACKED VERTICAL     -->
<!-- ============================== -->
<section id="reviews" style="background: #faf9f5; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(24px, 3vw, 30px); font-weight: 400; color: #2a2018; margin: 0;">Customer Reviews</h2>
			<button class="bm-btn-outline" style="padding: 8px 20px; font-size: 13px;">Write a Review</button>
		</div>
		<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 32px;">
			<div style="display: flex; gap: 2px;">
				{#each Array(5) as _, idx}
					<Star style="width: 16px; height: 16px; {idx < Math.floor(averageRating) ? 'fill: #d4a843; color: #d4a843;' : 'color: #d8d2c8;'}" />
				{/each}
			</div>
			<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70;">Based on {product.reviewCount} reviews</span>
		</div>

		<div style="max-width: 800px;">
			{#each reviews as review, i}
				<div style="padding: 24px 0; {i > 0 ? 'border-top: 1px solid #e8e3da;' : ''}">
					<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
						<div style="width: 36px; height: 36px; border-radius: 999px; background: {['#7a8b6e', '#a08b6e', '#6e7a8b', '#8b6e7a'][i]}; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
							<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; color: #fff;">{review.name[0]}</span>
						</div>
						<div>
							<div style="display: flex; align-items: center; gap: 8px;">
								<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #2a2018;">{review.name}</span>
								{#if review.verified}
									<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; color: #c8b8a0;">Verified</span>
								{/if}
							</div>
							<div style="display: flex; align-items: center; gap: 6px; margin-top: 2px;">
								<div style="display: flex; gap: 1px;">
									{#each Array(5) as _, idx}
										<Star style="width: 12px; height: 12px; {idx < review.rating ? 'fill: #d4a843; color: #d4a843;' : 'color: #d8d2c8;'}" />
									{/each}
								</div>
								<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; color: #a09888;">{review.date}</span>
							</div>
						</div>
					</div>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #5a5248; line-height: 1.65; margin: 0;">{review.text}</p>
				</div>
			{/each}
		</div>

		<div style="margin-top: 16px;">
			<button class="bm-btn-outline" style="padding: 10px 24px; font-size: 13px;">Load More Reviews</button>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- RELATED PRODUCTS               -->
<!-- ============================== -->
<section style="background: #f4f1eb; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 28px;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(24px, 3vw, 30px); font-weight: 400; color: #2a2018; margin: 0;">You might also like</h2>
			<a href="/a-staging/shop" class="bm-view-all" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
				All products <ArrowRight style="width: 14px; height: 14px;" />
			</a>
		</div>
		<div class="bm-grid-3" style="gap: 24px;">
			{#each relatedProducts as related}
				<a href="/a-staging/shop/{related.handle}" style="text-decoration: none; display: block;" class="bm-title-underline-parent group">
					<div class="bm-card-hover" style="background: #fff; border-radius: 12px; overflow: hidden;">
						<div style="aspect-ratio: 4/3; background: #e2dcd2; overflow: hidden;">
							{#if productGalleries[related.handle]?.[0]}
								<img src={productGalleries[related.handle][0]} alt={related.title} class="transition-transform duration-500 group-hover:scale-105" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
							{:else}
								<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
									<BookOpen style="width: 40px; height: 40px; color: rgba(200,184,160,0.3);" />
								</div>
							{/if}
							{#if related.badge}
								<span style="position: absolute; top: 12px; left: 12px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; color: #2a2018; background: #fff; padding: 3px 10px; border-radius: 999px;">{related.badge}</span>
							{/if}
						</div>
						<div style="padding: 20px;">
							<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 400; color: #2a2018; margin: 0 0 6px; line-height: 1.3;">{related.title}</h3>
							<span style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 600; color: #2a2018;">${related.price.toFixed(2)}</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
