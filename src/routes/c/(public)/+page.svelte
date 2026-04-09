<script lang="ts">
	import { ArrowRight, ChevronDown, BookOpen } from 'lucide-svelte';

	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}
</script>

<svelte:head>
	<title>Being Muslim — Navigating the Path to Islam</title>
	<meta
		name="description"
		content="Empowering new and beginner Muslims with comprehensive education and support to navigate your journey and deepen your understanding and connection with faith."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO SECTION                -->
<!-- ============================== -->
<section class="relative flex min-h-screen flex-col justify-center overflow-hidden" style="background: #0D0D0D;">
	<!-- Background Image with dark overlay -->
	<div class="absolute inset-0">
		<img
			src="/images/hero-bg.jpg"
			alt=""
			class="h-full w-full object-cover"
			style="opacity: 0.35;"
		/>
		<!-- Radial gradient for cinematic depth -->
		<div class="absolute inset-0" style="background: radial-gradient(ellipse at 30% 50%, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.7) 50%, rgba(13,13,13,0.95) 100%);"></div>
		<!-- Bottom fade -->
		<div class="absolute inset-0" style="background: linear-gradient(180deg, rgba(13,13,13,0.4) 0%, transparent 30%, transparent 60%, rgba(13,13,13,0.9) 100%);"></div>
	</div>

	<div class="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-32 pb-24 lg:px-10">
		<div class="max-w-[700px]">
			<!-- Overline label -->
			<p style="font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #D4A853; margin-bottom: 24px;">
				Your Journey Begins Here
			</p>

			<h1 style="font-family: 'Lora', serif; font-size: clamp(40px, 6vw, 72px); font-weight: 500; line-height: 1.08; color: #F5F0E8; margin: 0 0 28px; letter-spacing: -0.02em;">
				Navigating the<br />
				<span style="color: #D4A853; font-style: italic; font-weight: 400;">Path</span>
				to Islam
			</h1>

			<p style="font-family: 'Inter', sans-serif; font-size: 17px; line-height: 1.7; color: rgba(245,240,232,0.65); max-width: 540px; margin: 0 0 40px;">
				Empowering new and beginner Muslims with comprehensive education and support to navigate your journey and deepen your understanding and connection with faith.
			</p>

			<!-- CTAs -->
			<div style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 48px;">
				<a href="/c/learn" class="bmc-btn-gold">
					Start Learning
					<ArrowRight style="width: 16px; height: 16px;" />
				</a>
				<a href="/c/learn" class="bmc-btn-outline">
					Explore Resources
				</a>
			</div>

			<!-- Trust bar -->
			<div style="display: flex; align-items: center; gap: 14px;">
				<div style="display: flex;">
					{#each ['#8B7355', '#6B8E6B', '#7A6B8E', '#8E6B6B'] as color, i}
						<div style="width: 36px; height: 36px; border-radius: 999px; border: 2px solid #0D0D0D; background: {color}; margin-left: {i > 0 ? '-10px' : '0'}; position: relative; z-index: {4 - i};"></div>
					{/each}
				</div>
				<p style="font-family: 'Inter', sans-serif; font-size: 13px; color: rgba(245,240,232,0.55);">
					<span style="color: #F5F0E8; font-weight: 600;">Trusted by</span> 10,000+ learners
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 2. EXPLORE YOUR PATH           -->
<!-- ============================== -->
<section class="bmc-section" style="background: #0D0D0D;">
	<div class="bmc-container">
		<div style="text-align: center; margin-bottom: 48px;">
			<p class="bmc-label" style="margin-bottom: 12px;">Explore</p>
			<h2 class="bmc-section-heading">Choose Your Path</h2>
		</div>

		<div class="bmc-grid-explore">
			<!-- Card: Learn -->
			<a href="/c/learn" class="bmc-card" style="padding: 36px 28px; text-decoration: none; display: flex; flex-direction: column; justify-content: space-between; min-height: 240px;">
				<div>
					<p class="bmc-label" style="margin-bottom: 16px;">Learn</p>
					<h3 style="font-family: 'Lora', serif; font-size: 22px; font-weight: 400; color: #F5F0E8; line-height: 1.35; margin: 0;">
						Explore articles, guides, and resources on Islamic faith and practice
					</h3>
				</div>
				<div style="margin-top: 28px; text-align: right;">
					<ArrowRight style="width: 20px; height: 20px; color: #D4A853;" />
				</div>
			</a>

			<!-- Card: Convert -->
			<a href="/c/convert" class="bmc-card" style="padding: 36px 28px; text-decoration: none; display: flex; flex-direction: column; justify-content: space-between; min-height: 240px;">
				<div>
					<p class="bmc-label" style="margin-bottom: 16px;">Convert</p>
					<h3 style="font-family: 'Lora', serif; font-size: 22px; font-weight: 400; color: #F5F0E8; line-height: 1.35; margin: 0;">
						Take the next step on your journey with guidance and support
					</h3>
				</div>
				<div style="margin-top: 28px; text-align: right;">
					<ArrowRight style="width: 20px; height: 20px; color: #D4A853;" />
				</div>
			</a>

			<!-- Card: Buy -->
			<a href="/c/shop" class="bmc-card" style="padding: 36px 28px; text-decoration: none; display: flex; flex-direction: column; justify-content: space-between; min-height: 240px;">
				<div>
					<p class="bmc-label" style="margin-bottom: 16px;">Buy</p>
					<h3 style="font-family: 'Lora', serif; font-size: 22px; font-weight: 400; color: #F5F0E8; line-height: 1.35; margin: 0;">
						Books, prayer cards, and resources for your journey
					</h3>
				</div>
				<div style="margin-top: 28px; text-align: right;">
					<ArrowRight style="width: 20px; height: 20px; color: #D4A853;" />
				</div>
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 3. ARTICLES                    -->
<!-- ============================== -->
<section class="bmc-section" style="background: #0D0D0D;">
	<div class="bmc-container">
		<div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px;">
			<div>
				<p class="bmc-label" style="margin-bottom: 12px;">Resources</p>
				<h2 class="bmc-section-heading">Latest Articles</h2>
			</div>
			<a href="/c/learn" style="font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500; color: #D4A853; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; transition: opacity 0.2s;"
				onmouseenter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7'; }}
				onmouseleave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
			>
				View all <ArrowRight style="width: 14px; height: 14px;" />
			</a>
		</div>

		<div class="bmc-grid-articles">
			{#each [
				{
					title: 'Brief Overview of Islam',
					category: 'Foundations',
					time: '10 min',
					img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png',
					href: '/c/learn'
				},
				{
					title: "A Beginner's Guide to Being a Muslim",
					category: 'New Muslims',
					time: '12 min',
					img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg',
					href: '/c/learn'
				},
				{
					title: 'Islam and Other Faiths',
					category: 'Belief',
					time: '8 min',
					img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/oneGodmanynames.jpeg',
					href: '/c/learn'
				}
			] as article}
				<a href={article.href} class="bmc-card group" style="text-decoration: none; overflow: hidden; display: flex; flex-direction: column;">
					<!-- Image -->
					<div style="position: relative; aspect-ratio: 16/10; overflow: hidden;">
						<img
							src={article.img}
							alt={article.title}
							class="transition-transform duration-500 group-hover:scale-105"
							style="width: 100%; height: 100%; object-fit: cover; display: block;"
						/>
						<!-- Dark overlay on image -->
						<div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(13,13,13,0.6) 100%);"></div>
						<!-- Category badge -->
						<span class="bmc-badge" style="position: absolute; top: 16px; left: 16px;">
							{article.category}
						</span>
					</div>
					<!-- Content -->
					<div style="padding: 24px;">
						<h3 style="font-family: 'Lora', serif; font-size: 18px; font-weight: 400; color: #F5F0E8; line-height: 1.4; margin: 0 0 12px;">{article.title}</h3>
						<p style="font-family: 'Inter', sans-serif; font-size: 13px; color: rgba(245,240,232,0.4);">{article.time} read</p>
					</div>
				</a>
			{/each}
		</div>

		<!-- Additional Resources button -->
		<div style="text-align: center; margin-top: 48px;">
			<a href="/c/learn" class="bmc-btn-outline">
				Additional Resources <ArrowRight style="width: 14px; height: 14px;" />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 4. PRODUCTS                    -->
<!-- ============================== -->
<section class="bmc-section" style="background: #0D0D0D; border-top: 1px solid rgba(255,255,255,0.04);">
	<div class="bmc-container">
		<div style="text-align: center; margin-bottom: 48px;">
			<p class="bmc-label" style="margin-bottom: 12px;">Shop</p>
			<h2 class="bmc-section-heading">Everything You Need to Begin</h2>
		</div>

		<!-- Horizontal scroll carousel -->
		<div class="bmc-hscroll">
			{#each [
				{
					title: 'Being Muslim: A Practical Guide',
					price: '$14.95',
					badge: 'Bestseller',
					img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg',
					href: '/c/shop'
				},
				{
					title: 'The Complete Boxed Set',
					price: '$85.00',
					badge: 'Most Popular',
					img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg',
					href: '/c/shop'
				},
				{
					title: 'Prayer Reference Cards',
					price: '$37.50',
					badge: '',
					img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg',
					href: '/c/shop'
				},
				{
					title: 'Digital Edition (eBook)',
					price: '$9.00',
					badge: '',
					img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png',
					href: '/c/shop'
				}
			] as product}
				<a href={product.href} class="group" style="text-decoration: none; display: block; flex: 0 0 280px; scroll-snap-align: start;">
					<!-- Product image -->
					<div class="bmc-card" style="aspect-ratio: 1; overflow: hidden; margin-bottom: 16px; position: relative; border-radius: 8px;">
						<img
							src={product.img}
							alt={product.title}
							class="transition-transform duration-500 group-hover:scale-105"
							style="width: 100%; height: 100%; object-fit: cover; display: block;"
						/>
						{#if product.badge}
							<span class="bmc-badge" style="position: absolute; top: 12px; left: 12px;">
								{product.badge}
							</span>
						{/if}
					</div>
					<!-- Product info -->
					<h3 style="font-family: 'Lora', serif; font-size: 16px; font-weight: 400; color: #F5F0E8; margin: 0 0 8px; line-height: 1.35;">{product.title}</h3>
					<span style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600; color: #D4A853;">{product.price}</span>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 48px;">
			<a href="/c/shop" class="bmc-btn-outline">
				See All Store Items <ArrowRight style="width: 14px; height: 14px;" />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 5. FAQ                         -->
<!-- ============================== -->
<section class="bmc-section" style="background: #0D0D0D; border-top: 1px solid rgba(255,255,255,0.04);">
	<div class="bmc-container">
		<div style="max-width: 800px; margin: 0 auto;">
			<div style="text-align: center; margin-bottom: 48px;">
				<p class="bmc-label" style="margin-bottom: 12px;">FAQ</p>
				<h2 class="bmc-section-heading">Frequently Asked Questions</h2>
			</div>

			{#each [
				{ q: 'My family is not supportive of my conversion. What do you advise?', a: 'This is a common challenge many new Muslims face. We recommend patience, maintaining loving relationships, and leading by positive example. Our community forum has many discussions from people who have navigated this successfully.' },
				{ q: 'Can you help me find a mosque or community of Muslims near me?', a: 'We can help connect you with local communities. Reach out through our Contact page and we will do our best to help you find a welcoming community in your area.' },
				{ q: 'My previous faith was very dear to me. If I am now a Muslim, do I have to reject it entirely?', a: 'Islam acknowledges and respects the earlier prophets and scriptures. Many of the values you cherished in your previous faith are shared in Islam. Your journey enriches rather than erases your spiritual history.' },
				{ q: 'My spouse or significant other is not a Muslim. How does becoming Muslim impact my marriage?', a: 'This is a nuanced topic that depends on your specific situation. We recommend speaking with a knowledgeable scholar who can provide guidance tailored to your circumstances. Reach out through our Contact page.' },
				{ q: 'I just converted, what do I do next?', a: 'Congratulations and may God bless your path ahead! We have written an article that offers some advice and important first steps: "A Beginner\'s Guide to Being a Muslim." You can find it on our Learn page.' },
				{ q: 'I believe Islam to be true and revealed by God, but I can\'t live up to its teachings. What should I do?', a: 'This is a feeling many Muslims experience, both new and lifelong. Islam teaches that God is the Most Merciful and that perfection is not expected. What matters is sincerity, effort, and turning back to God when you fall short. Start with what you can, and trust that growth comes with time and patience.' },
				{ q: 'I want to convert, but I am finding it difficult to change my lifestyle including the way that I dress, what I eat/drink, relationships. Can I still become Muslim?', a: 'Absolutely. Islam teaches that faith is a journey, not a destination. You do not need to be perfect to begin. Start with the essentials and grow at your own pace — God is patient and merciful.' },
				{ q: 'Do I need to change my name now that I have become Muslim?', a: 'No, changing your name is not required in Islam. Many Muslims keep their birth names. Some choose to adopt a new name as a personal expression of their new identity, but this is entirely optional.' }
			] as faq, i}
				<button
					class="bmc-faq-btn"
					onclick={() => toggleFaq(i)}
				>
					<span style="display: flex; align-items: flex-start; gap: 16px; flex: 1;">
						<span style="font-family: 'Lora', serif; font-size: 20px; font-weight: 400; color: #D4A853; line-height: 1; flex-shrink: 0; margin-top: 2px;">?</span>
						<span style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 500; color: #F5F0E8; line-height: 1.5; text-align: left;">{faq.q}</span>
					</span>
					<ChevronDown
						class="flex-shrink-0 mt-1 transition-transform duration-200 {openFaq === i ? 'rotate-180' : ''}"
						style="width: 16px; height: 16px; color: rgba(245,240,232,0.35);"
					/>
				</button>
				{#if openFaq === i}
					<p class="bmc-faq-answer">{faq.a}</p>
				{/if}
			{/each}

			<!-- CTA buttons -->
			<div style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 16px; justify-content: center;">
				<a href="/c/convert" class="bmc-btn-gold">
					Ready to Convert
				</a>
				<a href="/c/contact" class="bmc-btn-outline">
					Ask a Question
				</a>
			</div>
		</div>
	</div>
</section>
