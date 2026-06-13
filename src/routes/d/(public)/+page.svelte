<script lang="ts">
	import { onMount } from 'svelte';
	import {
		ArrowRight,
		BookOpen,
		ChevronDown
	} from 'lucide-svelte';

	// ---------- Parallax ----------
	let scrollY = $state(0);

	// ---------- Counter animation ----------
	let counterVisible = $state(false);
	let counterStarted = false;
	let counterEl: HTMLElement;

	let counter1 = $state(0);
	let counter2 = $state(0);
	let counter3 = $state(0);
	let counter4 = $state(0);

	function animateCounter(target: number, duration: number, callback: (val: number) => void) {
		const start = performance.now();
		function update(now: number) {
			const elapsed = now - start;
			const progress = Math.min(elapsed / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
			callback(Math.floor(target * eased));
			if (progress < 1) requestAnimationFrame(update);
		}
		requestAnimationFrame(update);
	}

	// ---------- FAQ ----------
	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	// ---------- Scroll reveals ----------
	onMount(() => {
		// Counter observer
		const counterObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !counterStarted) {
						counterStarted = true;
						counterVisible = true;
						animateCounter(10000, 2000, (v) => (counter1 = v));
						animateCounter(50, 1500, (v) => (counter2 = v));
						animateCounter(3247, 2200, (v) => (counter3 = v));
						animateCounter(49, 1800, (v) => (counter4 = v));
					}
				});
			},
			{ threshold: 0.3 }
		);

		if (counterEl) counterObserver.observe(counterEl);

		// Section reveal observer
		const revealObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('bm-reveal-visible');
					}
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll('.bm-reveal').forEach((el) => {
			revealObserver.observe(el);
		});

		return () => {
			counterObserver.disconnect();
			revealObserver.disconnect();
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

<svelte:window bind:scrollY />

<!-- ============================== -->
<!-- 1. PARALLAX HERO SECTION       -->
<!-- ============================== -->
<section class="bm-parallax-hero">
	<!-- Parallax Background -->
	<div
		class="bm-parallax-bg"
		style="transform: translateY({scrollY * 0.4}px);"
	>
		<img
			src="/images/hero-bg.jpg"
			alt=""
		/>
		<!-- Warm gradient overlay -->
		<div class="absolute inset-0" style="background: linear-gradient(180deg, rgba(40,35,28,0.3) 0%, rgba(40,35,28,0.1) 40%, rgba(40,35,28,0.55) 100%);"></div>
	</div>

	<!-- Parallax Foreground Content -->
	<div
		class="bm-parallax-content mx-auto w-full max-w-[1400px] px-6 pt-32 pb-12 lg:px-10"
		style="transform: translateY({scrollY * 0.15}px);"
	>
		<div class="max-w-[680px]">
			<h1 class="font-display text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[68px]">
				Navigating the
				<span class="italic font-normal text-amber-200/90">Path</span>
				to Islam
			</h1>

			<p class="mt-6 max-w-[480px] text-[16px] leading-[1.65] text-white/80">
				Empowering new and beginner Muslims with comprehensive education and support to navigate your journey and deepen your understanding and connection with faith.
			</p>

			<div class="mt-8 flex flex-wrap items-center gap-4">
				<!-- White button -->
				<a
					href="/d/learn"
					class="bm-btn-white"
					style="padding: 14px 28px; font-weight: 600;"
				>
					Start Learning
					<ArrowRight class="h-4 w-4" />
				</a>
				<!-- Glass button -->
				<a
					href="/d/learn"
					class="bm-btn-glass"
					style="padding: 14px 28px; font-weight: 600;"
				>
					Explore Resources
				</a>
			</div>
		</div>

		<!-- Trust bar with floating avatars -->
		<div class="mt-8 flex items-center">
			<div class="flex items-center gap-3">
				<div class="flex -space-x-2">
					{#each ['#7a8b6e', '#a08b6e', '#6e7a8b', '#8b6e7a'] as color, i}
						<div
							class="h-9 w-9 rounded-full border-2 border-white/80 bm-float {i === 1 ? 'bm-float-delay-1' : i === 2 ? 'bm-float-delay-2' : i === 3 ? 'bm-float-delay-3' : ''}"
							style="background: {color};"
						></div>
					{/each}
				</div>
				<div class="text-[13px] text-white">
					<span class="font-semibold">Trusted by</span>
					<span class="text-white/80">10,000+ learners</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 2. ANIMATED COUNTER BAR        -->
<!-- ============================== -->
<section class="bm-counter-bar" bind:this={counterEl}>
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="bm-counter-grid">
			<div class="bm-counter-item">
				<div class="bm-counter-number">{counter1.toLocaleString()}+</div>
				<div class="bm-counter-label">Communities Reached</div>
			</div>
			<div class="bm-counter-item">
				<div class="bm-counter-number">{counter2}+</div>
				<div class="bm-counter-label">Countries</div>
			</div>
			<div class="bm-counter-item">
				<div class="bm-counter-number">{counter3.toLocaleString()}</div>
				<div class="bm-counter-label">Sets Sponsored</div>
			</div>
			<div class="bm-counter-item">
				<div class="bm-counter-number">{(counter4 / 10).toFixed(1)}<span style="font-size: 24px;">&#9733;</span></div>
				<div class="bm-counter-label">Average Rating</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 3. EXPLORE YOUR PATH           -->
<!-- ============================== -->
<section class="bm-section-flow" style="background: #faf9f5; padding: 24px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="bm-grid-explore" style="background: #e3dacc; border-radius: 16px; padding: 28px 20px;">
			<!-- Left: title + description + CTA -->
			<div class="bm-reveal bm-reveal-up bm-stagger-1" style="display: flex; flex-direction: column; justify-content: space-between; padding-right: 24px;">
				<div>
					<h2 style="font-family: 'Source Serif 4', serif; font-size: 36px; font-weight: 400; color: #2a2018; margin: 0 0 16px; line-height: 1.15;">Explore your path</h2>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #5a5248; line-height: 1.6; margin: 0;">
						Discover Islam through courses, articles, and guides. Whether you're curious, converting, or deepening your practice — find resources made for you.
					</p>
				</div>
				<div style="margin-top: 24px;">
					<a href="/d/learn" class="bm-btn-outline" style="padding: 10px 24px;">
						See all resources
					</a>
				</div>
			</div>

			<!-- Card: Learn -->
			<a href="/d/learn" class="bm-card-hover bm-reveal bm-reveal-up bm-stagger-2" style="background: #f0eee6; border-radius: 12px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none;">
				<div>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #6a6258; margin: 0 0 8px; letter-spacing: 0.02em;">Learn</p>
					<p style="font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #2a2018; margin: 0; line-height: 1.2;">Explore articles, guides, and resources on Islamic faith and practice</p>
				</div>
				<div style="margin-top: 24px; text-align: right;">
					<ArrowRight class="h-5 w-5 bm-arrow-slide" style="color: #2a2018;" />
				</div>
			</a>

			<!-- Card: Convert -->
			<a href="/d/convert" class="bm-card-hover bm-reveal bm-reveal-up bm-stagger-3" style="background: #f0eee6; border-radius: 12px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none;">
				<div>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #6a6258; margin: 0 0 8px; letter-spacing: 0.02em;">Convert</p>
					<p style="font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #2a2018; margin: 0; line-height: 1.2;">Take the next step on your journey with guidance and support</p>
				</div>
				<div style="margin-top: 24px; text-align: right;">
					<ArrowRight class="h-5 w-5 bm-arrow-slide" style="color: #2a2018;" />
				</div>
			</a>

			<!-- Card: Buy -->
			<a href="/d/shop" class="bm-card-hover bm-reveal bm-reveal-up bm-stagger-4" style="background: #f0eee6; border-radius: 12px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none;">
				<div>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #6a6258; margin: 0 0 8px; letter-spacing: 0.02em;">Buy</p>
					<p style="font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #2a2018; margin: 0; line-height: 1.2;">Books, prayer cards, and resources for your journey</p>
				</div>
				<div style="margin-top: 24px; text-align: right;">
					<ArrowRight class="h-5 w-5 bm-arrow-slide" style="color: #2a2018;" />
				</div>
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 4. FEATURED ARTICLES           -->
<!-- ============================== -->
<section class="bm-section-padding bm-section-flow" style="background: #f4f1eb;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 32px;">
			<h2 class="bm-reveal bm-reveal-up" style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0;">
				Latest Resources
			</h2>
			<a href="/d/learn" class="bm-view-all" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
				View all <ArrowRight class="h-3.5 w-3.5 bm-arrow-slide" />
			</a>
		</div>

		<div class="bm-grid-3">
			{#each [
				{ title: 'Brief Overview of Islam', category: 'Foundations', time: '10 min read', href: '/d/learn/brief-overview-of-islam', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png', reveal: 'bm-reveal-left' },
				{ title: "A Beginner's Guide to Being a Muslim", category: 'New Muslims', time: '12 min read', href: '/d/learn/beginners-guide', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg', reveal: 'bm-reveal-up' },
				{ title: 'Islam and Other Faiths', category: 'Belief', time: '8 min read', href: '/d/learn/islam-and-other-faiths', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/oneGodmanynames.jpeg', reveal: 'bm-reveal-right' }
			] as article}
				<a href={article.href} style="text-decoration: none; display: block;" class="bm-title-underline-parent bm-reveal {article.reveal}">
					<div style="aspect-ratio: 4/3; background: #e2dcd2; border-radius: 12px; overflow: hidden; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
						<img src={article.img} alt={article.title} style="width: 100%; height: 100%; object-fit: cover;" />
					</div>
					<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 0 0 8px; line-height: 1.3;">{article.title}</h3>
					<div style="display: flex; align-items: center; gap: 12px;">
						<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #2a2018;">{article.category}</span>
						<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #a09888;">{article.time}</span>
					</div>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 32px;">
			<a href="/d/learn" class="bm-btn-outline" style="padding: 10px 24px;">
				Additional Resources <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 5. PRODUCTS                    -->
<!-- ============================== -->
<section class="bm-section-padding bm-section-flow" style="background: #faf9f5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 class="bm-reveal bm-reveal-up" style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 32px; text-align: center;">
			Everything you need to begin
		</h2>

		<div class="bm-reveal bm-reveal-right" style="display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 16px; -webkit-overflow-scrolling: touch;">
			{#each [
				{ title: 'Being Muslim: A Practical Guide', price: '$14.95', badge: 'Bestseller', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg', href: '/d/shop/book' },
				{ title: 'The Complete Boxed Set', price: '$85.00', badge: 'Most Popular', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg', href: '/d/shop/boxed-set' },
				{ title: 'Prayer Reference Cards', price: '$37.50', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg', href: '/d/shop/prayer-cards' },
				{ title: 'Digital Edition (eBook)', price: '$9.00', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png', href: '/d/shop/ebook' }
			] as product}
				<a href={product.href} style="flex: 0 0 280px; scroll-snap-align: start; text-decoration: none; display: block;" class="bm-title-underline-parent bm-product-card">
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
					<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 400; color: #2a2018; margin: 0 0 6px; line-height: 1.3;">{product.title}</h3>
					<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018;">{product.price}</span>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 32px;">
			<a href="/d/shop" class="bm-btn-outline" style="padding: 10px 24px;">
				See All Store Items <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 6. FAQ                         -->
<!-- ============================== -->
<section class="bm-section-padding bm-section-flow" style="background: #f4f1eb;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 800px;">
			<h2 class="bm-reveal bm-reveal-left" style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 32px;">
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
				<div class="bm-reveal bm-reveal-up" style="transition-delay: {Math.min(i * 0.05, 0.3)}s;">
					<button
						onclick={() => toggleFaq(i)}
						style="width: 100%; text-align: left; padding: 20px 0; border: none; border-top: 1px solid #e8e3da; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;"
					>
						<span style="font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; color: #2a2018; line-height: 1.4;">{faq.q}</span>
						<ChevronDown class="h-4 w-4 flex-shrink-0 mt-1 transition-transform duration-200 {openFaq === i ? 'rotate-180' : ''}" style="color: #8a7e70;" />
					</button>
					<div class="bm-faq-answer {openFaq === i ? 'bm-faq-open' : ''}">
						<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.6; margin: 0 0 20px; padding-right: 40px;">{faq.a}</p>
					</div>
				</div>
			{/each}

			<div style="margin-top: 24px; display: flex; flex-wrap: wrap; gap: 12px;">
				<a href="/d/convert" class="bm-btn-dark" style="padding: 10px 24px;">
					Ready to Convert
				</a>
				<a href="/d/contact" class="bm-btn-outline" style="padding: 10px 24px;">
					Ask a Question
				</a>
			</div>
		</div>
	</div>
</section>
