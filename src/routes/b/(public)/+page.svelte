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
		Fingerprint,
		Wrench,
		ShieldCheck,
		Diamond,
		ChevronDown
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
<section class="relative flex min-h-[83vh] flex-col justify-end overflow-hidden">
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

	<div class="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-32 pb-12 lg:px-10">
		<div class="max-w-[680px]">
			<h1 class="font-display text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[68px]">
				Your guide to a meaningful
				<span class="italic font-normal text-amber-200/90">journey</span>
			</h1>

			<p class="mt-6 max-w-[480px] text-[16px] leading-[1.65] text-white/80">
				Whether you're exploring Islam, newly converted, or reconnecting with your faith — find the knowledge, community, and support you need.
			</p>

			<div class="mt-8 flex flex-wrap items-center gap-4">
				<!-- White button -->
				<a
					href="/b"
					class="bm-btn-white"
				style="padding: 14px 28px; font-weight: 600;"
				>
					Start Learning
					<ArrowRight class="h-4 w-4" />
				</a>
				<!-- Glass button -->
				<a
					href="/b"
					class="bm-btn-glass"
				style="padding: 14px 28px; font-weight: 600;"
				>
					Explore Resources
				</a>
			</div>
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

</section>

<!-- ============================== -->
<!-- LEARN / CONVERT / SHOP         -->
<!-- ============================== -->
<section style="background: #faf9f5; padding: 32px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="background: #e3dacc; border-radius: 16px; padding: 48px; display: grid; grid-template-columns: 1fr 280px 280px; gap: 20px; align-items: stretch;">
			<!-- Left: title + description + CTA -->
			<div style="display: flex; flex-direction: column; justify-content: space-between; padding-right: 24px;">
				<div>
					<h2 style="font-family: 'Source Serif 4', serif; font-size: 36px; font-weight: 400; color: #2a2018; margin: 0 0 16px; line-height: 1.15;">Explore your path</h2>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #5a5248; line-height: 1.6; margin: 0;">
						Discover Islam through courses, articles, and guides. Whether you're curious, converting, or deepening your practice — find resources made for you.
					</p>
				</div>
				<div style="margin-top: 24px;">
					<a href="/b/learn" class="bm-btn-outline" style="padding: 10px 24px;">
						See all resources
					</a>
				</div>
			</div>

			<!-- Card: Learn -->
			<a href="/b/learn" class="bm-card-hover" style="background: #f0eee6; border-radius: 12px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none;">
				<div>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #6a6258; margin: 0 0 8px; letter-spacing: 0.02em;">Learn</p>
					<p style="font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #2a2018; margin: 0; line-height: 1.2;">Courses &amp; Resources</p>
				</div>
				<div style="margin-top: 24px; text-align: right;">
					<ArrowRight class="h-5 w-5" style="color: #2a2018;" />
				</div>
			</a>

			<!-- Card: Convert -->
			<a href="/b/convert" class="bm-card-hover" style="background: #f0eee6; border-radius: 12px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none;">
				<div>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #6a6258; margin: 0 0 8px; letter-spacing: 0.02em;">Convert</p>
					<p style="font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #2a2018; margin: 0; line-height: 1.2;">Start Your Journey</p>
				</div>
				<div style="margin-top: 24px; text-align: right;">
					<ArrowRight class="h-5 w-5" style="color: #2a2018;" />
				</div>
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 4. FEATURED ARTICLES           -->
<!-- ============================== -->
<section style="background: #f4f1eb; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 32px;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0;">
				Latest Resources
			</h2>
			<a href="/b/learn" class="bm-view-all" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
				View all <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>

		<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
			{#each [
				{ title: 'Brief Overview of Islam', category: 'Foundations', time: '10 min read', href: '/b/learn/brief-overview-of-islam', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png' },
				{ title: "A Beginner's Guide to Being a Muslim", category: 'New Muslims', time: '12 min read', href: '/b/learn/beginners-guide', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg' },
				{ title: 'Islam and Other Faiths', category: 'Belief', time: '8 min read', href: '/b/learn/islam-and-other-faiths', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/oneGodmanynames.jpeg' }
			] as article}
				<a href={article.href} style="text-decoration: none; display: block;" class="bm-title-underline-parent">
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
	</div>
</section>

<!-- ============================== -->
<!-- 5. PRODUCTS                    -->
<!-- ============================== -->
<section style="background: #faf9f5; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 32px; text-align: center;">
			Everything you need to begin
		</h2>

		<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
			{#each [
				{ title: 'Being Muslim: A Practical Guide', price: '$14.95', badge: 'Bestseller', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg', href: '/b/shop/book' },
				{ title: 'The Complete Boxed Set', price: '$85.00', badge: 'Most Popular', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg', href: '/b/shop/boxed-set' },
				{ title: 'Prayer Reference Cards', price: '$37.50', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg', href: '/b/shop/prayer-cards' },
				{ title: 'Digital Edition (eBook)', price: '$9.00', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png', href: '/b/shop/ebook' }
			] as product}
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
					<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 400; color: #2a2018; margin: 0 0 6px; line-height: 1.3;">{product.title}</h3>
					<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018;">{product.price}</span>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 32px;">
			<a href="/b/shop" class="bm-btn-outline" style="padding: 10px 24px;">
				Browse All Products <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 6. COURSES                     -->
<!-- ============================== -->
<section style="background: #f4f1eb; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: grid; grid-template-columns: 1fr 300px; gap: 24px; margin-bottom: 32px;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0;">
				Learn at your own pace
			</h2>
			<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; line-height: 1.55; align-self: end; margin: 0;">
				Structured courses designed by scholars and educators to guide you step by step.
			</p>
		</div>

		<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
			{#each [
				{ title: 'Foundations of Faith', instructor: 'Dr. Asad Tarsin', lessons: 24, duration: '6 hours', level: 'Beginner', img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80&auto=format&fit=crop' },
				{ title: 'Prayer Mastery', instructor: 'Imam Ahmad', lessons: 16, duration: '4 hours', level: 'Beginner', img: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80&auto=format&fit=crop' },
				{ title: 'Your Quran Journey', instructor: 'Ustadha Fatima', lessons: 32, duration: '10 hours', level: 'Beginner', img: 'https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=600&q=80&auto=format&fit=crop' }
			] as course}
				<a href="/b/learn" style="text-decoration: none; display: block;" class="bm-title-underline-parent">
					<div style="aspect-ratio: 4/3; background: #e2dcd2; border-radius: 12px; overflow: hidden; position: relative; margin-bottom: 16px;">
						<img src={course.img} alt={course.title} style="width: 100%; height: 100%; object-fit: cover;" />
						<!-- Play icon overlay -->
						<div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
							<div style="width: 56px; height: 56px; border-radius: 999px; background: rgba(255,255,255,0.9); display: flex; align-items: center; justify-content: center;">
								<Play class="h-6 w-6" style="color: #2a2018; margin-left: 2px;" />
							</div>
						</div>
						<span style="position: absolute; top: 12px; left: 12px; font-size: 10px; font-weight: 600; color: #2a2018; background: #fff; padding: 3px 10px; border-radius: 999px;">{course.level}</span>
					</div>
					<h3 class="bm-title-underline" style="font-size: 18px; color: #2a2018; margin: 0 0 8px; line-height: 1.3;">{course.title}</h3>
					<div style="display: flex; align-items: center; gap: 12px;">
						<span style="font-size: 12px; font-weight: 500; color: #2a2018;">{course.instructor}</span>
						<span style="font-size: 12px; color: #a09888;">{course.lessons} lessons · {course.duration}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 7. COMMUNITY                   -->
<!-- ============================== -->
<section style="padding: 64px 0; background: #faf9f5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="background: #2a2018; border-radius: 16px; overflow: hidden;">
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0;">
				<!-- Left -->
				<div style="padding: 48px;">
					<h2 style="font-family: 'Source Serif 4', serif; font-size: 36px; font-weight: 400; color: #fff; margin: 0 0 16px; line-height: 1.15;">
						You're not on this journey alone
					</h2>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.6; margin: 0 0 28px;">
						Join a supportive community of fellow seekers, converts, and lifelong Muslims. Ask questions, share experiences, and grow together.
					</p>
					<div style="display: flex; gap: 24px; margin-bottom: 32px;">
						<div style="display: flex; align-items: center; gap: 6px;">
							<Users class="h-4 w-4" style="color: #c8b8a0;" />
							<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: rgba(255,255,255,0.8);"><strong style="color: #c8b8a0;">2,500+</strong> members</span>
						</div>
						<div style="display: flex; align-items: center; gap: 6px;">
							<MessageCircle class="h-4 w-4" style="color: #c8b8a0;" />
							<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: rgba(255,255,255,0.8);"><strong style="color: #c8b8a0;">1,200+</strong> discussions</span>
						</div>
					</div>
					<a href="/b/community" class="bm-btn-white">
						Join the Community <ArrowRight class="h-3.5 w-3.5" />
					</a>
				</div>
				<!-- Right: chat preview -->
				<div style="padding: 48px; background: rgba(255,255,255,0.03); border-left: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; justify-content: center;">
					{#each [
						{ name: 'Aminah', msg: 'Salaam everyone! Just took my shahada yesterday', time: '2m ago' },
						{ name: 'Omar', msg: 'MashaAllah! Welcome to the family, sister!', time: '1m ago' },
						{ name: 'Fatima', msg: 'So happy for you! Feel free to ask anything here.', time: 'just now' }
					] as message}
						<div style="display: flex; gap: 12px; padding: 12px 0; {message.name !== 'Aminah' ? 'border-top: 1px solid rgba(255,255,255,0.06);' : ''}">
							<div style="width: 32px; height: 32px; border-radius: 999px; background: rgba(200,184,160,0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #c8b8a0;">
								{message.name[0]}
							</div>
							<div>
								<div style="display: flex; align-items: center; gap: 8px;">
									<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #fff;">{message.name}</span>
									<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; color: rgba(255,255,255,0.3);">{message.time}</span>
								</div>
								<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: rgba(255,255,255,0.55); margin: 3px 0 0; line-height: 1.4;">{message.msg}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 8. SUPPORT CTA                 -->
<!-- ============================== -->
<section style="background: #f4f1eb; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center;">
			<div>
				<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 16px;">
					Help a new Muslim begin their journey
				</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 0 0 28px;">
					Many new Muslims can't afford the resources they need. Your sponsorship puts a complete Being Muslim boxed set in their hands — a gift that transforms lives.
				</p>
				<a href="/b/support" class="bm-btn-outline" style="padding: 10px 24px;">
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
					<div style="background: #faf9f5; border-radius: 10px; padding: 24px;">
						<p style="font-family: 'Source Serif 4', serif; font-size: 32px; font-weight: 400; line-height: 1; color: #2a2018; margin: 0;">{stat.value}</p>
						<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; margin: 6px 0 0;">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 9. TESTIMONIALS                -->
<!-- ============================== -->
<section style="background: #faf9f5; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 40px; text-align: center;">
			What people are saying
		</h2>

		<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
			{#each testimonials.slice(0, 3) as testimonial}
				<div style="background: #fff; border-radius: 12px; padding: 32px; display: flex; flex-direction: column;">
					<div style="display: flex; gap: 3px; margin-bottom: 16px;">
						{#each Array(5) as _}
							<Star class="h-4 w-4 fill-amber-400 text-amber-400" />
						{/each}
					</div>
					<blockquote style="font-size: 15px; line-height: 1.55; color: #2a2018; margin: 0 0 20px; flex: 1;">
						"{testimonial.quote}"
					</blockquote>
					<div>
						<p style="font-size: 14px; font-weight: 600; color: #2a2018; margin: 0;">{testimonial.name}</p>
						<p style="font-size: 13px; color: #8a7e70; margin: 4px 0 0;">{testimonial.role}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 10. FAQ                        -->
<!-- ============================== -->
<section style="background: #f4f1eb; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 800px;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 32px;">
				Frequently Asked Questions
			</h2>

			{#each [
				{ q: 'I just converted, what do I do next?', a: 'Congratulations and may God bless your path ahead! We have written an article that offers some advice and important first steps: "A Beginner\'s Guide to Being a Muslim." You can find it on our Learn page.' },
				{ q: 'My family is not supportive of my conversion. What do you advise?', a: 'This is a common challenge many new Muslims face. We recommend patience, maintaining loving relationships, and leading by positive example. Our community forum has many discussions from people who have navigated this successfully.' },
				{ q: 'Can you help me find a mosque or community of Muslims near me?', a: 'We can help connect you with local communities. Reach out through our Contact page and we will do our best to help you find a welcoming community in your area.' },
				{ q: 'My previous faith was very dear to me. Do I have to reject it entirely?', a: 'Islam acknowledges and respects the earlier prophets and scriptures. Many of the values you cherished in your previous faith are shared in Islam. Your journey enriches rather than erases your spiritual history.' },
				{ q: 'Do I need to change my name now that I have become Muslim?', a: 'No, changing your name is not required in Islam. Many Muslims keep their birth names. Some choose to adopt a new name as a personal expression of their new identity, but this is entirely optional.' },
				{ q: 'I want to convert, but I find it difficult to change my lifestyle. Can I still become Muslim?', a: 'Absolutely. Islam teaches that faith is a journey, not a destination. You do not need to be perfect to begin. Start with the essentials and grow at your own pace — God is patient and merciful.' },
				{ q: 'My spouse is not a Muslim. How does becoming Muslim impact my marriage?', a: 'This is a nuanced topic that depends on your specific situation. We recommend speaking with a knowledgeable scholar who can provide guidance tailored to your circumstances. Reach out through our Contact page.' }
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

			<div style="margin-top: 24px; display: flex; gap: 12px;">
				<a href="/b/convert" class="bm-btn-dark" style="padding: 10px 24px;">
					Ready to Convert
				</a>
				<a href="/b/contact" class="bm-btn-outline" style="padding: 10px 24px;">
					Ask a Question
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 11. NEWSLETTER                 -->
<!-- ============================== -->
<section style="background: #191918; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;">
			<!-- Left: text -->
			<div>
				<h2 style="font-size: 28px; color: #fff; margin: 0 0 12px;">
					Join the Community
				</h2>
				<p style="font-size: 15px; color: rgba(255,255,255,0.55); line-height: 1.6; margin: 0;">
					Join our mailing list for community updates and announcements on new resources and products!
				</p>
			</div>
			<!-- Right: form -->
			<div>
				<form
					style="position: relative; margin-bottom: 12px;"
					onsubmit={(e) => { e.preventDefault(); }}
				>
					<input
						type="email"
						bind:value={email}
						placeholder="Enter your email"
						required
						style="width: 100%; padding: 16px 60px 16px 20px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.08); color: #fff; font-size: 14px; outline: none; box-sizing: border-box;"
					/>
					<button type="submit" class="bm-newsletter-btn" style="position: absolute; right: 4px; top: 50%; transform: translateY(-50%); width: 44px; height: 44px; border-radius: 999px; background: #fff; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer;">
						<ArrowRight class="h-4 w-4" style="color: #191918;" />
					</button>
				</form>
				<p style="font-size: 12px; color: rgba(255,255,255,0.35); margin: 0;">
					Join 5,000+ subscribers. Unsubscribe anytime.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Styles now in /src/routes/b/styles.css -->
