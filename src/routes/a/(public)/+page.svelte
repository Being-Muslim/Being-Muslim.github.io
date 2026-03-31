<script lang="ts">
	import { base } from '$app/paths';
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
		Mail
	} from 'lucide-svelte';

	const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);
	const featuredProducts = products.slice(0, 2);
	const featuredCourses = courses.slice(0, 3);

	let testimonialIndex = $state(0);

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
<section class="relative flex min-h-[90vh] items-center overflow-hidden bg-bg-dark">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" stroke-width="0.5" class="text-text-cream" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1280px] px-4 py-32 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<div class="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-text-cream/80">
				<Heart class="h-4 w-4 text-accent-gold" />
				<span>10,000+ books distributed worldwide</span>
			</div>

			<h1 class="font-display text-4xl font-bold leading-tight text-text-cream sm:text-5xl lg:text-6xl">
				Your guide to a meaningful
				<span class="text-accent-gold">Islamic journey</span>
			</h1>

			<p class="mt-6 max-w-xl text-lg leading-relaxed text-text-cream/80 sm:text-xl">
				Whether you're exploring Islam, newly converted, or reconnecting with your faith —
				find the knowledge, community, and support you need to thrive.
			</p>

			<div class="mt-10 flex flex-wrap gap-4">
				<Button size="lg" class="bg-accent-primary text-text-cream hover:bg-accent-hover">
					{#snippet children()}
						Start Learning
						<ArrowRight class="ml-1 h-5 w-5" />
					{/snippet}
				</Button>
				<Button variant="outline" size="lg" class="border-text-cream/30 text-text-cream hover:bg-white/10 hover:text-text-cream">
					{#snippet children()}
						Explore Resources
					{/snippet}
				</Button>
			</div>
		</div>
	</div>

	<!-- Gradient fade at bottom -->
	<div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent"></div>
</section>

<!-- ============================== -->
<!-- 2. SOCIAL PROOF BAR            -->
<!-- ============================== -->
<section class="-mt-12 relative z-10">
	<div class="mx-auto max-w-[1080px] px-4 sm:px-6">
		<div class="grid grid-cols-2 gap-4 rounded-2xl bg-surface p-6 shadow-lg sm:grid-cols-4 sm:p-8">
			{#each stats as stat}
				<div class="text-center">
					<p class="font-display text-2xl font-bold text-accent-primary sm:text-3xl">{stat.value}</p>
					<p class="mt-1 text-sm text-text-secondary">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 3. WHO IS THIS FOR?            -->
<!-- ============================== -->
<Section>
	<div class="text-center">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">Where are you on your journey?</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
			Everyone's path is unique. Find the right starting point for you.
		</p>
	</div>

	<div class="mt-12 grid gap-6 sm:grid-cols-3">
		{#each audiencePaths as path}
			{@const Icon = audienceIcons[path.icon as keyof typeof audienceIcons]}
			<a href={path.href} class="group">
				<div class="flex h-full flex-col rounded-xl border border-border bg-surface p-8 transition-all duration-200 hover:border-accent-primary/30 hover:shadow-lg">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary transition-colors group-hover:bg-accent-primary group-hover:text-text-cream">
						<Icon class="h-6 w-6" />
					</div>
					<h3 class="font-display text-xl font-semibold">{path.title}</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{path.description}</p>
					<div class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-primary">
						{path.cta}
						<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</div>
				</div>
			</a>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 4. FEATURED CONTENT            -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="flex items-end justify-between">
		<div>
			<h2 class="font-display text-3xl font-bold sm:text-4xl">Latest Resources</h2>
			<p class="mt-2 text-text-secondary">Fresh insights to guide your journey</p>
		</div>
		<a href="{base}/articles" class="hidden items-center gap-1 text-sm font-medium text-accent-primary hover:underline sm:inline-flex">
			View all resources
			<ArrowRight class="h-4 w-4" />
		</a>
	</div>

	<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each featuredArticles as article}
			<a href="{base}/articles/{article.slug}" class="group">
				<div class="overflow-hidden rounded-xl border border-border bg-surface transition-all hover:shadow-lg">
					<div class="aspect-[16/10] bg-gradient-to-br from-accent-primary/20 to-accent-gold/20">
						<!-- Placeholder for article image -->
						<div class="flex h-full items-center justify-center">
							<BookOpen class="h-12 w-12 text-accent-primary/40" />
						</div>
					</div>
					<div class="p-5">
						<div class="flex items-center gap-2">
							<Badge variant="secondary">
								{#snippet children()}{article.category}{/snippet}
							</Badge>
							<span class="text-xs text-text-secondary">{article.readingTime}</span>
						</div>
						<h3 class="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-accent-primary">
							{article.title}
						</h3>
						<p class="mt-2 line-clamp-2 text-sm text-text-secondary">{article.excerpt}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>

	<div class="mt-6 text-center sm:hidden">
		<a href="{base}/articles" class="inline-flex items-center gap-1 text-sm font-medium text-accent-primary">
			View all resources
			<ArrowRight class="h-4 w-4" />
		</a>
	</div>
</Section>

<!-- ============================== -->
<!-- 5. PRODUCTS SPOTLIGHT          -->
<!-- ============================== -->
<Section>
	<div class="grid items-center gap-12 lg:grid-cols-2">
		<div>
			<Badge variant="gold">
				{#snippet children()}Bestselling Resources{/snippet}
			</Badge>
			<h2 class="mt-4 font-display text-3xl font-bold sm:text-4xl">
				Everything you need to begin
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-text-secondary">
				Dr. Asad Tarsin's comprehensive guide has helped thousands navigate their first steps in Islam.
				Now available as a complete boxed set with prayer cards and quick-reference guides.
			</p>

			<div class="mt-8 space-y-4">
				{#each featuredProducts as product}
					<a href="{base}/shop/{product.handle}" class="group flex gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent-primary/30 hover:shadow-md">
						<div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary/10 to-accent-gold/10">
							<BookOpen class="h-8 w-8 text-accent-primary/60" />
						</div>
						<div class="flex flex-1 flex-col justify-center">
							<div class="flex items-center gap-2">
								<h3 class="font-display text-base font-semibold">{product.title}</h3>
								{#if product.badge}
									<Badge variant="gold">
										{#snippet children()}{product.badge}{/snippet}
									</Badge>
								{/if}
							</div>
							<div class="mt-1 flex items-center gap-3">
								<span class="font-semibold text-accent-primary">${product.price}</span>
								<span class="flex items-center gap-0.5 text-xs text-accent-gold">
									<Star class="h-3 w-3 fill-current" />
									{product.rating} ({product.reviewCount})
								</span>
							</div>
						</div>
						<div class="flex items-center">
							<ArrowRight class="h-5 w-5 text-text-secondary transition-transform group-hover:translate-x-1 group-hover:text-accent-primary" />
						</div>
					</a>
				{/each}
			</div>

			<Button variant="outline" class="mt-6">
				{#snippet children()}
					Browse All Products
					<ArrowRight class="ml-1 h-4 w-4" />
				{/snippet}
			</Button>
		</div>

		<!-- Product Image Area -->
		<div class="flex items-center justify-center">
			<div class="relative aspect-square w-full max-w-md rounded-2xl bg-gradient-to-br from-bg-dark to-accent-primary/80 p-12">
				<div class="flex h-full flex-col items-center justify-center text-center text-text-cream">
					<BookOpen class="mb-4 h-20 w-20 opacity-60" />
					<p class="font-display text-2xl font-bold">Being Muslim</p>
					<p class="mt-2 text-sm text-text-cream/70">A Practical Guide</p>
					<p class="mt-1 text-xs text-text-cream/50">by Dr. Asad Tarsin</p>
				</div>
				<!-- Decorative circle -->
				<div class="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-accent-gold/20 blur-xl"></div>
				<div class="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-accent-primary/20 blur-xl"></div>
			</div>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 6. COURSE PREVIEW              -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="text-center">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">Learn at your own pace</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
			Structured courses designed by scholars and educators to guide you step by step.
		</p>
	</div>

	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each featuredCourses as course}
			<a href="{base}/courses/{course.slug}" class="group">
				<div class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:shadow-lg">
					<div class="aspect-[16/9] bg-gradient-to-br from-accent-green/20 to-accent-primary/20">
						<div class="flex h-full items-center justify-center">
							<Play class="h-12 w-12 text-accent-green/40" />
						</div>
					</div>
					<div class="flex flex-1 flex-col p-5">
						<div class="flex items-center gap-2">
							<Badge variant={course.difficulty === 'Beginner' ? 'green' : 'secondary'}>
								{#snippet children()}{course.difficulty}{/snippet}
							</Badge>
							<span class="text-xs text-text-secondary">{course.lessonCount} lessons</span>
						</div>
						<h3 class="mt-3 font-display text-lg font-semibold group-hover:text-accent-primary">
							{course.title}
						</h3>
						<p class="mt-2 flex-1 text-sm text-text-secondary line-clamp-2">{course.description}</p>
						<div class="mt-4 flex items-center justify-between text-xs text-text-secondary">
							<span>{course.instructor}</span>
							<span>{course.duration}</span>
						</div>
						{#if course.enrolled}
							<div class="mt-3">
								<div class="flex items-center justify-between text-xs text-text-secondary">
									<span>{course.enrolled?.toLocaleString()} enrolled</span>
								</div>
								<Progress value={65} class="mt-1.5 h-1.5" />
							</div>
						{/if}
					</div>
				</div>
			</a>
		{/each}
	</div>

	<div class="mt-10 text-center">
		<Button variant="outline">
			{#snippet children()}
				Explore All Courses
				<ArrowRight class="ml-1 h-4 w-4" />
			{/snippet}
		</Button>
	</div>
</Section>

<!-- ============================== -->
<!-- 7. COMMUNITY TEASER            -->
<!-- ============================== -->
<Section>
	<div class="overflow-hidden rounded-2xl bg-gradient-to-br from-bg-dark to-accent-primary/20">
		<div class="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
			<div>
				<h2 class="font-display text-3xl font-bold text-text-cream sm:text-4xl">
					You're not on this journey alone
				</h2>
				<p class="mt-4 text-lg leading-relaxed text-text-cream/80">
					Join a supportive community of fellow seekers, converts, and lifelong Muslims. Ask questions, share experiences, and grow together.
				</p>
				<div class="mt-8 flex flex-wrap gap-6">
					<div class="flex items-center gap-2">
						<Users class="h-5 w-5 text-accent-gold" />
						<span class="text-text-cream"><strong class="text-accent-gold">2,500+</strong> members</span>
					</div>
					<div class="flex items-center gap-2">
						<MessageCircle class="h-5 w-5 text-accent-gold" />
						<span class="text-text-cream"><strong class="text-accent-gold">1,200+</strong> discussions</span>
					</div>
				</div>
				<Button size="lg" class="mt-8 bg-accent-primary text-text-cream hover:bg-accent-hover">
					{#snippet children()}
						Join the Community
						<ArrowRight class="ml-1 h-5 w-5" />
					{/snippet}
				</Button>
			</div>

			<!-- Chat Preview -->
			<div class="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
				<div class="space-y-4">
					{#each [
						{ name: 'Aminah', msg: 'Salaam everyone! Just took my shahada yesterday 🤲', time: '2m ago' },
						{ name: 'Omar', msg: 'MashaAllah! Welcome to the family, sister! 💚', time: '1m ago' },
						{ name: 'Fatima', msg: 'So happy for you! Feel free to ask anything here.', time: 'just now' }
					] as message}
						<div class="flex gap-3">
							<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-primary/30 text-xs font-bold text-text-cream">
								{message.name[0]}
							</div>
							<div>
								<div class="flex items-center gap-2">
									<span class="text-sm font-medium text-text-cream">{message.name}</span>
									<span class="text-xs text-text-cream/40">{message.time}</span>
								</div>
								<p class="mt-0.5 text-sm text-text-cream/70">{message.msg}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 8. DONATION / SPONSORSHIP      -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="text-center">
		<Badge variant="gold">
			{#snippet children()}Make an Impact{/snippet}
		</Badge>
		<h2 class="mt-4 font-display text-3xl font-bold sm:text-4xl">
			Sponsor a boxed set for a new Muslim
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
			Many new Muslims can't afford the resources they need. Your sponsorship puts a complete
			Being Muslim boxed set in their hands — a gift that transforms lives.
		</p>
	</div>

	<!-- Impact Stats -->
	<div class="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
		<div class="text-center">
			<p class="font-display text-2xl font-bold text-accent-primary">
				{donationStats.totalSponsored.toLocaleString()}
			</p>
			<p class="mt-1 text-xs text-text-secondary">Sets Sponsored</p>
		</div>
		<div class="text-center">
			<p class="font-display text-2xl font-bold text-accent-primary">
				{donationStats.communitiesReached}
			</p>
			<p class="mt-1 text-xs text-text-secondary">Communities</p>
		</div>
		<div class="text-center">
			<p class="font-display text-2xl font-bold text-accent-primary">
				{donationStats.countriesReached}
			</p>
			<p class="mt-1 text-xs text-text-secondary">Countries</p>
		</div>
		<div class="text-center">
			<p class="font-display text-2xl font-bold text-accent-primary">
				{donationStats.monthlyDonors}
			</p>
			<p class="mt-1 text-xs text-text-secondary">Monthly Donors</p>
		</div>
	</div>

	<!-- Sponsorship Tiers -->
	<div class="mt-12 grid gap-6 sm:grid-cols-3">
		{#each sponsorshipTiers as tier}
			<div
				class="relative flex flex-col rounded-xl border bg-surface p-6 transition-all hover:shadow-lg {tier.popular
					? 'border-accent-primary shadow-md'
					: 'border-border'}"
			>
				{#if tier.popular}
					<div class="absolute -top-3 left-1/2 -translate-x-1/2">
						<Badge variant="default">
							{#snippet children()}Most Popular{/snippet}
						</Badge>
					</div>
				{/if}
				<h3 class="font-display text-lg font-semibold">{tier.name}</h3>
				<p class="mt-2 flex-1 text-sm text-text-secondary">{tier.description}</p>
				<p class="mt-4 font-display text-3xl font-bold text-accent-primary">
					${tier.price}
				</p>
				<p class="mt-1 text-xs text-text-secondary">{tier.impact}</p>
				<Button variant={tier.popular ? 'default' : 'outline'} class="mt-6 w-full">
					{#snippet children()}
						Sponsor Now
						<Heart class="ml-1 h-4 w-4" />
					{/snippet}
				</Button>
			</div>
		{/each}
	</div>

	<div class="mt-8 text-center">
		<a href="{base}/give" class="inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline">
			Learn more about giving
			<ArrowRight class="h-4 w-4" />
		</a>
	</div>
</Section>

<!-- ============================== -->
<!-- 9. TESTIMONIALS                -->
<!-- ============================== -->
<Section>
	<div class="text-center">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">What people are saying</h2>
	</div>

	<div class="relative mx-auto mt-12 max-w-3xl">
		<!-- Testimonial Card -->
		<div class="rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
			<div class="flex justify-center gap-1">
				{#each Array(5) as _}
					<Star class="h-5 w-5 fill-accent-gold text-accent-gold" />
				{/each}
			</div>
			<blockquote class="mt-6 font-display text-xl leading-relaxed sm:text-2xl">
				"{testimonials[testimonialIndex].quote}"
			</blockquote>
			<div class="mt-6">
				<p class="font-semibold">{testimonials[testimonialIndex].name}</p>
				<p class="text-sm text-text-secondary">{testimonials[testimonialIndex].role}</p>
			</div>
		</div>

		<!-- Navigation -->
		<div class="mt-6 flex items-center justify-center gap-4">
			<button
				onclick={prevTestimonial}
				class="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:bg-secondary"
				aria-label="Previous testimonial"
			>
				<ChevronLeft class="h-5 w-5" />
			</button>
			<div class="flex gap-2">
				{#each testimonials as _, i}
					<button
						class="h-2 w-2 rounded-full transition-colors {i === testimonialIndex
							? 'bg-accent-primary'
							: 'bg-border'}"
						onclick={() => (testimonialIndex = i)}
						aria-label="Go to testimonial {i + 1}"
					></button>
				{/each}
			</div>
			<button
				onclick={nextTestimonial}
				class="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:bg-secondary"
				aria-label="Next testimonial"
			>
				<ChevronRight class="h-5 w-5" />
			</button>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 10. NEWSLETTER SIGNUP          -->
<!-- ============================== -->
<section class="bg-bg-dark py-16 sm:py-24">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<Mail class="mx-auto h-10 w-10 text-accent-gold" />
			<h2 class="mt-4 font-display text-3xl font-bold text-text-cream sm:text-4xl">
				Stay on the path
			</h2>
			<p class="mt-4 text-text-cream/70">
				Weekly insights, resources, and encouragement delivered to your inbox. No spam — just guidance for your journey.
			</p>

			<form
				class="mt-8 flex flex-col gap-3 sm:flex-row"
				onsubmit={(e) => {
					e.preventDefault();
					// TODO: Newsletter signup integration
				}}
			>
				<input
					type="email"
					bind:value={email}
					placeholder="Enter your email"
					required
					class="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-text-cream placeholder:text-text-cream/40 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/50"
				/>
				<Button size="lg" class="bg-accent-primary text-text-cream hover:bg-accent-hover">
					{#snippet children()}
						Subscribe
						<ArrowRight class="ml-1 h-4 w-4" />
					{/snippet}
				</Button>
			</form>

			<p class="mt-3 text-xs text-text-cream/40">
				Join 5,000+ subscribers. Unsubscribe anytime.
			</p>
		</div>
	</div>
</section>
