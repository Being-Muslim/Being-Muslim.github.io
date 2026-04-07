<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import {
		stats,
		audiencePaths,
		articles,
		products,
		courses,
		testimonials,
		donationStats,
		sponsorshipTiers
	} from '$lib/data/mock.js';
	import {
		ArrowRight,
		BookOpen,
		Compass,
		RefreshCw,
		Sunrise,
		Star,
		Play,
		Users,
		MessageCircle,
		Heart,
		ChevronLeft,
		ChevronRight,
		Mail,
		Menu,
		X,
		Fingerprint,
		Wrench,
		ShieldCheck,
		Diamond,
		ChevronDown,
		CircleUserRound
	} from 'lucide-svelte';

	const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);
	const featuredProducts = products.slice(0, 2);
	const featuredCourses = courses.slice(0, 3);

	let testimonialIndex = $state(0);
	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	function nextTestimonial() {
		testimonialIndex = (testimonialIndex + 1) % testimonials.length;
	}
	function prevTestimonial() {
		testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
	}

	const audienceIcons = { compass: Compass, sunrise: Sunrise, refresh: RefreshCw } as const;

	let email = $state('');
</script>

<svelte:head>
	<title>Being Muslim — Your Guide to a Meaningful Islamic Journey</title>
	<meta
		name="description"
		content="Empowering converts and beginners on their Islamic journey through education, community, and support."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO SECTION                -->
<!-- ============================== -->
<section class="relative flex min-h-screen flex-col justify-end overflow-hidden">
	<!-- Background Image -->
	<div class="absolute inset-0">
		<img
			src="/images/hero-bg.jpg"
			alt=""
			class="h-full w-full object-cover"
		/>
		<!-- Warm gradient overlay -->
		<div class="absolute inset-0" style="background: linear-gradient(180deg, rgba(40,35,28,0.3) 0%, rgba(40,35,28,0.1) 40%, rgba(40,35,28,0.55) 100%);"></div>
	</div>

	<div class="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-32 lg:px-10">
		<div class="max-w-[680px]">
			<h1 class="font-display text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[68px]">
				Navigating the
				<span class="italic font-normal text-amber-200/90">Path</span>
				to Islam
			</h1>

			<p class="mt-6 max-w-[520px] text-[16px] leading-[1.65] text-white/80">
				Empowering new and beginner Muslims with comprehensive education and support to navigate your journey and deepen your understanding and connection with faith.
			</p>

		</div>

		<!-- Trust bar -->
		<div class="mt-8 flex items-center">
			<div class="flex items-center gap-3">
				<div class="flex -space-x-2">
					{#each ['#7a8b6e', '#a08b6e', '#6e7a8b', '#8b6e7a'] as color}
						<div class="h-9 w-9 rounded-full border-2 border-white/80" style="background: {color};"></div>
					{/each}
				</div>
				<div class="text-[13px] text-white">
					<span class="font-semibold">Trusted by</span>
					<span class="text-white/80">10,000+ learners</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Explore your path section -->
	<div class="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10 mt-10 pb-8">
		<div class="grid grid-cols-1 sm:grid-cols-3 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl overflow-hidden">
			<!-- Learn — expanded card -->
			<a href="/c-staging/learn" class="group relative p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-white/10 hover:bg-white/5 transition-colors">
				<h3 class="font-display text-xl font-bold text-white mb-2">Learn</h3>
				<p class="text-[13px] text-white/60 leading-relaxed max-w-[260px] mb-5">
					Explore articles, guides, and resources on Islamic faith and practice
				</p>
				<span class="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-1.5 text-[12px] font-medium text-white transition-all group-hover:bg-white/10">
					Discover More
				</span>
			</a>

			<!-- Convert -->
			<a href="/c-staging/convert" class="group relative p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-white/10 hover:bg-white/5 transition-colors">
				<h3 class="font-display text-xl font-bold text-white mb-2">Convert</h3>
				<p class="text-[13px] text-white/60 leading-relaxed max-w-[260px] mb-5">
					Take the next step on your journey with guidance and support
				</p>
				<span class="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-1.5 text-[12px] font-medium text-white transition-all group-hover:bg-white/10">
					Start Journey
				</span>
			</a>

			<!-- Buy -->
			<a href="/c-staging/shop" class="group relative p-6 sm:p-8 hover:bg-white/5 transition-colors">
				<h3 class="font-display text-xl font-bold text-white mb-2">Buy</h3>
				<p class="text-[13px] text-white/60 leading-relaxed max-w-[260px] mb-5">
					Books, prayer cards, and resources for your journey
				</p>
				<span class="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-1.5 text-[12px] font-medium text-white transition-all group-hover:bg-white/10">
					Browse Products
				</span>
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 4. FEATURED ARTICLES           -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #f4f1eb;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 32px;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0;">
				Latest Resources
			</h2>
			<a href="/c-staging/learn" class="bm-view-all" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
				View all <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>

		<!-- Bento grid: left image spans 2 rows, right cards share those rows, left text in row 3 -->
		<div class="bm-grid-bento">
			<!-- Left: featured image spanning rows 1-2 -->
			<a href="/c-staging/learn" style="display: block; text-decoration: none; border-radius: 12px; overflow: hidden; background: #e2dcd2;" class="bm-title-underline-parent">
				<img src="https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png" alt="Brief Overview of Islam" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
			</a>

			<!-- Right top card (row 1) -->
			<a href="/c-staging/learn" class="bm-grid-article-card bm-title-underline-parent" style="text-decoration: none;">
				<div style="background: #e2dcd2; border-radius: 10px; overflow: hidden; height: 100%;">
					<img src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg" alt="A Beginner's Guide to Being a Muslim" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
				</div>
				<div>
					<h3 class="bm-title-underline" style="font-size: 22px; color: #2a2018; margin: 0 0 14px; line-height: 1.3;">A Beginner's Guide to Being a Muslim</h3>
					<p style="font-size: 15px; color: #8a7e70; line-height: 1.45; margin: 0 0 16px;">Practical advice and important first steps for those who have recently embraced Islam.</p>
					<div style="display: flex; align-items: center; gap: 8px;">
						<span style="font-size: 15px; font-weight: 500; color: #2a2018;">New Muslims</span>
						<span style="font-size: 15px; color: #a09888;">12 min read</span>
					</div>
				</div>
			</a>

			<!-- Right bottom card (row 2) -->
			<a href="/c-staging/learn" class="bm-grid-article-card bm-title-underline-parent" style="text-decoration: none;">
				<div style="background: #e2dcd2; border-radius: 10px; overflow: hidden; height: 100%;">
					<img src="https://www.beingmuslim.org/wp-content/uploads/2022/02/foundationsofIsam_YT.jpeg" alt="Islam and Other Faiths" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
				</div>
				<div>
					<h3 class="bm-title-underline" style="font-size: 22px; color: #2a2018; margin: 0 0 14px; line-height: 1.3;">Islam and Other Faiths</h3>
					<p style="font-size: 15px; color: #8a7e70; line-height: 1.45; margin: 0 0 16px;">Understanding common ground and key differences with Christianity, Judaism, and other faiths.</p>
					<div style="display: flex; align-items: center; gap: 8px;">
						<span style="font-size: 15px; font-weight: 500; color: #2a2018;">Belief</span>
						<span style="font-size: 15px; color: #a09888;">8 min read</span>
					</div>
				</div>
			</a>

			<!-- Left: text below image (row 3) -->
			<div>
				<h3 style="font-size: 24px; color: #2a2018; margin: 0 0 6px; line-height: 1.3;">Brief Overview of Islam</h3>
				<p style="font-size: 15px; color: #8a7e70; line-height: 1.5; margin: 0 0 8px;">A clear and accessible introduction to the core beliefs, practices, and history of Islam for those just beginning to learn.</p>
				<div style="display: flex; align-items: center; gap: 10px;">
					<span style="font-size: 15px; font-weight: 500; color: #2a2018;">Foundations</span>
					<span style="font-size: 15px; color: #a09888;">10 min read</span>
				</div>
			</div>
		</div>

		<!-- Additional Resources button -->
		<div style="text-align: center; margin-top: 32px;">
			<a href="/c-staging/learn" class="bm-btn-outline" style="padding: 10px 24px;">
				Additional Resources <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 5. PRODUCTS                    -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #faf9f5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 32px; text-align: center;">
			Everything you need to begin
		</h2>

		<div style="display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 16px; -webkit-overflow-scrolling: touch;">
			{#each [
				{ title: 'Being Muslim: A Practical Guide', price: '$14.95', badge: 'Bestseller', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg', href: '/c-staging/shop/book' },
				{ title: 'The Complete Boxed Set', price: '$85.00', badge: 'Most Popular', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg', href: '/c-staging/shop/boxed-set' },
				{ title: 'Prayer Reference Cards', price: '$37.50', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg', href: '/c-staging/shop/prayer-cards' },
				{ title: 'Digital Edition (eBook)', price: '$9.00', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png', href: '/c-staging/shop/ebook' }
			] as product}
				<a href={product.href} style="text-decoration: none; display: block; flex: 0 0 280px; scroll-snap-align: start;" class="bm-title-underline-parent group">
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
			<a href="/c-staging/shop" class="bm-btn-outline" style="padding: 10px 24px;">
				See All Store Items <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 10. FAQ                        -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #f4f1eb;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 800px; margin: 0 auto;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 32px; text-align: center;">
				Frequently Asked Questions
			</h2>

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
					onclick={() => toggleFaq(i)}
					style="width: 100%; text-align: left; padding: 20px 0; border: none; border-top: 1px solid #e8e3da; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;"
				>
					<span style="font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; color: #2a2018; line-height: 1.4;">{faq.q}</span>
					<ChevronDown class="h-4 w-4 flex-shrink-0 mt-1 transition-transform duration-200 {openFaq === i ? 'rotate-180' : ''}" style="color: #8a7e70;" />
				</button>
				{#if openFaq === i}
					<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.6; margin: 0 0 20px; padding-right: 40px;">{faq.a}</p>
				{/if}
			{/each}

			<div style="margin-top: 24px; display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
				<a href="/c-staging/convert" class="bm-btn-dark" style="padding: 10px 24px;">
					Ready to Convert
				</a>
				<a href="/c-staging/contact" class="bm-btn-outline" style="padding: 10px 24px;">
					Ask a Question
				</a>
			</div>
		</div>
	</div>
</section>
