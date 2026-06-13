<script lang="ts">
	import { onMount } from 'svelte';
	import {
		ArrowRight,
		BookOpen,
		ChevronDown
	} from 'lucide-svelte';

	// ---- Hero word reveal ----
	const heroWords = ['Navigating', 'the', 'Path', 'to', 'Islam'];
	let visibleWords = $state(0);

	// ---- FAQ ----
	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	// ---- Scroll reveal via IntersectionObserver ----
	onMount(() => {
		// Hero word reveal
		const interval = setInterval(() => {
			visibleWords++;
			if (visibleWords >= heroWords.length) clearInterval(interval);
		}, 150);

		// Intersection Observer for scroll reveals
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
		);

		document.querySelectorAll('.bm-reveal').forEach((el) => {
			observer.observe(el);
		});

		return () => {
			clearInterval(interval);
			observer.disconnect();
		};
	});
</script>

<svelte:head>
	<title>Being Muslim — Your Guide to a Meaningful Islamic Journey</title>
	<meta
		name="description"
		content="Empowering converts and beginners on their Islamic journey through education, community, and support."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO — Split Layout          -->
<!-- ============================== -->
<section class="bm-hero-split" style="background: #faf9f5;">
	<!-- Left: Text Content (55%) -->
	<div class="bm-hero-left">
		<div style="max-width: 560px;">
			<h1 style="font-family: 'Source Serif 4', serif; font-size: clamp(40px, 5.5vw, 68px); font-weight: 700; line-height: 1.05; tracking: -0.02em; color: #2a2018; margin: 0 0 24px;">
				{#each heroWords as word, i}
					{#if word === 'Path'}
						<span
							class="bm-hero-word"
							style="opacity: {visibleWords > i ? 1 : 0}; transform: translateY({visibleWords > i ? '0' : '10px'}); font-style: italic; font-weight: 400; color: #a08b6e;"
						>{word}</span>
					{:else}
						<span
							class="bm-hero-word"
							style="opacity: {visibleWords > i ? 1 : 0}; transform: translateY({visibleWords > i ? '0' : '10px'});"
						>{word}</span>
					{/if}
					{' '}
				{/each}
			</h1>

			<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.65; color: #8a7e70; max-width: 480px; margin: 0 0 32px;">
				Empowering new and beginner Muslims with comprehensive education and support to navigate your journey and deepen your understanding and connection with faith.
			</p>

			<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 16px; margin-bottom: 40px;">
				<a href="/e/learn" class="bm-btn-dark" style="padding: 14px 28px; font-weight: 600;">
					Start Learning
					<ArrowRight class="h-4 w-4" />
				</a>
				<a href="/e/learn" class="bm-btn-outline" style="padding: 14px 28px; font-weight: 600;">
					Explore Resources
				</a>
			</div>

			<!-- Trust bar -->
			<div style="display: flex; align-items: center; gap: 12px;">
				<div style="display: flex;">
					{#each ['#7a8b6e', '#a08b6e', '#6e7a8b', '#8b6e7a'] as color}
						<div style="width: 36px; height: 36px; border-radius: 999px; border: 2px solid #faf9f5; background: {color}; margin-left: -8px;"></div>
					{/each}
				</div>
				<div style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #2a2018;">
					<span style="font-weight: 600;">Trusted by</span>
					<span style="color: #8a7e70;">10,000+ learners</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Right: Floating Hero Image (45%) -->
	<div class="bm-hero-right">
		<div class="bm-float" style="width: 100%; max-width: 480px;">
			<div style="border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(42, 32, 24, 0.15);">
				<img
					src="/images/hero-bg.jpg"
					alt="Islamic journey"
					style="width: 100%; height: auto; display: block; aspect-ratio: 4/5; object-fit: cover;"
				/>
			</div>
		</div>
	</div>
</section>


<!-- Wave: #faf9f5 -> #faf9f5 (explore has #e3dacc inner bg) -->
<div class="bm-wave-divider">
	<svg viewBox="0 0 1440 30" preserveAspectRatio="none">
		<path d="M0,0 C480,30 960,0 1440,20 L1440,30 L0,30 Z" fill="#faf9f5"/>
	</svg>
</div>


<!-- ============================== -->
<!-- 2. EXPLORE YOUR PATH            -->
<!-- ============================== -->
<section style="background: #faf9f5; padding: 24px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="bm-grid-explore bm-reveal" style="background: #e3dacc; border-radius: 16px; padding: 28px 20px;">
			<!-- Left: title + description + CTA -->
			<div style="display: flex; flex-direction: column; justify-content: space-between; padding-right: 24px;">
				<div>
					<h2 style="font-family: 'Source Serif 4', serif; font-size: 36px; font-weight: 400; color: #2a2018; margin: 0 0 16px; line-height: 1.15;">Explore your path</h2>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #5a5248; line-height: 1.6; margin: 0;">
						Discover Islam through courses, articles, and guides. Whether you're curious, converting, or deepening your practice — find resources made for you.
					</p>
				</div>
				<div style="margin-top: 24px;">
					<a href="/e/learn" class="bm-btn-outline" style="padding: 10px 24px;">
						See all resources
					</a>
				</div>
			</div>

			<!-- Card: Learn -->
			<a href="/e/learn" class="bm-explore-card bm-reveal bm-stagger-1" style="background: #f0eee6; border-radius: 12px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none;">
				<div>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #6a6258; margin: 0 0 8px; letter-spacing: 0.02em;">Learn</p>
					<p style="font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #2a2018; margin: 0; line-height: 1.2;">Explore articles, guides, and resources on Islamic faith and practice</p>
				</div>
				<div style="margin-top: 24px; text-align: right;">
					<ArrowRight class="h-5 w-5 bm-arrow-icon" style="color: #2a2018;" />
				</div>
			</a>

			<!-- Card: Convert -->
			<a href="/e/convert" class="bm-explore-card bm-reveal bm-stagger-2" style="background: #f0eee6; border-radius: 12px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none;">
				<div>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #6a6258; margin: 0 0 8px; letter-spacing: 0.02em;">Convert</p>
					<p style="font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #2a2018; margin: 0; line-height: 1.2;">Take the next step on your journey with guidance and support</p>
				</div>
				<div style="margin-top: 24px; text-align: right;">
					<ArrowRight class="h-5 w-5 bm-arrow-icon" style="color: #2a2018;" />
				</div>
			</a>

			<!-- Card: Buy -->
			<a href="/e/shop" class="bm-explore-card bm-reveal bm-stagger-3" style="background: #f0eee6; border-radius: 12px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none;">
				<div>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #6a6258; margin: 0 0 8px; letter-spacing: 0.02em;">Buy</p>
					<p style="font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #2a2018; margin: 0; line-height: 1.2;">Books, prayer cards, and resources for your journey</p>
				</div>
				<div style="margin-top: 24px; text-align: right;">
					<ArrowRight class="h-5 w-5 bm-arrow-icon" style="color: #2a2018;" />
				</div>
			</a>
		</div>
	</div>
</section>


<!-- Wave: #faf9f5 -> #f4f1eb -->
<div class="bm-wave-divider">
	<svg viewBox="0 0 1440 30" preserveAspectRatio="none">
		<path d="M0,0 C360,28 900,5 1440,22 L1440,30 L0,30 Z" fill="#f4f1eb"/>
	</svg>
</div>


<!-- ============================== -->
<!-- 3. FEATURED ARTICLES            -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #f4f1eb;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="bm-reveal" style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 32px;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0;">
				Latest Resources
			</h2>
			<a href="/e/learn" class="bm-view-all bm-link-animated" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
				View all <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>

		<div class="bm-grid-3">
			{#each [
				{ title: 'Brief Overview of Islam', category: 'Foundations', time: '10 min read', href: '/e/learn/brief-overview-of-islam', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png' },
				{ title: "A Beginner's Guide to Being a Muslim", category: 'New Muslims', time: '12 min read', href: '/e/learn/beginners-guide', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg' },
				{ title: 'Islam and Other Faiths', category: 'Belief', time: '8 min read', href: '/e/learn/islam-and-other-faiths', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/oneGodmanynames.jpeg' }
			] as article, i}
				<a href={article.href} style="text-decoration: none; display: block;" class="bm-title-underline-parent bm-reveal bm-stagger-{i + 1}">
					<!-- Image with hover overlay -->
					<div class="bm-article-card" style="aspect-ratio: 4/3; background: #e2dcd2; margin-bottom: 16px;">
						<img src={article.img} alt={article.title} style="width: 100%; height: 100%; object-fit: cover; display: block;" />
						<div class="bm-article-overlay">
							<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; color: #fff; display: inline-flex; align-items: center; gap: 6px;">
								Read Article <ArrowRight style="width: 14px; height: 14px;" />
							</span>
						</div>
					</div>
					<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 0 0 8px; line-height: 1.3;">{article.title}</h3>
					<div style="display: flex; align-items: center; gap: 12px;">
						<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #2a2018;">{article.category}</span>
						<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #a09888;">{article.time}</span>
					</div>
				</a>
			{/each}
		</div>

		<div class="bm-reveal" style="text-align: center; margin-top: 32px;">
			<a href="/e/learn" class="bm-btn-outline" style="padding: 10px 24px;">
				Additional Resources <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>


<!-- Wave: #f4f1eb -> #faf9f5 -->
<div class="bm-wave-divider" style="background: #f4f1eb;">
	<svg viewBox="0 0 1440 30" preserveAspectRatio="none">
		<path d="M0,0 C520,25 980,5 1440,18 L1440,30 L0,30 Z" fill="#faf9f5"/>
	</svg>
</div>


<!-- ============================== -->
<!-- 4. PRODUCTS — Enhanced Carousel -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #faf9f5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 class="bm-reveal" style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 32px; text-align: center;">
			Everything you need to begin
		</h2>

		<div class="bm-carousel-wrapper">
			<div style="display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 16px; -webkit-overflow-scrolling: touch;">
				{#each [
					{ title: 'Being Muslim: A Practical Guide', price: '$14.95', badge: 'Bestseller', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg', href: '/e/shop/book' },
					{ title: 'The Complete Boxed Set', price: '$85.00', badge: 'Most Popular', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg', href: '/e/shop/boxed-set' },
					{ title: 'Prayer Reference Cards', price: '$37.50', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg', href: '/e/shop/prayer-cards' },
					{ title: 'Digital Edition (eBook)', price: '$9.00', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png', href: '/e/shop/ebook' }
				] as product, i}
					<a href={product.href} class="bm-product-card bm-title-underline-parent bm-reveal bm-stagger-{i + 1}" style="flex: 0 0 280px; scroll-snap-align: start; text-decoration: none; display: block;">
						<div style="aspect-ratio: 1; background: #e2dcd2; border-radius: 12px; overflow: hidden; margin-bottom: 16px; position: relative;">
							{#if product.img}
								<img src={product.img} alt={product.title} style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 500ms;" class="product-img" />
							{:else}
								<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
									<BookOpen class="h-10 w-10" style="color: #c8c0b4;" />
								</div>
							{/if}
							{#if product.badge}
								<span style="position: absolute; top: 12px; left: 12px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; color: #2a2018; background: #fff; padding: 3px 10px; border-radius: 999px; z-index: 2;">{product.badge}</span>
							{/if}
						</div>
						<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 400; color: #2a2018; margin: 0 0 6px; line-height: 1.3;">{product.title}</h3>
						<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018;">{product.price}</span>
					</a>
				{/each}
			</div>
		</div>

		<div class="bm-reveal" style="text-align: center; margin-top: 32px;">
			<a href="/e/shop" class="bm-btn-outline" style="padding: 10px 24px;">
				See All Store Items <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>


<!-- Wave: #faf9f5 -> #f4f1eb -->
<div class="bm-wave-divider" style="background: #faf9f5;">
	<svg viewBox="0 0 1440 30" preserveAspectRatio="none">
		<path d="M0,0 C400,22 1000,8 1440,25 L1440,30 L0,30 Z" fill="#f4f1eb"/>
	</svg>
</div>


<!-- ============================== -->
<!-- 5. FAQ                          -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #f4f1eb;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 800px;">
			<h2 class="bm-reveal" style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 32px;">
				Frequently Asked Questions
			</h2>

			{#each [
				{ q: 'My family is not supportive of my conversion. What do you advise?', a: 'This is a common challenge many new Muslims face. We recommend patience, maintaining loving relationships, and leading by positive example. Our community forum has many discussions from people who have navigated this successfully.' },
				{ q: 'Can you help me find a mosque or community of Muslims near me?', a: 'We can help connect you with local communities. Reach out through our Contact page and we will do our best to help you find a welcoming community in your area.' },
				{ q: 'My previous faith was very dear to me. If I am now a Muslim, do I have to reject it entirely?', a: 'Islam acknowledges and respects the earlier prophets and scriptures. Many of the values you cherished in your previous faith are shared in Islam. Your journey enriches rather than erases your spiritual history.' },
				{ q: 'My spouse or significant other is not a Muslim. How does becoming Muslim impact my marriage?', a: 'This is a nuanced topic that depends on your specific situation. We recommend speaking with a knowledgeable scholar who can provide guidance tailored to your circumstances. Reach out through our Contact page.' },
				{ q: 'I just converted, what do I do next?', a: 'Congratulations and may God bless your path ahead! We have written an article that offers some advice and important first steps: "A Beginner\'s Guide to Being a Muslim." You can find it on our Learn page.' },
				{ q: 'I believe Islam to be true and revealed by God, but I can\'t live up to its teachings. What should I do?', a: 'This feeling is more common than you might think. Islam teaches that God is the Most Merciful and that no one is expected to be perfect. Begin with what you can, be sincere in your intention, and trust that growth comes with time. The door to God is always open.' },
				{ q: 'I want to convert, but I am finding it difficult to change my lifestyle including the way that I dress, what I eat/drink, relationships. Can I still become Muslim?', a: 'Absolutely. Islam teaches that faith is a journey, not a destination. You do not need to be perfect to begin. Start with the essentials and grow at your own pace — God is patient and merciful.' },
				{ q: 'Do I need to change my name now that I have become Muslim?', a: 'No, changing your name is not required in Islam. Many Muslims keep their birth names. Some choose to adopt a new name as a personal expression of their new identity, but this is entirely optional.' }
			] as faq, i}
				<div class="bm-reveal" style="border-top: 1px solid #e8e3da;">
					<button
						onclick={() => toggleFaq(i)}
						style="width: 100%; text-align: left; padding: 20px 0; border: none; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;"
					>
						<span style="font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; color: #2a2018; line-height: 1.4;">{faq.q}</span>
						<ChevronDown class="h-4 w-4 flex-shrink-0 mt-1 bm-faq-chevron {openFaq === i ? 'open' : ''}" style="color: #8a7e70;" />
					</button>
					<div class="bm-faq-answer {openFaq === i ? 'open' : ''}">
						<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.6; margin: 0 0 20px; padding-right: 40px;">{faq.a}</p>
					</div>
				</div>
			{/each}

			<div class="bm-reveal" style="margin-top: 24px; display: flex; flex-wrap: wrap; gap: 12px;">
				<a href="/e/convert" class="bm-btn-dark" style="padding: 10px 24px;">
					Ready to Convert
				</a>
				<a href="/e/contact" class="bm-btn-outline" style="padding: 10px 24px;">
					Ask a Question
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	/* Product image zoom on hover */
	:global(.bm-product-card:hover .product-img) {
		transform: scale(1.05);
	}
</style>
