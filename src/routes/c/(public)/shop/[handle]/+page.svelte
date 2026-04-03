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
		RotateCcw,
		Package
	} from 'lucide-svelte';

	let { data } = $props();
	let product: Product = $derived(data.product);

	let quantity = $state(1);
	let selectedImageIndex = $state(0);
	let sponsorOption = $state(false);

	// Product variants from beingmuslim.org
	interface Variant { label: string; price: number; }
	interface OptionGroup { name: string; options: Variant[]; }

	const productOptions: Record<string, OptionGroup[]> = {
		'being-muslim-book': [
			{ name: 'Format', options: [
				{ label: 'Paperback', price: 14.95 },
				{ label: 'eBook', price: 9.00 }
			]},
			{ name: 'Language', options: [
				{ label: 'English', price: 0 },
				{ label: 'Spanish', price: 0 }
			]}
		],
		'being-muslim-boxed-set': [
			{ name: 'Language', options: [
				{ label: 'English', price: 0 }
			]}
		],
		'prayer-cards': [
			{ name: 'Language', options: [
				{ label: 'English (25-pack)', price: 37.50 },
				{ label: 'Spanish (25-pack)', price: 37.50 }
			]}
		],
		'being-muslim-ebook': [
			{ name: 'Language', options: [
				{ label: 'English', price: 9.00 },
				{ label: 'Spanish', price: 7.00 }
			]}
		],
		'being-muslim-spanish': [
			{ name: 'Language', options: [
				{ label: 'Spanish', price: 7.00 }
			]}
		]
	};

	let options = $derived(productOptions[product.handle] ?? []);

	// Track selected option per group
	let selections = $state<Record<string, number>>({});

	function selectOption(groupName: string, idx: number) {
		selections = { ...selections, [groupName]: idx };
	}

	function getSelection(groupName: string): number {
		return selections[groupName] ?? 0;
	}

	function decrementQty() {
		if (quantity > 1) quantity--;
	}

	function incrementQty() {
		if (quantity < 10) quantity++;
	}

	// Per-product gallery images from beingmuslim.org
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

	// Per-product features from beingmuslim.org
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

	// Mock reviews
	const reviews = [
		{ id: 1, name: 'Aminah R.', rating: 5, date: 'January 15, 2026', text: 'This book changed my life. As a new Muslim, I was overwhelmed with information from different sources. Being Muslim organized everything beautifully and made me feel like I had a knowledgeable friend guiding me.', verified: true },
		{ id: 2, name: 'Omar K.', rating: 5, date: 'January 3, 2026', text: 'I bought this for my wife who recently converted, and she reads it every day. The prayer section is especially helpful — clear, step-by-step, and non-judgmental. Highly recommend.', verified: true },
		{ id: 3, name: 'Sarah M.', rating: 4, date: 'December 20, 2025', text: 'Great resource for beginners. The writing is warm and accessible. I would love to see more content on community building in future editions, but overall this is the best introductory book I have found.', verified: true },
		{ id: 4, name: 'Ibrahim J.', rating: 5, date: 'December 8, 2025', text: 'I have been Muslim my whole life but bought this to understand what new converts experience. It gave me so much appreciation and also taught me things I did not know. Beautiful book inside and out.', verified: false }
	];

	const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

	// Related products
	const relatedProducts = $derived(products.filter((p) => p.handle !== product.handle).slice(0, 3));
</script>

<svelte:head>
	<title>{product.title} — Being Muslim Shop</title>
	<meta name="description" content={product.description} />
</svelte:head>

<!-- ============================== -->
<!-- BREADCRUMB                     -->
<!-- ============================== -->
<div style="background: #f4f1eb; padding: 110px 0 12px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<nav style="display: flex; align-items: center; gap: 8px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70;">
			<a href="/c/shop" class="bm-view-all" style="display: inline-flex; align-items: center; gap: 4px; color: #8a7e70; text-decoration: none;">
				<ChevronLeft style="width: 16px; height: 16px;" />
				Back to Shop
			</a>
			<span>/</span>
			<span style="color: #2a2018;">{product.title}</span>
		</nav>
	</div>
</div>

<!-- ============================== -->
<!-- PRODUCT DETAIL                 -->
<!-- ============================== -->
<section style="background: #faf9f5; padding: 40px 0 64px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="bm-grid-product">
			<!-- LEFT: Image Gallery -->
			<div>
				<!-- Main Image -->
				<div style="aspect-ratio: 1; overflow: hidden; border-radius: 16px; background: #e2dcd2;">
					{#if currentImage}
						<img src={currentImage} alt={product.title} style="width: 100%; height: 100%; object-fit: cover; display: block;" />
					{:else}
						<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
							<BookOpen style="width: 96px; height: 96px; color: rgba(200,184,160,0.3);" />
							<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 600; color: rgba(200,184,160,0.4); margin-top: 16px;">Product Image</p>
						</div>
					{/if}
				</div>

				<!-- Thumbnail Strip -->
				{#if gallery.length > 1}
					<div style="margin-top: 16px; display: flex; gap: 12px;">
						{#each gallery as thumb, idx}
							<button
								onclick={() => (selectedImageIndex = idx)}
								style="aspect-ratio: 1; width: 80px; overflow: hidden; border-radius: 10px; border: 2px solid {selectedImageIndex === idx ? '#2a2018' : '#d8d2c8'}; background: #e2dcd2; cursor: pointer; transition: border-color 0.2s;"
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

				<!-- Title -->
				<h1 style="font-family: 'Source Serif 4', serif; font-size: clamp(28px, 3.5vw, 38px); font-weight: 400; color: #2a2018; margin: 16px 0 0; line-height: 1.15;">{product.title}</h1>

				<!-- Rating -->
				<div style="display: flex; align-items: center; gap: 10px; margin-top: 12px;">
					<div style="display: flex; gap: 2px;">
						{#each Array(5) as _, idx}
							<Star style="width: 18px; height: 18px; {idx < Math.floor(product.rating) ? 'fill: #d4a843; color: #d4a843;' : 'color: #d8d2c8;'}" />
						{/each}
					</div>
					<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018;">{product.rating}</span>
					<a href="#reviews" style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; text-decoration: none;" class="bm-view-all">
						({product.reviewCount} reviews)
					</a>
				</div>

				<!-- Price -->
				<div style="display: flex; align-items: baseline; gap: 12px; margin-top: 16px;">
					<span style="font-family: 'DM Sans', sans-serif; font-size: 30px; font-weight: 700; color: #2a2018;">
						${product.price.toFixed(2)}
					</span>
					{#if product.compareAtPrice}
						<span style="font-family: 'DM Sans', sans-serif; font-size: 18px; color: #8a7e70; text-decoration: line-through;">
							${product.compareAtPrice.toFixed(2)}
						</span>
					{/if}
				</div>

				<!-- Description -->
				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; line-height: 1.7; color: #5a5248; margin: 24px 0 0;">{product.description}</p>

				<!-- Variant Options -->
				{#if options.length > 0}
					<div style="margin-top: 24px; display: flex; flex-direction: column; gap: 20px;">
						{#each options as group}
							{#if group.options.length > 1}
								<div>
									<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; color: #2a2018; display: block; margin-bottom: 8px;">{group.name}</span>
									<div style="display: flex; gap: 8px; flex-wrap: wrap;">
										{#each group.options as option, idx}
											<button
												onclick={() => selectOption(group.name, idx)}
												style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; padding: 8px 18px; border-radius: 999px; cursor: pointer; transition: all 0.2s; border: 1.5px solid {getSelection(group.name) === idx ? '#2a2018' : '#d8d2c8'}; background: {getSelection(group.name) === idx ? '#2a2018' : '#fff'}; color: {getSelection(group.name) === idx ? '#fff' : '#2a2018'};"
											>
												{option.label}{option.price > 0 ? ` · $${option.price.toFixed(2)}` : ''}
											</button>
										{/each}
									</div>
								</div>
							{/if}
						{/each}
					</div>
				{/if}

				<div style="height: 1px; background: #e8e3da; margin: 24px 0;"></div>

				<!-- Quantity Selector -->
				<div style="display: flex; align-items: center; gap: 4px;">
					<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018; margin-right: 12px;">Quantity</span>
					<button onclick={decrementQty} disabled={quantity <= 1} style="width: 40px; height: 40px; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; opacity: {quantity <= 1 ? '0.4' : '1'};">
						<Minus style="width: 16px; height: 16px; color: #2a2018;" />
					</button>
					<span style="width: 48px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #2a2018;">
						{quantity}
					</span>
					<button onclick={incrementQty} disabled={quantity >= 10} style="width: 40px; height: 40px; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; opacity: {quantity >= 10 ? '0.4' : '1'};">
						<Plus style="width: 16px; height: 16px; color: #2a2018;" />
					</button>
				</div>

				<!-- Action Buttons -->
				<div style="margin-top: 24px;">
					<button class="bm-btn-dark" style="width: 100%; padding: 16px; font-size: 15px; justify-content: center;" disabled={!product.inStock}>
						<ShoppingCart style="width: 18px; height: 18px;" />
						{product.inStock ? 'Add to Cart' : 'Out of Stock'}
					</button>
				</div>

				<!-- Sponsor Option -->
				<button
					onclick={() => (sponsorOption = !sponsorOption)}
					style="margin-top: 16px; width: 100%; display: flex; align-items: center; gap: 12px; border-radius: 12px; border: 1px solid {sponsorOption ? '#c8b8a0' : '#e8e3da'}; background: {sponsorOption ? 'rgba(200,184,160,0.08)' : '#fff'}; padding: 16px; text-align: left; cursor: pointer; transition: all 0.2s;"
				>
					<div style="width: 40px; height: 40px; border-radius: 999px; background: {sponsorOption ? '#c8b8a0' : 'rgba(200,184,160,0.15)'}; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
						<Heart style="width: 20px; height: 20px; color: {sponsorOption ? '#2a2018' : '#c8b8a0'};" />
					</div>
					<div style="flex: 1;">
						<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #2a2018; margin: 0;">Sponsor this for a new Muslim</p>
						<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; margin: 2px 0 0;">Add ${product.price.toFixed(2)} to send this to someone beginning their journey</p>
					</div>
					<div style="width: 20px; height: 20px; border-radius: 999px; border: 2px solid {sponsorOption ? '#c8b8a0' : '#d8d2c8'}; background: {sponsorOption ? '#c8b8a0' : 'transparent'}; display: flex; align-items: center; justify-content: center;">
						{#if sponsorOption}
							<Check style="width: 12px; height: 12px; color: #2a2018;" />
						{/if}
					</div>
				</button>

				<div style="height: 1px; background: #e8e3da; margin: 24px 0;"></div>

				<!-- Trust Signals -->
				<div class="bm-grid-3" style="gap: 16px;">
					{#each [
						{ icon: Truck, label: 'Free Shipping' },
						{ icon: Shield, label: 'Secure Checkout' },
						{ icon: RotateCcw, label: '30-Day Returns' }
					] as signal}
						<div style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px;">
							<svelte:component this={signal.icon} style="width: 18px; height: 18px; color: #c8b8a0;" />
							<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70;">{signal.label}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- PRODUCT FEATURES               -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #f4f1eb;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(24px, 3vw, 30px); font-weight: 400; color: #2a2018; margin: 0 0 28px;">
			{product.handle === 'being-muslim-boxed-set' ? "What's Inside" : 'Product Features'}
		</h2>
		<div class="bm-grid-2-gap" style="gap: 16px 40px;">
			{#each features as feature}
				<div style="display: flex; align-items: start; gap: 12px;">
					<div style="width: 22px; height: 22px; border-radius: 999px; background: rgba(200,184,160,0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;">
						<Check style="width: 12px; height: 12px; color: #c8b8a0;" />
					</div>
					<span style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #5a5248; line-height: 1.5;">{feature}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- REVIEWS SECTION                -->
<!-- ============================== -->
<section id="reviews" class="bm-section-padding" style="background: #faf9f5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div>
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
				<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70;">
					Based on {product.reviewCount} reviews
				</span>
			</div>

			<div style="display: flex; gap: 16px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; padding-bottom: 4px;">
			{#each reviews as review}
				<div style="border: 1px solid #e8e3da; border-radius: 12px; background: #fff; padding: 24px; flex: 0 0 calc(50% - 8px); min-width: 320px; scroll-snap-align: start;">
					<div style="display: flex; justify-content: space-between; align-items: start;">
						<div>
							<div style="display: flex; align-items: center; gap: 8px;">
								<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #2a2018;">{review.name}</span>
								{#if review.verified}
									<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; color: #c8b8a0; background: rgba(200,184,160,0.15); padding: 2px 8px; border-radius: 999px;">
										<Check style="width: 10px; height: 10px; display: inline; vertical-align: -1px;" /> Verified
									</span>
								{/if}
							</div>
							<div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">
								<div style="display: flex; gap: 2px;">
									{#each Array(5) as _, idx}
										<Star style="width: 13px; height: 13px; {idx < review.rating ? 'fill: #d4a843; color: #d4a843;' : 'color: #d8d2c8;'}" />
									{/each}
								</div>
								<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #a09888;">{review.date}</span>
							</div>
						</div>
					</div>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #5a5248; line-height: 1.65; margin: 12px 0 0;">{review.text}</p>
				</div>
			{/each}
			</div>

			<div style="text-align: center; margin-top: 24px;">
				<button class="bm-btn-outline" style="padding: 10px 24px; font-size: 13px;">Load More Reviews</button>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- RELATED PRODUCTS               -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #f4f1eb;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(24px, 3vw, 30px); font-weight: 400; color: #2a2018; margin: 0 0 28px;">You might also like</h2>

		<div class="bm-grid-3" style="gap: 24px;">
			{#each relatedProducts as related}
				<a href="/c/shop/{related.handle}" style="text-decoration: none; display: block;" class="bm-title-underline-parent group">
					<div class="bm-card-hover" style="background: #fff; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column;">
						<div style="aspect-ratio: 4/3; background: #e2dcd2; position: relative; overflow: hidden;">
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
						<div style="padding: 20px; flex: 1; display: flex; flex-direction: column;">
							<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 400; color: #2a2018; margin: 0 0 6px; line-height: 1.3;">{related.title}</h3>
							<div style="display: flex; align-items: center; gap: 4px; margin-bottom: 8px;">
								<div style="display: flex; gap: 1px;">
									{#each Array(5) as _, idx}
										<Star style="width: 12px; height: 12px; {idx < Math.floor(related.rating) ? 'fill: #d4a843; color: #d4a843;' : 'color: #d8d2c8;'}" />
									{/each}
								</div>
								<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70;">{related.rating}</span>
							</div>
							<span style="font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 600; color: #2a2018; margin-top: auto;">${related.price.toFixed(2)}</span>
						</div>
					</div>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 32px;">
			<a href="/c/shop" class="bm-view-all" style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
				View all products <ArrowRight style="width: 16px; height: 16px;" />
			</a>
		</div>
	</div>
</section>
