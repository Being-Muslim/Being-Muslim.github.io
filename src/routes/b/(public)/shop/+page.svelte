<script lang="ts">
	import { ArrowRight, BookOpen } from 'lucide-svelte';

	const products = [
		{
			title: 'Being Muslim: A Practical Guide',
			price: '$14.95',
			badge: 'Bestseller',
			img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg',
			href: '/b/shop/book',
			description: 'The essential guide for new Muslims by Dr. Asad Tarsin — clear, warm, and beautifully designed.'
		},
		{
			title: 'The Complete Boxed Set',
			price: '$85.00',
			badge: 'Most Popular',
			img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg',
			href: '/b/shop/boxed-set',
			description: 'Everything you need in one beautiful package — the book, prayer cards, and supplementary materials.'
		},
		{
			title: 'Prayer Reference Cards (25-Pack)',
			price: '$37.50',
			badge: '',
			img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg',
			href: '/b/shop/prayer-cards',
			description: 'Beautifully illustrated, step-by-step prayer cards you can keep beside your prayer mat.'
		},
		{
			title: 'Digital Edition (eBook)',
			price: '$9.00',
			badge: '',
			img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png',
			href: '/b/shop/ebook',
			description: 'The complete Being Muslim guide in digital format — read on any device, anywhere.'
		}
	];
</script>

<svelte:head>
	<title>Shop — Being Muslim</title>
	<meta
		name="description"
		content="Browse books, boxed sets, prayer cards, and digital resources to support your journey."
	/>
</svelte:head>

<!-- Hero Section -->
<section style="background-color: #2a2018;" class="pt-[72px]">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-28">
		<div class="mx-auto max-w-2xl text-center">
			<p
				style="color: #c4a97d; font-family: 'DM Sans', sans-serif; letter-spacing: 0.08em;"
				class="text-sm font-medium uppercase mb-4"
			>
				&#9670; Resources &amp; Materials
			</p>
			<h1
				style="font-family: 'Source Serif 4', serif; color: #f0ebe3;"
				class="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1]"
			>
				Shop
			</h1>
			<p style="color: #f0ebe3; font-family: 'DM Sans', sans-serif;" class="mt-5 text-lg leading-relaxed opacity-70 max-w-lg mx-auto">
				Beautifully crafted resources to support your journey — from bestselling books to prayer essentials.
			</p>
		</div>
	</div>
</section>

<!-- Products Grid -->
<section style="background-color: #f0ebe3;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
		<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;">
			{#each products as product}
				<a href={product.href} style="text-decoration: none; display: block;" class="bm-title-underline-parent group">
					<div style="aspect-ratio: 1; background: #e2dcd2; border-radius: 12px; overflow: hidden; margin-bottom: 16px; position: relative;">
						{#if product.img}
							<img src={product.img} alt={product.title} class="transition-transform duration-500 group-hover:scale-105" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
						{:else}
							<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
								<BookOpen class="h-10 w-10" style="color: #c8c0b4;" />
							</div>
						{/if}
						{#if product.badge}
							<span style="position: absolute; top: 12px; left: 12px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; color: #2a2018; background: #fff; padding: 3px 10px; border-radius: 999px; z-index: 2;">{product.badge}</span>
						{/if}
					</div>
					<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 0 0 6px; line-height: 1.3;">{product.title}</h3>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; line-height: 1.5; margin: 0 0 8px;">{product.description}</p>
					<span style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 600; color: #2a2018;">{product.price}</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Sponsor CTA -->
<section style="background: #fff; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center;">
			<div>
				<h2 style="font-family: 'Source Serif 4', serif; font-size: 36px; line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 16px;">
					Sponsor a new Muslim
				</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 0 0 28px;">
					Many new Muslims cannot afford the resources they need. Your sponsorship puts a complete Being Muslim boxed set in their hands — a gift that transforms lives.
				</p>
				<a href="/b/support" class="bm-btn-dark" style="padding: 12px 28px;">
					Support the Mission <ArrowRight class="h-3.5 w-3.5" />
				</a>
			</div>
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
				{#each [
					{ value: '3,247', label: 'Sets Sponsored' },
					{ value: '520', label: 'Communities Reached' },
					{ value: '52', label: 'Countries' },
					{ value: '180', label: 'Monthly Donors' }
				] as stat}
					<div style="background: #f0ebe3; border-radius: 10px; padding: 24px;">
						<p style="font-family: 'Source Serif 4', serif; font-size: 32px; font-weight: 400; line-height: 1; color: #2a2018; margin: 0;">{stat.value}</p>
						<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; margin: 6px 0 0;">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
