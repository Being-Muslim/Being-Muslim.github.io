<script lang="ts">
	import { onMount } from 'svelte';
	import {
		ArrowRight,
		BookOpen,
		Check,
		Compass,
		Flame,
		GraduationCap,
		HandHeart,
		Heart,
		Landmark,
		MessageCircle,
		Moon,
		RefreshCw,
		ShoppingBag,
		Sparkles,
		Sprout,
		Star,
		Sun,
		Sunrise,
		Users
	} from 'lucide-svelte';
	import {
		stats,
		audiencePaths,
		guides,
		courses,
		products,
		forumCategories,
		testimonials,
		sponsorshipTiers,
		donationStats
	} from '$lib/data/mock.js';

	// ---------- Hue + icon systems (one hue per path/category, used consistently) ----------
	const pathHues = ['amber', 'coral', 'sky'] as const;
	const pathIcons: Record<string, typeof Compass> = {
		compass: Compass,
		sunrise: Sunrise,
		refresh: RefreshCw
	};

	const guideMeta: Record<string, { icon: typeof Sprout; hue: string }> = {
		'new-muslim': { icon: Sprout, hue: 'rwd-tint-green' },
		'how-to-pray': { icon: Sun, hue: 'rwd-tint-amber' },
		'exploring-islam': { icon: Compass, hue: 'rwd-tint-sky' },
		reconnecting: { icon: RefreshCw, hue: 'rwd-tint-coral' }
	};

	const courseMeta: Record<string, { icon: typeof Sprout; banner: string }> = {
		Foundations: { icon: Sprout, banner: 'rwd-banner-green' },
		Prayer: { icon: Sun, banner: 'rwd-banner-amber' },
		Quran: { icon: BookOpen, banner: 'rwd-banner-sky' },
		History: { icon: Landmark, banner: 'rwd-banner-lilac' }
	};

	const avatarHues = [
		'rwd-tint-green',
		'rwd-tint-amber',
		'rwd-tint-coral',
		'rwd-tint-sky',
		'rwd-tint-lilac'
	];

	const forumIcons: Record<string, typeof Heart> = {
		heart: Heart,
		hands: HandHeart,
		sun: Sun,
		book: BookOpen,
		message: MessageCircle
	};
	const forumHues = [
		'rwd-tint-coral',
		'rwd-tint-green',
		'rwd-tint-amber',
		'rwd-tint-sky',
		'rwd-tint-lilac'
	];

	const shopProducts = products.slice(0, 4);

	// ---------- "Today's first steps" interactive checklist ----------
	let checked = $state(guides.map((_, i) => i === 0));
	let doneCount = $derived(checked.filter(Boolean).length);
	let progressPct = $derived(Math.round((doneCount / guides.length) * 100));

	function toggleStep(i: number) {
		checked[i] = !checked[i];
	}

	// ---------- Scroll reveals (page stays fully visible without JS) ----------
	onMount(() => {
		const root = document.querySelector('.rawdah-root');
		root?.classList.add('rwd-js');

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('rwd-in');
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.12 }
		);

		document.querySelectorAll('.rwd-reveal').forEach((el) => observer.observe(el));

		return () => {
			observer.disconnect();
			root?.classList.remove('rwd-js');
		};
	});
</script>

<svelte:head>
	<title>Being Muslim — A Friendly Companion for Your Journey</title>
	<meta
		name="description"
		content="Warm, practical guidance for new Muslims and beginners. The book, courses, community, and support — one friendly step at a time."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO                        -->
<!-- ============================== -->
<section class="rwd-hero">
	<div class="rwd-hero-blobs" aria-hidden="true">
		<svg style="top: -80px; left: -120px;" width="420" height="420" viewBox="0 0 420 420" fill="none">
			<path
				d="M210 30C300 20 400 90 395 190C390 290 320 380 215 385C110 390 25 320 25 210C25 100 120 40 210 30Z"
				fill="#E6F2E9"
				opacity="0.7"
			/>
		</svg>
		<svg style="bottom: -60px; right: -100px;" width="340" height="340" viewBox="0 0 340 340" fill="none">
			<path
				d="M170 18C250 24 330 80 322 170C314 260 250 322 160 318C70 314 14 244 20 158C26 72 90 12 170 18Z"
				fill="#FDF3DD"
				opacity="0.8"
			/>
		</svg>
		<svg style="top: 100px; right: 32%;" width="56" height="56" viewBox="0 0 24 24" fill="none">
			<path
				d="M12 21C12 21 5 17 5 10C5 6 8 4 12 4C16 4 19 6 19 10C19 17 12 21 12 21Z"
				fill="#E6F2E9"
			/>
		</svg>
	</div>

	<div class="rwd-container rwd-hero-grid">
		<div class="rwd-hero-copy">
			<span class="rwd-eyebrow">
				<Sparkles size={14} />
				Welcome — you're in the right place
			</span>
			<h1>
				Your journey starts with
				<span class="rwd-hl">
					a single step
					<svg viewBox="0 0 120 12" preserveAspectRatio="none" fill="none" aria-hidden="true">
						<path
							d="M3 9C28 3.5 70 2 117 6.5"
							stroke="currentColor"
							stroke-width="5"
							stroke-linecap="round"
						/>
					</svg>
				</span>
			</h1>
			<p class="rwd-hero-sub">
				Being Muslim is a friendly companion for converts and beginners — practical guidance, a warm
				community, and everything you need to grow at your own pace. No pressure, no judgement.
			</p>
			<div class="rwd-hero-ctas">
				<a href="/guides/new-muslim" class="rwd-btn rwd-btn-primary">
					Start Here
					<ArrowRight size={17} />
				</a>
				<a href="/shop/being-muslim-book" class="rwd-btn rwd-btn-soft">
					<BookOpen size={17} />
					Get the Book
				</a>
			</div>
			<div class="rwd-hero-proof">
				<span class="rwd-hero-proof-avatars" aria-hidden="true">
					<span class="rwd-tint-amber">A</span>
					<span class="rwd-tint-coral">O</span>
					<span class="rwd-tint-sky">F</span>
					<span class="rwd-tint-lilac">K</span>
				</span>
				<span>Joined by 10,000+ learners around the world</span>
			</div>
		</div>

		<div class="rwd-hero-visual">
			<div class="rwd-hero-stage">
				<svg class="rwd-hero-stage-bg" viewBox="0 0 400 400" fill="none" aria-hidden="true">
					<path
						d="M200 16C300 8 392 86 386 196C380 306 300 392 192 386C84 380 10 300 16 192C22 84 100 24 200 16Z"
						fill="currentColor"
					/>
				</svg>

				<!-- Main app card -->
				<div class="rwd-app-card rwd-app-card-main">
					<div class="rwd-app-card-head">
						<div class="rwd-progress-ring" role="img" aria-label="Course progress: 33 percent">
							<svg width="64" height="64" viewBox="0 0 64 64">
								<circle cx="32" cy="32" r="26" fill="none" stroke="#E6F2E9" stroke-width="8" />
								<circle
									cx="32"
									cy="32"
									r="26"
									fill="none"
									stroke="#1E6B4E"
									stroke-width="8"
									stroke-linecap="round"
									stroke-dasharray="163.4"
									stroke-dashoffset="109"
								/>
							</svg>
							<span class="rwd-progress-ring-label">33%</span>
						</div>
						<div class="rwd-app-card-head-meta">
							<div class="rwd-app-kicker">Your course</div>
							<div class="rwd-app-title">Foundations of Faith</div>
						</div>
					</div>
					<div class="rwd-app-steps">
						<div class="rwd-app-step">
							<span class="rwd-app-step-check"><Check size={14} /></span>
							What is Islam?
						</div>
						<div class="rwd-app-step">
							<span class="rwd-app-step-check"><Check size={14} /></span>
							The Shahada: Declaration of Faith
						</div>
						<div class="rwd-app-step rwd-todo">
							<span class="rwd-app-step-check"><ArrowRight size={13} /></span>
							Salah: The Daily Prayers
						</div>
					</div>
				</div>

				<!-- Floating chips -->
				<div class="rwd-float-chip rwd-float-prayer">
					<span class="rwd-icon-circle rwd-tint-sky"><Moon size={18} /></span>
					<span>
						<span class="rwd-float-chip-label">Next prayer</span><br />
						<span class="rwd-float-chip-value">Maghrib · 7:42 PM</span>
					</span>
				</div>
				<div class="rwd-float-chip rwd-float-streak">
					<span class="rwd-icon-circle rwd-tint-coral"><Flame size={18} /></span>
					<span>
						<span class="rwd-float-chip-label">Streak</span><br />
						<span class="rwd-float-chip-value">5 days strong</span>
					</span>
				</div>
				<div class="rwd-float-sticker" aria-hidden="true">
					<Sparkles size={26} />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 2. STATS STRIP                 -->
<!-- ============================== -->
<section class="rwd-container" style="padding-bottom: clamp(40px, 6vw, 72px);">
	<div class="rwd-stats rwd-reveal">
		{#each stats as stat}
			<div class="rwd-stat">
				<div class="rwd-stat-value">{stat.value}</div>
				<div class="rwd-stat-label">{stat.label}</div>
			</div>
		{/each}
	</div>
</section>

<!-- ============================== -->
<!-- 3. CHOOSE YOUR PATH            -->
<!-- ============================== -->
<section class="rwd-section" style="padding-top: 0;">
	<div class="rwd-container">
		<div class="rwd-section-head rwd-reveal">
			<span class="rwd-eyebrow"><Compass size={14} /> Choose your path</span>
			<h2>Wherever you're starting, there's a path for you</h2>
			<p>Pick the one that feels like you today. You can always wander between them.</p>
		</div>
		<div class="rwd-paths">
			{#each audiencePaths as path, i}
				{@const PathIcon = pathIcons[path.icon] ?? Compass}
				<article class="rwd-path-card rwd-path-{pathHues[i]} rwd-reveal rwd-reveal-d{i + 1}">
					<span class="rwd-icon-circle rwd-tint-{pathHues[i]}" style="background: #fff;">
						<PathIcon size={24} />
					</span>
					<h3>{path.title}</h3>
					<p>{path.description}</p>
					<a href={path.href} class="rwd-path-cta">
						{path.cta}
						<ArrowRight size={15} />
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 4. TODAY'S FIRST STEPS         -->
<!-- ============================== -->
<section class="rwd-section" style="padding-top: 0;">
	<div class="rwd-container rwd-steps-grid">
		<div class="rwd-steps-copy rwd-reveal">
			<span class="rwd-eyebrow rwd-eyebrow-amber"><Sun size={14} /> Today's first steps</span>
			<h2>Small steps, taken gently, one at a time</h2>
			<p>
				Our step-by-step guides break the journey into friendly, doable pieces — so you always know
				what comes next, and nothing feels overwhelming.
			</p>
			<a href="/guides" class="rwd-btn rwd-btn-soft">
				Browse all guides
				<ArrowRight size={16} />
			</a>
		</div>

		<div class="rwd-checklist-card rwd-reveal rwd-reveal-d1">
			<div class="rwd-checklist-top">
				<h3>Your starter checklist</h3>
				<span class="rwd-chip">{doneCount} of {guides.length} explored</span>
			</div>
			<div class="rwd-progress-track" aria-hidden="true">
				<div class="rwd-progress-fill" style="width: {progressPct}%;"></div>
			</div>
			{#each guides as guide, i}
				{@const meta = guideMeta[guide.slug] ?? { icon: Sprout, hue: 'rwd-tint-green' }}
				<button
					class="rwd-check-item"
					class:rwd-done={checked[i]}
					onclick={() => toggleStep(i)}
					aria-pressed={checked[i]}
				>
					<span class="rwd-check-box"><Check size={15} /></span>
					<span class="rwd-check-body">
						<span class="rwd-check-title">{guide.title}</span>
						<span class="rwd-check-desc" style="display: block;">{guide.description}</span>
						<span class="rwd-check-meta">
							<span class="rwd-chip {meta.hue}">{guide.category}</span>
							<span class="rwd-chip rwd-chip-plain">{guide.stepCount} steps</span>
							<span class="rwd-chip rwd-chip-plain">{guide.estimatedTime}</span>
						</span>
					</span>
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 5. COURSES                     -->
<!-- ============================== -->
<section class="rwd-section" style="padding-top: 0;">
	<div class="rwd-container">
		<div class="rwd-section-head rwd-reveal">
			<span class="rwd-eyebrow rwd-eyebrow-sky"><GraduationCap size={14} /> Learn with us</span>
			<h2>Courses that meet you where you are</h2>
			<p>Short lessons, friendly teachers, zero jargon. Learn at whatever pace feels right.</p>
		</div>
		<div class="rwd-courses">
			{#each courses as course, i}
				{@const meta = courseMeta[course.category] ?? { icon: BookOpen, banner: 'rwd-banner-green' }}
				{@const CourseIcon = meta.icon}
				<a
					href="/courses/{course.slug}"
					class="rwd-course-card rwd-reveal rwd-reveal-d{(i % 4) + 1}"
				>
					<div class="rwd-course-banner {meta.banner}">
						<svg class="rwd-banner-blob" viewBox="0 0 200 80" fill="none" aria-hidden="true">
							<path
								d="M0 60C40 30 80 70 120 45C160 20 180 50 200 35V80H0V60Z"
								fill="#ffffff"
							/>
						</svg>
						<span class="rwd-icon-circle"><CourseIcon size={26} /></span>
					</div>
					<div class="rwd-course-body">
						<div class="rwd-course-chips">
							<span class="rwd-chip rwd-chip-plain">{course.difficulty}</span>
							<span class="rwd-chip">{course.lessonCount} lessons</span>
						</div>
						<h3>{course.title}</h3>
						<p class="rwd-course-desc">{course.description}</p>
						<div class="rwd-course-foot">
							<span>{course.duration}</span>
							{#if course.enrolled}
								<span class="rwd-enrolled">
									<Users size={14} />
									{course.enrolled.toLocaleString()} enrolled
								</span>
							{/if}
						</div>
					</div>
				</a>
			{/each}
		</div>
		<div style="text-align: center; margin-top: 36px;" class="rwd-reveal">
			<a href="/courses" class="rwd-link-more">
				See all courses
				<ArrowRight size={16} />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 6. SHOP / THE BOOK             -->
<!-- ============================== -->
<section class="rwd-section" style="padding-top: 0;">
	<div class="rwd-container">
		<div class="rwd-section-head rwd-reveal">
			<span class="rwd-eyebrow rwd-eyebrow-coral"><ShoppingBag size={14} /> From our shop</span>
			<h2>Take a companion home with you</h2>
			<p>
				The book that started it all — plus boxed sets, prayer cards, and digital editions to keep
				close by.
			</p>
		</div>
		<div class="rwd-shop">
			{#each shopProducts as product, i}
				<a
					href="/shop/{product.handle}"
					class="rwd-product-card rwd-reveal rwd-reveal-d{(i % 4) + 1}"
				>
					{#if product.badge}
						<span class="rwd-product-badge">{product.badge}</span>
					{/if}
					<div class="rwd-product-art" aria-hidden="true">
						{#if product.handle === 'being-muslim-book'}
							<div class="rwd-art-book">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
									<path
										d="M12 21C12 21 5 17 5 10C5 6 8 4 12 4C16 4 19 6 19 10C19 17 12 21 12 21Z"
										fill="#F2B84B"
									/>
								</svg>
								<span class="rwd-art-book-title">Being<br />Muslim</span>
								<span class="rwd-art-book-sub">A Practical Guide</span>
							</div>
						{:else if product.handle === 'being-muslim-boxed-set'}
							<div class="rwd-art-box">
								<div class="rwd-art-box-book"></div>
								<div class="rwd-art-box-quran"></div>
								<div class="rwd-art-box-lid"></div>
							</div>
						{:else if product.handle === 'prayer-cards'}
							<div class="rwd-art-cards">
								<div class="rwd-art-card-1"></div>
								<div class="rwd-art-card-2"></div>
								<div class="rwd-art-card-3"><HandHeart size={24} /></div>
							</div>
						{:else}
							<div class="rwd-art-phone">
								<div class="rwd-art-phone-screen">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
										<path
											d="M12 21C12 21 5 17 5 10C5 6 8 4 12 4C16 4 19 6 19 10C19 17 12 21 12 21Z"
											fill="#1E6B4E"
										/>
									</svg>
									<span class="rwd-line"></span>
									<span class="rwd-line"></span>
									<span class="rwd-line rwd-short"></span>
								</div>
							</div>
						{/if}
					</div>
					<div class="rwd-product-info">
						<h3>{product.title}</h3>
						<span class="rwd-product-rating">
							<span class="rwd-stars">
								{#each Array(5) as _, s}
									<Star size={13} fill={s < Math.round(product.rating) ? 'currentColor' : 'none'} />
								{/each}
							</span>
							{product.rating} ({product.reviewCount})
						</span>
					</div>
					<div class="rwd-product-foot">
						<span class="rwd-product-price">${product.price.toFixed(2)}</span>
						<span class="rwd-btn rwd-btn-primary rwd-btn-sm">View</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 7. COMMUNITY                   -->
<!-- ============================== -->
<section class="rwd-section" style="padding-top: 0;">
	<div class="rwd-container">
		<div class="rwd-section-head rwd-reveal">
			<span class="rwd-eyebrow rwd-eyebrow-lilac"><MessageCircle size={14} /> Community</span>
			<h2>You never have to figure it out alone</h2>
			<p>
				Real people, real conversations, happening right now. Pull up a chair — no question is too
				basic.
			</p>
		</div>
		<div class="rwd-community">
			{#each forumCategories as category, i}
				{@const ForumIcon = forumIcons[category.icon] ?? MessageCircle}
				<a
					href="/community"
					class="rwd-bubble-card rwd-reveal rwd-reveal-d{(i % 3) + 1}"
				>
					<div class="rwd-bubble-head">
						<span class="rwd-icon-circle {forumHues[i % forumHues.length]}">
							<ForumIcon size={20} />
						</span>
						<h3>{category.title}</h3>
					</div>
					<p>{category.description}</p>
					<div class="rwd-bubble-meta">
						<span>{category.threadCount} threads</span>
						<span class="rwd-activity">
							<span class="rwd-activity-dot"></span>
							{category.lastActivity}
						</span>
					</div>
				</a>
			{/each}
		</div>
		<div style="text-align: center; margin-top: 36px;" class="rwd-reveal">
			<a href="/community" class="rwd-btn rwd-btn-soft">
				Join the community
				<ArrowRight size={16} />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 8. TESTIMONIALS                -->
<!-- ============================== -->
<section class="rwd-section" style="padding-top: 0;">
	<div class="rwd-container">
		<div class="rwd-section-head rwd-reveal">
			<span class="rwd-eyebrow"><Heart size={14} /> Kind words</span>
			<h2>Friends who walked this path before you</h2>
			<p>From new converts to imams and educators — here's what they say.</p>
		</div>
		<div class="rwd-testimonials">
			{#each testimonials as t, i}
				<figure class="rwd-quote-wrap rwd-reveal rwd-reveal-d{(i % 3) + 1}" style="margin: 0;">
					<blockquote class="rwd-quote-bubble" style="margin: 0;">"{t.quote}"</blockquote>
					<figcaption class="rwd-quote-person">
						<span class="rwd-quote-avatar {avatarHues[i % avatarHues.length]}">
							{t.name.charAt(0)}
						</span>
						<span>
							<span class="rwd-quote-name" style="display: block;">{t.name}</span>
							<span class="rwd-quote-role" style="display: block;">{t.role}</span>
						</span>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 9. GIVE / SPONSORSHIP          -->
<!-- ============================== -->
<section class="rwd-give-section">
	<div class="rwd-container">
		<div class="rwd-section-head rwd-reveal">
			<span class="rwd-eyebrow"><HandHeart size={14} /> Pay it forward</span>
			<h2>Sponsor a boxed set for someone just starting out</h2>
			<p>
				Every set you sponsor lands in the hands of a new Muslim who needs it — with everything they
				need for their first steps.
			</p>
		</div>

		<div class="rwd-give-stats rwd-reveal">
			<span class="rwd-give-stat-chip">
				<strong>{donationStats.totalSponsored.toLocaleString()}</strong> sets sponsored
			</span>
			<span class="rwd-give-stat-chip">
				<strong>{donationStats.communitiesReached}</strong> communities reached
			</span>
			<span class="rwd-give-stat-chip">
				<strong>{donationStats.countriesReached}</strong> countries
			</span>
			<span class="rwd-give-stat-chip">
				<strong>{donationStats.monthlyDonors}</strong> monthly donors
			</span>
		</div>

		<div class="rwd-tiers">
			{#each sponsorshipTiers as tier, i}
				<article class="rwd-tier-card rwd-reveal rwd-reveal-d{i + 1}" class:rwd-popular={tier.popular}>
					{#if tier.popular}
						<span class="rwd-popular-badge">Most popular</span>
					{/if}
					<h3>{tier.name}</h3>
					<div class="rwd-tier-price">${tier.price}</div>
					<p class="rwd-tier-desc">{tier.description}</p>
					<span class="rwd-tier-impact">
						<Heart size={13} fill="currentColor" />
						{tier.impact}
					</span>
					<a href="/give" class="rwd-btn rwd-btn-primary">Sponsor now</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 10. BIG CTA BANNER             -->
<!-- ============================== -->
<section class="rwd-section" style="padding-bottom: 0;">
	<div class="rwd-container">
		<div class="rwd-banner rwd-reveal">
			<svg
				class="rwd-banner-decor"
				style="top: -60px; left: -50px;"
				width="260"
				height="260"
				viewBox="0 0 24 24"
				fill="none"
				aria-hidden="true"
			>
				<path
					d="M12 21C12 21 5 17 5 10C5 6 8 4 12 4C16 4 19 6 19 10C19 17 12 21 12 21Z"
					fill="currentColor"
				/>
			</svg>
			<svg
				class="rwd-banner-decor"
				style="bottom: -80px; right: -40px;"
				width="300"
				height="300"
				viewBox="0 0 24 24"
				fill="none"
				aria-hidden="true"
			>
				<path
					d="M12 21C12 21 5 17 5 10C5 6 8 4 12 4C16 4 19 6 19 10C19 17 12 21 12 21Z"
					fill="currentColor"
				/>
			</svg>
			<h2>Ready for your first step?</h2>
			<p>
				It doesn't have to be big. It doesn't have to be perfect. It just has to be yours — and
				we'll be right beside you.
			</p>
			<div class="rwd-banner-ctas">
				<a href="/guides/new-muslim" class="rwd-btn rwd-btn-inverse">
					Start Here
					<ArrowRight size={17} />
				</a>
				<a href="/shop/being-muslim-book" class="rwd-btn rwd-btn-ghost-inverse">Get the Book</a>
			</div>
		</div>
	</div>
</section>
