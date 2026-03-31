<script lang="ts">
	import { ArrowLeft, ShoppingCart, Star, Heart } from 'lucide-svelte';
</script>

<svelte:head>
	<title>The Complete Boxed Set — Being Muslim Shop</title>
	<meta
		name="description"
		content="Everything you need in one beautiful package — the Being Muslim book, prayer cards, and supplementary materials."
	/>
</svelte:head>

<!-- ============================== -->
<!-- BREADCRUMB                     -->
<!-- ============================== -->
<section style="background: #f4f1eb; padding-top: 110px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10" style="padding-top: 16px; padding-bottom: 16px;">
		<nav style="display: flex; align-items: center; gap: 8px; font-family: 'DM Sans', sans-serif; font-size: 14px;">
			<a href="/c/shop" style="color: #8a7e70; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; transition: color 0.2s;" class="bm-view-all">
				<ArrowLeft style="width: 16px; height: 16px;" />
				Back to Shop
			</a>
		</nav>
	</div>
</section>

<!-- ============================== -->
<!-- PRODUCT DETAIL                 -->
<!-- ============================== -->
<section style="background: #f4f1eb; padding: 0 0 64px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: grid; grid-template-columns: 1fr; gap: 40px; align-items: start;" class="md:!grid-cols-2 md:!gap-12">
			<!-- Image -->
			<div style="background: #e2dcd2; border-radius: 12px; overflow: hidden; aspect-ratio: 3/4;">
				<img
					src="https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg"
					alt="The Complete Boxed Set"
					style="width: 100%; height: 100%; object-fit: cover; display: block;"
				/>
			</div>

			<!-- Details -->
			<div>
				<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #2a2018; background: rgba(200,184,160,0.25); padding: 4px 12px; border-radius: 999px; display: inline-block; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">
					Most Popular
				</span>

				<h1 style="font-family: 'Source Serif 4', serif; font-size: clamp(28px, 4vw, 36px); font-weight: 400; color: #2a2018; margin: 0 0 12px; line-height: 1.15;">
					The Complete Boxed Set
				</h1>

				<!-- Rating -->
				<div style="display: flex; align-items: center; gap: 6px; margin-bottom: 16px;">
					<div style="display: flex; gap: 2px;">
						{#each Array(5) as _, idx}
							{#if idx < 5}
								<Star style="width: 14px; height: 14px; fill: #d4a843; color: #d4a843;" />
							{:else}
								<Star style="width: 14px; height: 14px; color: #d8d2c8;" />
							{/if}
						{/each}
					</div>
					<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70;">5.0 (89 reviews)</span>
				</div>

				<p style="font-family: 'DM Sans', sans-serif; font-size: 28px; font-weight: 600; color: #2a2018; margin: 0 0 24px;">
					$85.00
				</p>

				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #5a5248; line-height: 1.7; margin: 0 0 24px;">
					The ultimate Being Muslim collection — everything a new Muslim needs in one beautifully packaged set. Includes the bestselling Being Muslim book, the complete set of prayer reference cards, a Ramadan guide, a daily dhikr (remembrance) booklet, and supplementary materials covering common questions and practical daily guidance. This boxed set makes the perfect gift for someone beginning their Islamic journey.
				</p>

				<ul style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #5a5248; line-height: 2; margin: 0 0 32px; padding-left: 20px;">
					<li>Being Muslim: A Practical Guide (book)</li>
					<li>Complete Prayer Reference Cards set</li>
					<li>Ramadan guide and daily dhikr booklet</li>
					<li>Supplementary Q&A materials</li>
					<li>Premium gift-quality packaging</li>
				</ul>

				<div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 24px;">
					<button class="bm-btn-dark" style="padding: 14px 32px; font-size: 15px;">
						<ShoppingCart style="width: 16px; height: 16px;" />
						Add to Cart
					</button>
					<button class="bm-btn-outline" style="padding: 14px 32px; font-size: 15px;">
						Buy Now
					</button>
				</div>

				<div style="border-top: 1px solid #d8d2c8; padding-top: 20px; display: flex; flex-wrap: wrap; gap: 24px; font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70;">
					<span>Free shipping over $50</span>
					<span>30-day returns</span>
					<span>Secure checkout</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- RELATED PRODUCTS               -->
<!-- ============================== -->
<section style="background: #faf9f5; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 style="font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #2a2018; margin: 0 0 32px;">
			You might also like
		</h2>
		<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;" class="max-md:!grid-cols-1 max-lg:!grid-cols-2">
			{#each [
				{ title: 'Being Muslim: A Practical Guide', price: '$14.95', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg', href: '/c/shop/book' },
				{ title: 'Prayer Reference Cards', price: '$37.50', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg', href: '/c/shop/prayer-cards' },
				{ title: 'Digital Edition (eBook)', price: '$9.00', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png', href: '/c/shop/ebook' }
			] as product}
				<a href={product.href} style="text-decoration: none; display: block;" class="bm-title-underline-parent group">
					<div class="bm-card-hover" style="background: #fff; border-radius: 12px; overflow: hidden; height: 100%; display: flex; flex-direction: column;">
						<div style="aspect-ratio: 4/3; background: #e2dcd2; position: relative; overflow: hidden;">
							<img src={product.img} alt={product.title} class="transition-transform duration-500 group-hover:scale-105" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
						</div>
						<div style="padding: 20px; flex: 1; display: flex; flex-direction: column;">
							<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 400; color: #2a2018; margin: 0 0 8px; line-height: 1.3;">
								{product.title}
							</h3>
							<span style="font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 600; color: #2a2018; margin-top: auto;">
								{product.price}
							</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- SPONSOR CALLOUT BANNER         -->
<!-- ============================== -->
<section style="background: #2a2018; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: flex; align-items: center; gap: 48px; flex-wrap: wrap; justify-content: center;">
			<div style="width: 80px; height: 80px; border-radius: 999px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
				<Heart style="width: 40px; height: 40px; color: #c8b8a0;" />
			</div>
			<div style="flex: 1; min-width: 280px;">
				<h2 style="font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #fff; margin: 0 0 8px; line-height: 1.2;">
					Sponsor this for a new Muslim
				</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.6; margin: 0;">
					Many new Muslims cannot afford the resources they need. Your sponsorship puts a complete Being Muslim boxed set in their hands — a gift that transforms lives.
				</p>
			</div>
			<a href="/c/give" class="bm-btn-white" style="flex-shrink: 0;">
				Sponsor Now <Heart style="width: 14px; height: 14px;" />
			</a>
		</div>
	</div>
</section>
