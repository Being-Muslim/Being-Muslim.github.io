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

	const leadArticle = articles[0];
	const indexArticles = articles.slice(1);

	const pathNumerals = ['i.', 'ii.', 'iii.'] as const;

	const editionIndex = [
		{ no: '№ 01', title: 'Begin Here — three paths into the faith', href: '#begin-here' },
		{ no: '№ 02', title: 'From the Journal — essays & guidance', href: '#journal' },
		{ no: '№ 03', title: 'The Essential Guide — the book itself', href: '#the-book' },
		{ no: '№ 04', title: 'A Course of Study — structured learning', href: '#courses' },
		{ no: '№ 05', title: 'From the Press — editions & materials', href: '#press' },
		{ no: '№ 06', title: 'Patronage — sponsor a new Muslim', href: '#give' }
	] as const;

	const quoteOne = testimonials[0];
	const quoteTwo = testimonials[4];

	function money(n: number): string {
		return n % 1 === 0 ? `$${n}` : `$${n.toFixed(2)}`;
	}

	function dateline(iso: string): string {
		return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Being Muslim — A Practical Guide to the Faith</title>
	<meta
		name="description"
		content="The Being Muslim Project publishes Being Muslim: A Practical Guide by Dr. Asad Tarsin and supports new Muslims with books, courses, articles, and community."
	/>
</svelte:head>

<!-- ============================================ -->
<!-- HERO — the front-page lead                   -->
<!-- ============================================ -->
<section class="rsl-hero">
	<div class="rsl-container">
		<div class="rsl-hero-grid">
			<div>
				<div class="rsl-hero-kicker-row">
					<span class="rsl-kicker">The Lead — For Every Beginning</span>
				</div>

				<h1 class="rsl-hero-headline">
					Faith, set in plain type: a practical guide for <em>becoming</em> — and being — Muslim.
				</h1>

				<p class="rsl-hero-deck rsl-dropcap">
					Whether you took your shahada last week, are quietly reading toward it, or grew up Muslim and
					wish to begin again, the Being Muslim Project exists for you. We publish
					<a href="/shop/being-muslim-book" class="rsl-inline-link"><em>Being Muslim: A Practical Guide</em></a>
					by Dr.&nbsp;Asad Tarsin, and surround it with courses, essays, community, and quiet
					encouragement — knowledge presented with warmth, rigor, and no judgement.
				</p>

				<div class="rsl-hero-ctas">
					<a href="/shop/being-muslim-book" class="rsl-textlink">Get the Book&nbsp;&nbsp;→</a>
					<a href="/guides/new-muslim" class="rsl-textlink rsl-textlink--quiet">Begin Your First 30 Days&nbsp;&nbsp;→</a>
				</div>
			</div>

			<aside class="rsl-hero-aside">
				<div class="rsl-hero-aside-head">
					<span class="rsl-meta">In This Edition</span>
					<span class="rsl-meta" style="color: var(--rsl-accent);">p. 1</span>
				</div>
				<ul class="rsl-edition-index">
					{#each editionIndex as entry}
						<li>
							<a href={entry.href}>
								<span class="rsl-edition-index-no">{entry.no}</span>
								<span class="rsl-edition-index-title">{entry.title}</span>
								<span class="rsl-edition-index-arrow" aria-hidden="true">→</span>
							</a>
						</li>
					{/each}
				</ul>
			</aside>
		</div>
	</div>
</section>

<!-- ============================================ -->
<!-- STATS — a single typeset row                 -->
<!-- ============================================ -->
<section class="rsl-stats" aria-label="By the numbers">
	<div class="rsl-container">
		<div class="rsl-stats-row">
			{#each stats as stat}
				<div class="rsl-stat">
					<p class="rsl-stat-value">{stat.value}</p>
					<p class="rsl-meta rsl-stat-label">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================================ -->
<!-- № 01 — BEGIN HERE · audience paths           -->
<!-- ============================================ -->
<section class="rsl-section" id="begin-here">
	<div class="rsl-container">
		<div class="rsl-section-head">
			<div>
				<span class="rsl-kicker">№ 01 — Begin Here</span>
				<h2 class="rsl-section-title">Three readers, three paths</h2>
			</div>
			<span class="rsl-meta">Choose the column written for you</span>
		</div>

		<div class="rsl-paths">
			{#each audiencePaths as path, i}
				<article class="rsl-path">
					<p class="rsl-path-no" aria-hidden="true">{pathNumerals[i]}</p>
					<h3 class="rsl-path-title">{path.title}</h3>
					<p class="rsl-path-desc">{path.description}</p>
					<a href={path.href} class="rsl-textlink">{path.cta}&nbsp;&nbsp;→</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<div class="rsl-container"><hr class="rsl-hairline" /></div>

<!-- ============================================ -->
<!-- № 02 — FROM THE JOURNAL · article index      -->
<!-- ============================================ -->
<section class="rsl-section" id="journal">
	<div class="rsl-container">
		<div class="rsl-section-head">
			<div>
				<span class="rsl-kicker">№ 02 — From the Journal</span>
				<h2 class="rsl-section-title">Essays &amp; guidance, plainly written</h2>
			</div>
			<a href="/articles" class="rsl-textlink rsl-textlink--quiet">All Articles&nbsp;&nbsp;→</a>
		</div>

		<div class="rsl-journal-list">
			<!-- Lead article, set larger -->
			<article class="rsl-journal-row rsl-journal-row--lead">
				<a href="/articles/{leadArticle.slug}">
					<span class="rsl-meta rsl-journal-cat">{leadArticle.category}</span>
					<h3 class="rsl-journal-headline">{leadArticle.title}</h3>
					<p class="rsl-journal-excerpt">{leadArticle.excerpt}</p>
					<div class="rsl-journal-meta">
						<span class="rsl-meta">By {leadArticle.author}</span>
						<span class="rsl-meta">{dateline(leadArticle.date)}</span>
						<span class="rsl-meta">{leadArticle.readingTime}</span>
					</div>
				</a>
			</article>

			<!-- Remaining articles as index rows -->
			{#each indexArticles as article}
				<article class="rsl-journal-row">
					<span class="rsl-meta rsl-journal-cat">{article.category}</span>
					<a href="/articles/{article.slug}">
						<h3 class="rsl-journal-headline">{article.title}</h3>
						<p class="rsl-journal-excerpt">{article.excerpt}</p>
					</a>
					<div class="rsl-journal-meta">
						<span class="rsl-meta">{article.author}</span>
						<span class="rsl-meta">{article.readingTime}</span>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ============================================ -->
<!-- № 03 — THE BOOK · classic print advertisement -->
<!-- ============================================ -->
<section class="rsl-section" id="the-book">
	<div class="rsl-container">
		<div class="rsl-advert-wrap">
			<div class="rsl-advert">
				<div class="rsl-advert-inner">
					<span class="rsl-advert-rosette" aria-hidden="true">※&nbsp;&nbsp;※&nbsp;&nbsp;※</span>
					<span class="rsl-kicker">№ 03 — An Announcement from the Publisher</span>
					<h2 class="rsl-advert-title">The Essential Guide</h2>
					<p class="rsl-advert-subtitle">Being Muslim: A Practical Guide · by Dr. Asad Tarsin</p>

					<hr class="rsl-advert-rule" />

					<p class="rsl-advert-copy">
						{products[0].description}
					</p>

					<p class="rsl-advert-price">
						Offered at <strong>Fourteen Dollars &amp; Ninety-Five Cents</strong> ({money(products[0].price)}) ·
						{products[0].rating} stars across {products[0].reviewCount} notices
					</p>

					<div class="rsl-advert-ctas">
						<a href="/shop/being-muslim-book" class="rsl-textlink">Order the Book&nbsp;&nbsp;→</a>
						<a href="/shop/being-muslim-ebook" class="rsl-textlink rsl-textlink--quiet">Digital Edition, {money(products[3].price)}&nbsp;&nbsp;→</a>
					</div>

					<p class="rsl-meta rsl-advert-foot">Also available in Spanish — Ser Musulmán</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================================ -->
<!-- PULL QUOTE I                                  -->
<!-- ============================================ -->
<div class="rsl-container"><hr class="rsl-hairline" /></div>

<section aria-label="Reader testimony">
	<div class="rsl-container">
		<figure class="rsl-pullquote">
			<span class="rsl-pullquote-mark" aria-hidden="true">❡</span>
			<blockquote>“{quoteOne.quote}”</blockquote>
			<figcaption>—&nbsp;<strong>{quoteOne.name}</strong>, {quoteOne.role}</figcaption>
		</figure>
	</div>
</section>

<div class="rsl-container"><hr class="rsl-hairline" /></div>

<!-- ============================================ -->
<!-- № 04 — COURSES · numbered syllabus            -->
<!-- ============================================ -->
<section class="rsl-section" id="courses">
	<div class="rsl-container">
		<div class="rsl-section-head">
			<div>
				<span class="rsl-kicker">№ 04 — A Course of Study</span>
				<h2 class="rsl-section-title">The syllabus</h2>
			</div>
			<a href="/courses" class="rsl-textlink rsl-textlink--quiet">All Courses&nbsp;&nbsp;→</a>
		</div>

		<div class="rsl-syllabus">
			{#each courses as course, i}
				<a href="/courses/{course.slug}" class="rsl-syllabus-row">
					<span class="rsl-syllabus-no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
					<div>
						<h3 class="rsl-syllabus-title">{course.title}</h3>
						<p class="rsl-syllabus-desc">{course.description}</p>
					</div>
					<div class="rsl-syllabus-cell">
						<span class="rsl-meta">Instructor — <em>{course.instructor}</em></span>
						<span class="rsl-meta">{course.lessonCount} lessons · {course.duration}</span>
					</div>
					<div class="rsl-syllabus-cell">
						<span class="rsl-meta">{course.difficulty}</span>
						<span class="rsl-meta">{course.enrolled?.toLocaleString()} enrolled</span>
					</div>
					<span class="rsl-syllabus-arrow" aria-hidden="true">→</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<div class="rsl-container"><hr class="rsl-hairline" /></div>

<!-- ============================================ -->
<!-- № 05 — FROM THE PRESS · products listing      -->
<!-- ============================================ -->
<section class="rsl-section" id="press">
	<div class="rsl-container">
		<div class="rsl-section-head">
			<div>
				<span class="rsl-kicker">№ 05 — From the Press</span>
				<h2 class="rsl-section-title">Editions &amp; materials</h2>
			</div>
			<a href="/shop" class="rsl-textlink rsl-textlink--quiet">Visit the Shop&nbsp;&nbsp;→</a>
		</div>

		<div class="rsl-press-list">
			{#each products as product}
				<a href="/shop/{product.handle}" class="rsl-press-row">
					<span class="rsl-meta">{product.category}{#if product.badge}&nbsp;·&nbsp;<span style="color: var(--rsl-accent);">{product.badge}</span>{/if}</span>
					<div>
						<h3 class="rsl-press-title">{product.title}</h3>
						<p class="rsl-press-desc">{product.description.slice(0, 110)}…</p>
					</div>
					<span class="rsl-press-price">{money(product.price)}</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<div class="rsl-container"><hr class="rsl-hairline" /></div>

<!-- ============================================ -->
<!-- № 06 — PATRONAGE · sponsorship boxes          -->
<!-- ============================================ -->
<section class="rsl-section" id="give">
	<div class="rsl-container">
		<div class="rsl-section-head">
			<div>
				<span class="rsl-kicker">№ 06 — Patronage</span>
				<h2 class="rsl-section-title">Put this guide in another's hands</h2>
			</div>
			<span class="rsl-meta">Every set reaches a new Muslim, free of charge</span>
		</div>

		<div class="rsl-tiers">
			{#each sponsorshipTiers as tier}
				<article class="rsl-tier" class:rsl-tier--popular={tier.popular}>
					{#if tier.popular}
						<span class="rsl-tier-flag">Most Chosen</span>
					{/if}
					<h3 class="rsl-tier-name">{tier.name}</h3>
					<p class="rsl-tier-price"><sup>$</sup>{tier.price}</p>
					<p class="rsl-tier-desc">{tier.description}</p>
					<p class="rsl-tier-impact">{tier.impact}</p>
					<a href="/give" class="rsl-textlink">Sponsor Now&nbsp;&nbsp;→</a>
				</article>
			{/each}
		</div>

		<p class="rsl-give-foot">
			To date, readers like you have sponsored <strong>{donationStats.totalSponsored.toLocaleString()} boxed sets</strong>
			across <strong>{donationStats.communitiesReached} communities</strong> in
			<strong>{donationStats.countriesReached} countries</strong> — sustained by
			<strong>{donationStats.monthlyDonors} monthly patrons</strong>.
		</p>
	</div>
</section>

<!-- ============================================ -->
<!-- PULL QUOTE II                                 -->
<!-- ============================================ -->
<div class="rsl-container"><hr class="rsl-hairline" /></div>

<section aria-label="Scholarly testimony">
	<div class="rsl-container">
		<figure class="rsl-pullquote">
			<span class="rsl-pullquote-mark" aria-hidden="true">❡</span>
			<blockquote>“{quoteTwo.quote}”</blockquote>
			<figcaption>—&nbsp;<strong>{quoteTwo.name}</strong>, {quoteTwo.role}</figcaption>
		</figure>
	</div>
</section>

<div class="rsl-container"><hr class="rsl-hairline" /></div>

<!-- ============================================ -->
<!-- CLOSING — a letter to the reader              -->
<!-- ============================================ -->
<section class="rsl-section">
	<div class="rsl-container">
		<div class="rsl-closing">
			<span class="rsl-kicker">A Closing Note</span>
			<h2 class="rsl-closing-title">To the reader, wherever you are</h2>
			<p class="rsl-closing-copy">
				No one becomes Muslim alone, and no one should have to learn alone. Join the conversation in our
				community forums, write to us with your questions, or simply keep reading. This periodical has no
				final edition — and neither does your journey.
			</p>
			<p class="rsl-closing-sig">— The Being Muslim Project</p>
			<div class="rsl-closing-ctas">
				<a href="/community" class="rsl-textlink">Join the Community&nbsp;&nbsp;→</a>
				<a href="/articles" class="rsl-textlink rsl-textlink--quiet">Keep Reading&nbsp;&nbsp;→</a>
			</div>
		</div>
	</div>
</section>
