<script lang="ts">
	import { onMount } from 'svelte';
	import {
		ArrowRight,
		BookOpen,
		Clock,
		Compass,
		RefreshCw,
		Star,
		Sunrise,
		Users
	} from 'lucide-svelte';
	import {
		stats,
		audiencePaths,
		articles,
		courses,
		products,
		testimonials,
		sponsorshipTiers,
		donationStats
	} from '$lib/data/mock.js';

	const book = products[0];
	const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);
	const pathIcons: Record<string, typeof Compass> = {
		compass: Compass,
		sunrise: Sunrise,
		refresh: RefreshCw
	};

	// ---------- Testimonial pull-quote ----------
	let quoteIndex = $state(0);
	const activeQuote = $derived(testimonials[quoteIndex]);

	// ---------- Newsletter ----------
	let email = $state('');
	let subscribed = $state(false);

	function handleSubscribe(event: SubmitEvent) {
		event.preventDefault();
		if (email.trim()) subscribed = true;
	}

	// ---------- Scroll reveal (progressive enhancement) ----------
	onMount(() => {
		const revealEls = document.querySelectorAll<HTMLElement>('.layl-reveal');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('layl-in');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12 }
		);

		revealEls.forEach((el) => {
			// Only hide elements once JS is running, so the page is complete without it.
			el.classList.add('layl-prep');
			observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

{#snippet ornament(size: number = 18)}
	<div class="layl-ornament" aria-hidden="true">
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
			<rect x="4.7" y="4.7" width="14.6" height="14.6" />
			<rect x="4.7" y="4.7" width="14.6" height="14.6" transform="rotate(45 12 12)" />
		</svg>
	</div>
{/snippet}

<svelte:head>
	<title>Being Muslim — A Practical Guide for the Journey</title>
	<meta
		name="description"
		content="Being Muslim: A Practical Guide by Dr. Asad Tarsin. Books, courses, and community for new Muslims, converts, and anyone reconnecting with their faith."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO                        -->
<!-- ============================== -->
<section class="layl-hero">
	<div class="layl-container">
		<span class="layl-hero-star" aria-hidden="true">
			<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.9">
				<rect x="4.7" y="4.7" width="14.6" height="14.6" />
				<rect x="4.7" y="4.7" width="14.6" height="14.6" transform="rotate(45 12 12)" />
			</svg>
		</span>
		<h1>The stillness of night,<br /><em>the clarity of guidance.</em></h1>
		<p class="layl-hero-sub">
			Being Muslim: A Practical Guide gives you the essential knowledge to live your faith with
			confidence — whether you are exploring Islam, newly converted, or finding your way back.
		</p>
		<div class="layl-hero-ctas">
			<a href="/shop/being-muslim-book" class="layl-btn layl-btn-gold">
				Get the Book
				<ArrowRight size={16} />
			</a>
			<a href="/guides/new-muslim" class="layl-btn layl-btn-ghost">Begin Your Journey</a>
		</div>
		<p class="layl-hero-note">
			Trusted by <strong>10,000+</strong> readers across <strong>50+</strong> countries
		</p>
	</div>
</section>

<!-- ============================== -->
<!-- 2. STATS ROW                   -->
<!-- ============================== -->
<section class="layl-stats layl-reveal">
	<div class="layl-container">
		<div class="layl-stats-grid">
			{#each stats as stat}
				<div class="layl-stat">
					<div class="layl-stat-value">{stat.value}</div>
					<div class="layl-stat-label">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 3. AUDIENCE PATHS              -->
<!-- ============================== -->
<section class="layl-section">
	<div class="layl-container">
		<div class="layl-center layl-reveal">
			{@render ornament()}
			<span class="layl-kicker">Wherever You Are</span>
			<h2 class="layl-heading">Every journey begins <em>under the same sky</em></h2>
			<hr class="layl-rule" />
			<p class="layl-lede">
				Three paths, one destination. Choose the one that meets you where you stand tonight.
			</p>
		</div>

		<div class="layl-paths-grid">
			{#each audiencePaths as path}
				{@const Icon = pathIcons[path.icon] ?? Compass}
				<article class="layl-path-card layl-reveal">
					<div class="layl-path-icon">
						<Icon size={26} strokeWidth={1.4} />
					</div>
					<h3 class="layl-path-title">{path.title}</h3>
					<p class="layl-path-desc">{path.description}</p>
					<a href={path.href} class="layl-link-gold layl-path-cta">
						{path.cta}
						<ArrowRight size={14} />
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 4. FEATURED BOOK               -->
<!-- ============================== -->
<section class="layl-section layl-section-alt">
	<div class="layl-container">
		<div class="layl-book-grid">
			<!-- CSS-art book cover -->
			<div class="layl-book-stage layl-reveal" aria-hidden="true">
				<div class="layl-book">
					<div class="layl-book-cover">
						<div class="layl-book-frame"></div>
						<div class="layl-book-topline">A Practical Guide</div>
						<div class="layl-book-titleblock">
							<span class="layl-book-star">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
									<rect x="4.7" y="4.7" width="14.6" height="14.6" />
									<rect x="4.7" y="4.7" width="14.6" height="14.6" transform="rotate(45 12 12)" />
								</svg>
							</span>
							<div class="layl-book-title">Being<br />Muslim</div>
							<div class="layl-book-subtitle">A Practical Guide</div>
						</div>
						<div class="layl-book-author">
							<span class="layl-book-author-rule"></span>
							<span class="layl-book-author-name">Asad Tarsin</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Copy -->
			<div class="layl-reveal">
				<span class="layl-kicker">The Book</span>
				<h2 class="layl-heading">A companion for <em>every step</em> of the path</h2>
				<div class="layl-book-rating">
					<span class="layl-book-rating-stars" aria-hidden="true">
						{#each Array(5) as _}
							<Star size={15} fill="currentColor" strokeWidth={0} />
						{/each}
					</span>
					<span class="layl-book-rating-text">
						{book.rating} — {book.reviewCount} reviews
					</span>
				</div>
				<p class="layl-book-desc">{book.description}</p>
				<div class="layl-book-meta">
					<div class="layl-book-meta-item">
						<span class="layl-book-meta-label">Paperback</span>
						<span class="layl-book-meta-value"><strong>${book.price}</strong></span>
					</div>
					<div class="layl-book-meta-item">
						<span class="layl-book-meta-label">Author</span>
						<span class="layl-book-meta-value">Dr. Asad Tarsin</span>
					</div>
					<div class="layl-book-meta-item">
						<span class="layl-book-meta-label">Editions</span>
						<span class="layl-book-meta-value">Print · eBook · Español</span>
					</div>
				</div>
				<div class="layl-book-ctas">
					<a href="/shop/being-muslim-book" class="layl-btn layl-btn-gold">
						<BookOpen size={16} />
						Order Your Copy
					</a>
					<a href="/shop/being-muslim-boxed-set" class="layl-btn layl-btn-ghost">Explore the Boxed Set</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 5. COURSES                     -->
<!-- ============================== -->
<section class="layl-section">
	<div class="layl-container">
		<div class="layl-center layl-reveal">
			{@render ornament()}
			<span class="layl-kicker">Structured Learning</span>
			<h2 class="layl-heading">Courses for the <em>unhurried seeker</em></h2>
			<hr class="layl-rule" />
			<p class="layl-lede">
				Learn at your own pace with guided lessons from teachers who remember what it was like to
				begin.
			</p>
		</div>

		<div class="layl-courses-grid">
			{#each courses as course}
				<a href="/courses/{course.slug}" class="layl-course-card layl-reveal">
					<div class="layl-course-art" aria-hidden="true">
						<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.9">
							<rect x="4.7" y="4.7" width="14.6" height="14.6" />
							<rect x="4.7" y="4.7" width="14.6" height="14.6" transform="rotate(45 12 12)" />
						</svg>
					</div>
					<div class="layl-course-body">
						<div class="layl-course-cat">{course.category} · {course.difficulty}</div>
						<h3 class="layl-course-title">{course.title}</h3>
						<p class="layl-course-desc">{course.description}</p>
						<div class="layl-course-meta">
							<span><BookOpen size={13} /> {course.lessonCount} lessons</span>
							<span><Clock size={13} /> {course.duration}</span>
							{#if course.enrolled}
								<span><Users size={13} /> {course.enrolled.toLocaleString()}</span>
							{/if}
						</div>
						<p class="layl-course-instructor">with {course.instructor}</p>
					</div>
				</a>
			{/each}
		</div>

		<div class="layl-section-foot layl-reveal">
			<a href="/courses" class="layl-link-gold">
				View All Courses
				<ArrowRight size={14} />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 6. ARTICLES                    -->
<!-- ============================== -->
<section class="layl-section layl-section-alt">
	<div class="layl-container">
		<div class="layl-center layl-reveal">
			{@render ornament()}
			<span class="layl-kicker">From the Library</span>
			<h2 class="layl-heading">Reading for <em>quiet hours</em></h2>
			<hr class="layl-rule" />
			<p class="layl-lede">
				Essays and guides written with warmth and clarity — no jargon, no judgement.
			</p>
		</div>

		<div class="layl-articles-grid">
			{#each featuredArticles as article}
				<a href="/articles/{article.slug}" class="layl-article-card layl-reveal">
					<div class="layl-article-top">
						<span class="layl-article-cat">{article.category}</span>
						<span class="layl-article-time">{article.readingTime}</span>
					</div>
					<h3 class="layl-article-title">{article.title}</h3>
					<p class="layl-article-excerpt">{article.excerpt}</p>
					<div class="layl-article-foot">
						<span class="layl-article-author">{article.author}</span>
						<span class="layl-article-arrow"><ArrowRight size={16} /></span>
					</div>
				</a>
			{/each}
		</div>

		<div class="layl-section-foot layl-reveal">
			<a href="/articles" class="layl-link-gold">
				Browse All Articles
				<ArrowRight size={14} />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 7. TESTIMONIAL PULL-QUOTE      -->
<!-- ============================== -->
<section class="layl-section layl-quote-section">
	<div class="layl-container">
		<figure class="layl-quote layl-reveal">
			<span class="layl-quote-mark" aria-hidden="true">&ldquo;</span>
			<blockquote class="layl-quote-text">{activeQuote.quote}</blockquote>
			<figcaption class="layl-quote-attr">
				<div class="layl-quote-name">{activeQuote.name}</div>
				<div class="layl-quote-role">{activeQuote.role}</div>
			</figcaption>
			<div class="layl-quote-dots" role="tablist" aria-label="Testimonials">
				{#each testimonials as t, i}
					<button
						class="layl-quote-dot"
						class:layl-active={i === quoteIndex}
						onclick={() => (quoteIndex = i)}
						aria-label="Show testimonial from {t.name}"
						aria-selected={i === quoteIndex}
						role="tab"
					></button>
				{/each}
			</div>
		</figure>
	</div>
</section>

<!-- ============================== -->
<!-- 8. SPONSORSHIP / GIVE          -->
<!-- ============================== -->
<section class="layl-section layl-section-alt">
	<div class="layl-container">
		<div class="layl-give-head layl-reveal">
			{@render ornament()}
			<span class="layl-kicker">Give</span>
			<h2 class="layl-heading">Light the way for <em>someone else</em></h2>
			<hr class="layl-rule" />
			<p class="layl-lede">
				Every sponsored boxed set places a complete library of essentials into the hands of a new
				Muslim who could not otherwise afford one.
			</p>
		</div>

		<div class="layl-give-grid">
			{#each sponsorshipTiers as tier}
				<article class="layl-tier layl-reveal" class:layl-tier-popular={tier.popular}>
					{#if tier.popular}
						<span class="layl-tier-badge">Most Chosen</span>
					{/if}
					<h3 class="layl-tier-name">{tier.name}</h3>
					<div class="layl-tier-price"><sup>$</sup>{tier.price}</div>
					<p class="layl-tier-desc">{tier.description}</p>
					<p class="layl-tier-impact">{tier.impact}</p>
					<a
						href="/give"
						class="layl-btn layl-tier-btn {tier.popular ? 'layl-btn-gold' : 'layl-btn-ghost'}"
					>
						Sponsor Now
					</a>
				</article>
			{/each}
		</div>

		<div class="layl-give-statline layl-reveal">
			<div class="layl-give-stat">
				<span class="layl-give-stat-value">{donationStats.totalSponsored.toLocaleString()}</span>
				<span class="layl-give-stat-label">Sets Sponsored</span>
			</div>
			<div class="layl-give-stat">
				<span class="layl-give-stat-value">{donationStats.communitiesReached}</span>
				<span class="layl-give-stat-label">Communities</span>
			</div>
			<div class="layl-give-stat">
				<span class="layl-give-stat-value">{donationStats.countriesReached}</span>
				<span class="layl-give-stat-label">Countries</span>
			</div>
			<div class="layl-give-stat">
				<span class="layl-give-stat-value">{donationStats.monthlyDonors}</span>
				<span class="layl-give-stat-label">Monthly Donors</span>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 9. NEWSLETTER BAND             -->
<!-- ============================== -->
<section class="layl-news">
	<div class="layl-container">
		<div class="layl-news-inner layl-reveal">
			{@render ornament(16)}
			<span class="layl-kicker">Stay Connected</span>
			<h2 class="layl-heading">Reflections, <em>delivered gently</em></h2>
			<p class="layl-lede" style="margin: 20px auto 0;">
				One thoughtful email a week — a short reflection, a practical tip, and what's new from the
				Being Muslim community.
			</p>
			{#if subscribed}
				<p class="layl-news-thanks">Thank you — your first reflection is on its way.</p>
			{:else}
				<form class="layl-news-form" onsubmit={handleSubscribe}>
					<input
						type="email"
						class="layl-news-input"
						placeholder="Your email address"
						bind:value={email}
						required
						aria-label="Email address"
					/>
					<button type="submit" class="layl-btn layl-btn-gold">Subscribe</button>
				</form>
				<p class="layl-news-fine">No noise, no spam. Unsubscribe whenever you like.</p>
			{/if}
		</div>
	</div>
</section>
