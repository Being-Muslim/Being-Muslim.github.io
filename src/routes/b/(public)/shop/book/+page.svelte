<script lang="ts">
	import { ArrowLeft, ArrowRight, ShoppingCart } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Being Muslim: A Practical Guide — Being Muslim Shop</title>
	<meta
		name="description"
		content="The essential guide for new Muslims by Dr. Asad Tarsin. Clear, warm, and comprehensive — covering beliefs, prayer, fasting, and daily Muslim life."
	/>
</svelte:head>

<!-- Breadcrumb -->
<section style="background: #e9e3da; padding-top: 72px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10 py-4">
		<a
			href="/b/shop"
			style="color: #8a7e70; font-family: 'DM Sans', sans-serif;"
			class="inline-flex items-center gap-2 text-sm transition-colors hover:text-[#2a2018]"
		>
			<ArrowLeft class="h-4 w-4" />
			Back to Shop
		</a>
	</div>
</section>

<!-- Product Detail -->
<section style="background: #f0ebe3;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10 py-12">
		<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start;">
			<!-- Image -->
			<div style="background: #e2dcd2; border-radius: 16px; overflow: hidden; aspect-ratio: 3/4;">
				<img
					src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg"
					alt="Being Muslim: A Practical Guide"
					style="width: 100%; height: 100%; object-fit: cover; display: block;"
				/>
			</div>

			<!-- Details -->
			<div style="font-family: 'DM Sans', sans-serif;">
				<span
					style="background: rgba(196,169,125,0.2); color: #c4a97d;"
					class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-4"
				>
					Bestseller
				</span>

				<h1 style="font-family: 'Source Serif 4', serif; font-size: 36px; font-weight: 400; color: #2a2018; margin: 0 0 12px; line-height: 1.15;">
					Being Muslim: A Practical Guide
				</h1>

				<p style="font-size: 14px; color: #8a7e70; margin: 0 0 16px;">By Dr. Asad Tarsin</p>

				<p style="font-family: 'Source Serif 4', serif; font-size: 32px; font-weight: 400; color: #2a2018; margin: 0 0 24px;">
					$14.95
				</p>

				<p style="font-size: 15px; color: #5a5248; line-height: 1.7; margin: 0 0 24px;">
					The essential guide for new Muslims and anyone seeking a clear, warm, and comprehensive introduction to Islam. Written by acclaimed Islamic educator Dr. Asad Tarsin, this beautifully designed book covers the core beliefs and practices of Islam — from the five pillars and daily prayer to fasting, charity, and building a meaningful relationship with God. Whether you are a new convert, someone returning to the faith, or simply curious, this book meets you where you are.
				</p>

				<ul style="font-size: 14px; color: #5a5248; line-height: 2; margin: 0 0 32px; padding-left: 20px;">
					<li>Full-color illustrations throughout</li>
					<li>Step-by-step prayer guide</li>
					<li>Covers the five pillars in depth</li>
					<li>Written for new Muslims and reconnectors</li>
					<li>Available in multiple languages</li>
				</ul>

				<div style="display: flex; gap: 12px; margin-bottom: 24px;">
					<button class="bm-btn-dark" style="padding: 14px 32px; font-size: 15px;">
						<ShoppingCart class="h-4 w-4" />
						Add to Cart
					</button>
					<button class="bm-btn-outline" style="padding: 14px 32px; font-size: 15px;">
						Buy Now
					</button>
				</div>

				<div style="border-top: 1px solid #d8d2c8; padding-top: 20px; display: flex; gap: 24px; font-size: 13px; color: #8a7e70;">
					<span>Free shipping over $50</span>
					<span>30-day returns</span>
					<span>Secure checkout</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Related Products -->
<section style="background: #fff; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 style="font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #2a2018; margin: 0 0 24px;">
			You might also like
		</h2>
		<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
			{#each [
				{ title: 'The Complete Boxed Set', price: '$85.00', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg', href: '/b/shop/boxed-set' },
				{ title: 'Prayer Reference Cards', price: '$37.50', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg', href: '/b/shop/prayer-cards' },
				{ title: 'Digital Edition (eBook)', price: '$9.00', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png', href: '/b/shop/ebook' }
			] as product}
				<a href={product.href} style="text-decoration: none;" class="bm-title-underline-parent group">
					<div style="aspect-ratio: 1; background: #e2dcd2; border-radius: 12px; overflow: hidden; margin-bottom: 12px;">
						<img src={product.img} alt={product.title} class="transition-transform duration-500 group-hover:scale-105" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
					</div>
					<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 400; color: #2a2018; margin: 0 0 4px;">{product.title}</h3>
					<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018;">{product.price}</span>
				</a>
			{/each}
		</div>
	</div>
</section>
