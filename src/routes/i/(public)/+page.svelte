<script lang="ts">
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
	const boxedSet = products[1];
	const otherProducts = products.slice(2);

	const featuredArticles = articles.slice(0, 4);
	const leadQuote = testimonials[0];
	const miniQuotes = testimonials.slice(1, 4);

	const tickerWords = ['Learn', 'Pray', 'Connect', 'Give'];
	const pathTones = ['zlj-path--teal', 'zlj-path--sand', 'zlj-path--terra'];

	function money(value: number): string {
		return value % 1 === 0 ? `$${value}` : `$${value.toFixed(2)}`;
	}

	function pad(n: number): string {
		return String(n).padStart(2, '0');
	}
</script>

<svelte:head>
	<title>Being Muslim — A Practical Guide to Living Your Faith</title>
	<meta
		name="description"
		content="The book, boxed set, courses, and community that help new Muslims and returning Muslims live their faith with confidence."
	/>
</svelte:head>

<!-- Tessellating eight-pointed star panel, drawn once per use with a unique id -->
{#snippet zellijPattern(id: string)}
	<svg class="zlj-pattern" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
		<defs>
			<g id="{id}-star">
				<polygon
					points="30,0 21.2,8.8 21.2,21.2 8.8,21.2 0,30 -8.8,21.2 -21.2,21.2 -21.2,8.8 -30,0 -21.2,-8.8 -21.2,-21.2 -8.8,-21.2 0,-30 8.8,-21.2 21.2,-21.2 21.2,-8.8"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
				/>
				<rect x="-6.5" y="-6.5" width="13" height="13" fill="currentColor" transform="rotate(45)" />
			</g>
			<pattern id={id} width="96" height="96" patternUnits="userSpaceOnUse">
				<use href="#{id}-star" transform="translate(48 48)" />
				<use href="#{id}-star" transform="translate(0 0)" />
				<use href="#{id}-star" transform="translate(96 0)" />
				<use href="#{id}-star" transform="translate(0 96)" />
				<use href="#{id}-star" transform="translate(96 96)" />
			</pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#{id})" opacity="0.35" />
	</svg>
{/snippet}

{#snippet ticker()}
	<div class="zlj-marquee-seq" aria-hidden="true">
		{#each Array(4) as _, i (i)}
			{#each tickerWords as word (word + i)}
				<span>{word}</span><span class="zlj-star">✶</span>
			{/each}
		{/each}
	</div>
{/snippet}

<!-- ====================================================== -->
<!-- HERO — split 60/40, bone copy / teal pattern panel     -->
<!-- ====================================================== -->
<section class="zlj-hero zlj-band--bone">
	<div class="zlj-hero-copy">
		<p class="zlj-kicker">The Being Muslim Project</p>
		<h1 class="zlj-display">
			A practical guide to living your <em>faith.</em>
		</h1>
		<p class="zlj-hero-meta">
			<span>By Dr. Asad Tarsin</span>
			<span class="zlj-star" aria-hidden="true">✶</span>
			<span>10,000+ books distributed</span>
			<span class="zlj-star" aria-hidden="true">✶</span>
			<span>50+ countries</span>
		</p>
		<div class="zlj-hero-ctas">
			<a href="/shop/being-muslim-book" class="zlj-btn zlj-btn--teal">Get the Book →</a>
			<a href="/guides/new-muslim" class="zlj-btn zlj-btn--outline">I'm New to Islam</a>
		</div>
	</div>
	<div class="zlj-hero-panel">
		{@render zellijPattern('zlj-pat-hero')}
	</div>
</section>

<!-- ====================================================== -->
<!-- STATS — black band, huge numerals                      -->
<!-- ====================================================== -->
<section class="zlj-band--black" aria-label="Impact statistics">
	<div class="zlj-stats">
		{#each stats as stat (stat.label)}
			<div class="zlj-stat">
				<p class="zlj-stat-value">{stat.value}</p>
				<p class="zlj-stat-label">{stat.label}</p>
			</div>
		{/each}
	</div>
</section>

<!-- ====================================================== -->
<!-- 01 — PATHS                                             -->
<!-- ====================================================== -->
<section class="zlj-band--bone zlj-section">
	<div class="zlj-container">
		<header class="zlj-sechead">
			<p class="zlj-secnum">01</p>
			<div>
				<p class="zlj-kicker">Start Here</p>
				<h2>Three doors. One direction.</h2>
			</div>
			<p class="zlj-sechead-aside">
				Wherever you stand — curious, newly converted, or finding your way back — there is a
				path drawn for you.
			</p>
		</header>

		<div class="zlj-paths">
			{#each audiencePaths as path, i (path.title)}
				<article class="zlj-path {pathTones[i % pathTones.length]}">
					<p class="zlj-path-num" aria-hidden="true">{pad(i + 1)}</p>
					<h3>{path.title}</h3>
					<p>{path.description}</p>
					<a href={path.href} class="zlj-ulink">{path.cta} →</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- TICKER -->
<div class="zlj-marquee zlj-band--black">
	<div class="zlj-marquee-track">
		{@render ticker()}
		{@render ticker()}
	</div>
</div>

<!-- ====================================================== -->
<!-- 02 — THE BOOK (poster feature on sand)                 -->
<!-- ====================================================== -->
<section class="zlj-band--sand zlj-section">
	<div class="zlj-container">
		<header class="zlj-sechead">
			<p class="zlj-secnum">02</p>
			<div>
				<p class="zlj-kicker">The Book</p>
				<h2>One book. Everything essential.</h2>
			</div>
		</header>

		<div class="zlj-book">
			<!-- CSS-art cover: thick black frame, flat terracotta offset -->
			<div class="zlj-bookwrap">
				<div class="zlj-bookcover" role="img" aria-label="Cover of Being Muslim: A Practical Guide">
					<p class="zlj-bookcover-star" aria-hidden="true">✶</p>
					<div>
						<p class="zlj-bookcover-title">Being<br />Muslim</p>
						<p class="zlj-bookcover-sub">A Practical Guide</p>
					</div>
					<p class="zlj-bookcover-author">Asad Tarsin</p>
				</div>
			</div>

			<div class="zlj-book-info">
				<h2 class="zlj-display">{book.title}</h2>
				<p class="zlj-book-meta">
					<span>{money(book.price)}</span>
					<span class="zlj-star" aria-hidden="true">✶</span>
					<span>{book.rating} / 5 — {book.reviewCount} reviews</span>
					<span class="zlj-star" aria-hidden="true">✶</span>
					<span>{book.badge}</span>
				</p>
				<p>{book.description}</p>
				<div class="zlj-book-ctas">
					<a href="/shop/{book.handle}" class="zlj-btn zlj-btn--black">
						Buy the Book — {money(book.price)}
					</a>
					<a href="/shop/{boxedSet.handle}" class="zlj-btn zlj-btn--outline">
						The Boxed Set — {money(boxedSet.price)}
					</a>
				</div>
			</div>
		</div>

		<!-- product index -->
		<div class="zlj-shoplist">
			{#each otherProducts as product (product.handle)}
				<a href="/shop/{product.handle}" class="zlj-shoplist-row">
					<span class="zlj-shoplist-title">{product.title}</span>
					<span class="zlj-shoplist-cat">{product.category}</span>
					<span class="zlj-shoplist-price">{money(product.price)}</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- PATTERN DIVIDER -->
<div class="zlj-divider zlj-band--teal" aria-hidden="true">
	{@render zellijPattern('zlj-pat-divider')}
</div>

<!-- ====================================================== -->
<!-- 03 — COURSES (exhibition programme table)              -->
<!-- ====================================================== -->
<section class="zlj-band--bone zlj-section">
	<div class="zlj-container">
		<header class="zlj-sechead">
			<p class="zlj-secnum">03</p>
			<div>
				<p class="zlj-kicker">Programme</p>
				<h2>Courses in session.</h2>
			</div>
			<p class="zlj-sechead-aside">
				Structured study, taught plainly. Self-paced, beginner-first, free to start.
			</p>
		</header>

		<div class="zlj-coursetable">
			<div class="zlj-coursehead" aria-hidden="true">
				<span>No.</span>
				<span>Course</span>
				<span>Instructor</span>
				<span>Length</span>
				<span>Level</span>
				<span></span>
			</div>
			{#each courses as course, i (course.slug)}
				<a href="/courses/{course.slug}" class="zlj-courserow">
					<span class="zlj-course-num">{pad(i + 1)}</span>
					<span class="zlj-course-main">
						<span class="zlj-course-title">{course.title}</span>
						<span class="zlj-course-desc">{course.description}</span>
					</span>
					<span class="zlj-course-cell">
						<span class="zlj-cell-label">Instructor</span>
						{course.instructor}
					</span>
					<span class="zlj-course-cell">
						<span class="zlj-cell-label">Length</span>
						<span>
							{course.duration}
							<small>{course.lessonCount} lessons</small>
						</span>
					</span>
					<span class="zlj-course-cell">
						<span class="zlj-cell-label">Level</span>
						<span class="zlj-course-tag">{course.difficulty}</span>
					</span>
					<span class="zlj-course-arrow" aria-hidden="true">→</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ====================================================== -->
<!-- 04 — ARTICLES (2-up editorial grid)                    -->
<!-- ====================================================== -->
<section class="zlj-band--sand zlj-section">
	<div class="zlj-container">
		<header class="zlj-sechead">
			<p class="zlj-secnum">04</p>
			<div>
				<p class="zlj-kicker">Reading Room</p>
				<h2>Latest writing.</h2>
			</div>
			<a href="/articles" class="zlj-ulink" style="align-self: end;">All Articles →</a>
		</header>

		<div class="zlj-articles">
			{#each featuredArticles as article (article.slug)}
				<article class="zlj-article">
					<p class="zlj-article-meta">
						<span class="zlj-article-cat">{article.category}</span>
						<span>{article.readingTime}</span>
					</p>
					<a href="/articles/{article.slug}">
						<h3>{article.title}</h3>
					</a>
					<p>{article.excerpt}</p>
					<p class="zlj-article-byline">By {article.author}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ====================================================== -->
<!-- 05 — VOICES (massive testimonial on teal)              -->
<!-- ====================================================== -->
<section class="zlj-band--teal zlj-section">
	<div class="zlj-container">
		<header class="zlj-sechead">
			<p class="zlj-secnum">05</p>
			<div>
				<p class="zlj-kicker">Voices</p>
				<h2>From the community.</h2>
			</div>
		</header>

		<blockquote>
			<span class="zlj-quote-mark" aria-hidden="true">“</span>
			<p class="zlj-bigquote">{leadQuote.quote}</p>
			<footer class="zlj-bigquote-attr">
				{leadQuote.name} <span>— {leadQuote.role}</span>
			</footer>
		</blockquote>

		<div class="zlj-minivoices">
			{#each miniQuotes as quote (quote.name)}
				<blockquote class="zlj-minivoice">
					<p>“{quote.quote}”</p>
					<cite>{quote.name} — {quote.role}</cite>
				</blockquote>
			{/each}
		</div>
	</div>
</section>

<!-- ====================================================== -->
<!-- 06 — GIVE (sponsorship tiers)                          -->
<!-- ====================================================== -->
<section class="zlj-band--bone zlj-section">
	<div class="zlj-container">
		<header class="zlj-sechead">
			<p class="zlj-secnum">06</p>
			<div>
				<p class="zlj-kicker">Give</p>
				<h2>Put a guide in someone's hands.</h2>
			</div>
			<p class="zlj-sechead-aside">
				Every sponsored boxed set reaches a new Muslim through a mosque, chaplaincy, or
				community partner.
			</p>
		</header>

		<p class="zlj-impact">
			<span><strong>{donationStats.totalSponsored.toLocaleString('en-US')}</strong> sets sponsored</span>
			<span><strong>{donationStats.communitiesReached}</strong> communities</span>
			<span><strong>{donationStats.countriesReached}</strong> countries</span>
			<span><strong>{donationStats.monthlyDonors}</strong> monthly donors</span>
		</p>

		<div class="zlj-tiers">
			{#each sponsorshipTiers as tier (tier.name)}
				<article class="zlj-tier" class:zlj-tier--popular={tier.popular}>
					{#if tier.popular}
						<p class="zlj-tier-flag">Most Chosen</p>
					{/if}
					<p class="zlj-tier-name">{tier.name}</p>
					<p class="zlj-tier-price"><sup>$</sup>{tier.price}</p>
					<p>{tier.description}</p>
					<p class="zlj-tier-impact">✶ {tier.impact}</p>
					<a href="/give" class="zlj-btn {tier.popular ? 'zlj-btn--teal' : 'zlj-btn--outline'}">
						Sponsor Now
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- TICKER -->
<div class="zlj-marquee zlj-band--sand">
	<div class="zlj-marquee-track">
		{@render ticker()}
		{@render ticker()}
	</div>
</div>

<!-- ====================================================== -->
<!-- FINALE — black CTA band                                -->
<!-- ====================================================== -->
<section class="zlj-band--black zlj-section zlj-finale">
	<div class="zlj-container">
		<p class="zlj-kicker">Begin</p>
		<h2 style="margin-top: 1.5rem;">Start where you are. <em>Today.</em></h2>
		<div class="zlj-finale-ctas">
			<a href="/guides/new-muslim" class="zlj-btn zlj-btn--teal">Take the First Step →</a>
			<a href="/give" class="zlj-btn zlj-btn--bone-outline">Sponsor a Boxed Set</a>
		</div>
	</div>
</section>
