<script lang="ts">
	import { ArrowRight, Users, Globe, Heart } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Being Muslim — A Practical Guide</title>
	<meta name="description" content="A practical guide for those beginning their journey in Islam." />
</svelte:head>

<!-- AREA 1: HERO — Asymmetric, broken grid -->
<section class="hero">
	<div class="hero__grid">
		<div class="hero__text">
			<h1 class="hero__title">
				<span class="hero__title-line">Being</span>
				<span class="hero__title-line">Muslim</span>
			</h1>
			<p class="hero__subtitle">A practical guide for those beginning their journey</p>
			<a href="/j/" class="hero__cta">
				<span>Explore</span>
				<ArrowRight size={16} />
			</a>
		</div>
		<div class="hero__image">
			<img
				src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg"
				alt="Being Muslim book"
			/>
		</div>
	</div>
</section>

<!-- AREA 2: EDITORIAL GRID — Magazine spread with overlapping items -->
<section class="editorial">
	<div class="editorial__grid">
		<div class="editorial__feature-img">
			<img
				src="https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png"
				alt="Living Islam with purpose"
			/>
		</div>

		<div class="editorial__feature-text">
			<span class="editorial__cat">FOUNDATIONS</span>
			<h2 class="editorial__title">Brief Overview of Islam</h2>
			<span class="editorial__meta">10 min read</span>
		</div>

		<div class="editorial__secondary">
			<div class="editorial__secondary-img">
				<img
					src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg"
					alt="Being Muslim book"
				/>
			</div>
			<h3 class="editorial__secondary-title">A Beginner's Guide to Being a Muslim</h3>
			<span class="editorial__meta">12 min read</span>
		</div>

		<div class="editorial__tertiary">
			<h3 class="editorial__tertiary-title">Islam and Other Faiths</h3>
			<p class="editorial__tertiary-desc">Understanding interfaith dialogue, common ground, and respectful engagement with other traditions.</p>
			<span class="editorial__meta">8 min read</span>
		</div>
	</div>
</section>

<!-- AREA 3: PULL QUOTE -->
<section class="pullquote">
	<div class="pullquote__inner">
		<span class="pullquote__mark">&ldquo;</span>
		<blockquote class="pullquote__text">
			Whether you're exploring Islam, newly converted, or reconnecting with your faith — find the knowledge, community, and support you need.
		</blockquote>
		<span class="pullquote__author">— The Being Muslim Project</span>
	</div>
</section>

<!-- AREA 4: PRODUCTS — Editorial arrangement -->
<section class="products">
	<div class="products__header">
		<h2 class="products__heading">The Collection</h2>
		<div class="products__line"></div>
	</div>
	<div class="products__grid">
		<a href="/j/" class="products__item products__item--large">
			<div class="products__img-wrap">
				<img
					src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg"
					alt="Being Muslim: A Practical Guide"
				/>
			</div>
			<h3 class="products__name">Being Muslim: A Practical Guide</h3>
			<span class="products__price">$14.95</span>
		</a>
		<a href="/j/" class="products__item products__item--medium">
			<div class="products__img-wrap">
				<img
					src="https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg"
					alt="The Complete Boxed Set"
				/>
			</div>
			<h3 class="products__name">The Complete Boxed Set</h3>
			<span class="products__price">$85.00</span>
		</a>
		<a href="/j/" class="products__item products__item--small products__item--offset">
			<div class="products__img-wrap">
				<img
					src="https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg"
					alt="Prayer Reference Cards"
				/>
			</div>
			<h3 class="products__name">Prayer Reference Cards</h3>
			<span class="products__price">$37.50</span>
		</a>
		<a href="/j/" class="products__item products__item--small">
			<div class="products__img-wrap">
				<img
					src="https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png"
					alt="Digital Edition (eBook)"
				/>
			</div>
			<h3 class="products__name">Digital Edition (eBook)</h3>
			<span class="products__price">$9.00</span>
		</a>
	</div>
</section>

<!-- AREA 5: LEARN — Typographic table of contents -->
<section class="learn">
	<div class="learn__inner">
		<div class="learn__heading-col">
			<h2 class="learn__heading">Study</h2>
		</div>
		<div class="learn__list">
			<a href="/j/" class="learn__entry">
				<div class="learn__entry-left">
					<span class="learn__num">01</span>
					<div class="learn__entry-info">
						<h3 class="learn__entry-title">Foundations of Faith</h3>
						<span class="learn__entry-meta">Imam Ahmad Bilal &middot; 12 lessons</span>
					</div>
				</div>
				<span class="learn__arrow"><ArrowRight size={18} /></span>
			</a>
			<a href="/j/" class="learn__entry">
				<div class="learn__entry-left">
					<span class="learn__num">02</span>
					<div class="learn__entry-info">
						<h3 class="learn__entry-title">The Practice of Prayer</h3>
						<span class="learn__entry-meta">Sister Maryam Khan &middot; 8 lessons</span>
					</div>
				</div>
				<span class="learn__arrow"><ArrowRight size={18} /></span>
			</a>
			<a href="/j/" class="learn__entry">
				<div class="learn__entry-left">
					<span class="learn__num">03</span>
					<div class="learn__entry-info">
						<h3 class="learn__entry-title">Living Islam with Purpose</h3>
						<span class="learn__entry-meta">Dr. Yusuf Rahman &middot; 15 lessons</span>
					</div>
				</div>
				<span class="learn__arrow"><ArrowRight size={18} /></span>
			</a>
		</div>
	</div>
</section>

<!-- AREA 6: COMMUNITY — Split screen -->
<section class="community">
	<div class="community__split">
		<div class="community__left">
			<span class="community__number">2,500+</span>
			<p class="community__label">Muslims learning together</p>
			<div class="community__stats">
				<div class="community__stat">
					<Users size={16} />
					<span>Active members worldwide</span>
				</div>
				<div class="community__stat">
					<Globe size={16} />
					<span>52 countries represented</span>
				</div>
				<div class="community__stat">
					<Heart size={16} />
					<span>Supportive & inclusive</span>
				</div>
			</div>
			<a href="/j/" class="community__cta">Join the Community</a>
		</div>
		<div class="community__right">
			<div class="community__chat">
				<div class="community__msg">
					<div class="community__avatar" style="background: #D4622B;">A</div>
					<div class="community__msg-body">
						<span class="community__msg-name">Amira S.</span>
						<p class="community__msg-text">Salaam everyone! I just completed my first week of Ramadan fasting. The support here has been incredible.</p>
						<span class="community__msg-time">2 min ago</span>
					</div>
				</div>
				<div class="community__msg">
					<div class="community__avatar" style="background: #9A9590;">Y</div>
					<div class="community__msg-body">
						<span class="community__msg-name">Yusuf K.</span>
						<p class="community__msg-text">MashaAllah Amira! Keep going, you're doing great. Feel free to ask any questions.</p>
						<span class="community__msg-time">1 min ago</span>
					</div>
				</div>
				<div class="community__msg">
					<div class="community__avatar" style="background: var(--bm-black);">F</div>
					<div class="community__msg-body">
						<span class="community__msg-name">Fatima R.</span>
						<p class="community__msg-text">Welcome! This community changed my journey as a convert. You'll love it here.</p>
						<span class="community__msg-time">Just now</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- AREA 7: SUPPORT — Minimal editorial -->
<section class="support">
	<div class="support__inner">
		<div class="support__content">
			<span class="support__number">3,247</span>
			<p class="support__desc">boxed sets sponsored for new Muslims</p>
			<p class="support__stats">520 communities &middot; 52 countries &middot; 180 monthly donors</p>
		</div>
		<div class="support__action">
			<a href="/j/" class="support__link">
				<span>Support the Mission</span>
				<ArrowRight size={16} />
			</a>
		</div>
	</div>
</section>

<!-- AREA 8: NEWSLETTER -->
<section class="newsletter">
	<div class="newsletter__line"></div>
	<div class="newsletter__inner">
		<h2 class="newsletter__heading">Stay informed</h2>
		<form class="newsletter__form" onsubmit={(e) => e.preventDefault()}>
			<input type="email" class="newsletter__input" placeholder="your@email.com" aria-label="Email address" />
			<button type="submit" class="newsletter__btn">
				<span>Subscribe</span>
				<ArrowRight size={14} />
			</button>
		</form>
	</div>
</section>

<style>
	/* ===== AREA 1: HERO ===== */
	.hero {
		padding-top: 100px;
		padding-bottom: 80px;
	}

	.hero__grid {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 24px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		position: relative;
		min-height: 60vh;
	}

	.hero__text {
		position: relative;
		z-index: 2;
	}

	.hero__title {
		font-family: var(--bm-font-serif);
		font-weight: 700;
		font-size: clamp(80px, 12vw, 160px);
		line-height: 0.9;
		color: var(--bm-black);
		margin: 0;
	}

	.hero__title-line {
		display: block;
	}

	.hero__subtitle {
		font-family: var(--bm-font-sans);
		font-size: 16px;
		color: var(--bm-gray);
		margin-top: 32px;
		letter-spacing: 0.02em;
	}

	.hero__cta {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-top: 24px;
		font-family: var(--bm-font-sans);
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--bm-orange);
		text-decoration: none;
		transition: opacity 0.2s ease;
	}

	.hero__cta:hover {
		opacity: 0.7;
	}

	.hero__image {
		position: relative;
		z-index: 1;
		margin-left: -80px;
		margin-top: 40px;
	}

	.hero__image img {
		width: 100%;
		max-width: 420px;
		height: auto;
	}

	/* ===== AREA 2: EDITORIAL GRID ===== */
	.editorial {
		padding: 40px 24px 100px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.editorial__grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto auto auto auto;
		gap: 16px;
	}

	.editorial__feature-img {
		grid-column: 1 / 8;
		grid-row: 1 / 4;
		overflow: hidden;
	}

	.editorial__feature-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.editorial__feature-text {
		grid-column: 5 / 11;
		grid-row: 2 / 4;
		background: rgba(248, 246, 241, 0.92);
		padding: 40px;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 12px;
	}

	.editorial__cat {
		font-family: var(--bm-font-sans);
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--bm-orange);
	}

	.editorial__title {
		font-family: var(--bm-font-serif);
		font-size: 36px;
		font-weight: 700;
		line-height: 1.15;
		color: var(--bm-black);
		margin: 0;
	}

	.editorial__meta {
		font-family: var(--bm-font-sans);
		font-size: 13px;
		color: var(--bm-gray);
	}

	.editorial__secondary {
		grid-column: 8 / 13;
		grid-row: 1 / 3;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.editorial__secondary-img {
		overflow: hidden;
		aspect-ratio: 4 / 3;
	}

	.editorial__secondary-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.editorial__secondary-title {
		font-family: var(--bm-font-serif);
		font-size: 24px;
		font-weight: 400;
		line-height: 1.3;
		color: var(--bm-black);
		margin: 0;
	}

	.editorial__tertiary {
		grid-column: 9 / 13;
		grid-row: 3 / 5;
		border-left: 4px solid var(--bm-orange);
		padding: 24px 0 24px 24px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.editorial__tertiary-title {
		font-family: var(--bm-font-serif);
		font-size: 20px;
		font-weight: 400;
		line-height: 1.3;
		color: var(--bm-black);
		margin: 0;
	}

	.editorial__tertiary-desc {
		font-family: var(--bm-font-sans);
		font-size: 14px;
		color: var(--bm-gray);
		line-height: 1.6;
	}

	/* ===== AREA 3: PULL QUOTE ===== */
	.pullquote {
		padding: 120px 24px;
	}

	.pullquote__inner {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
		position: relative;
	}

	.pullquote__mark {
		display: block;
		font-family: var(--bm-font-serif);
		font-size: 120px;
		line-height: 0.5;
		color: var(--bm-orange);
		margin-bottom: 24px;
	}

	.pullquote__text {
		font-family: var(--bm-font-serif);
		font-style: italic;
		font-size: 28px;
		line-height: 1.5;
		color: var(--bm-black);
		margin: 0;
		border: none;
		padding: 0;
	}

	.pullquote__author {
		display: block;
		font-family: var(--bm-font-sans);
		font-size: 14px;
		color: var(--bm-gray);
		margin-top: 32px;
	}

	/* ===== AREA 4: PRODUCTS ===== */
	.products {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 24px 100px;
	}

	.products__header {
		display: flex;
		align-items: center;
		gap: 32px;
		margin-bottom: 60px;
	}

	.products__heading {
		font-family: var(--bm-font-serif);
		font-size: 48px;
		font-weight: 400;
		color: var(--bm-black);
		white-space: nowrap;
		margin: 0;
	}

	.products__line {
		flex: 1;
		height: 1px;
		background: var(--bm-gray);
		opacity: 0.3;
	}

	.products__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto;
		gap: 40px;
	}

	.products__item {
		display: flex;
		flex-direction: column;
		gap: 16px;
		text-decoration: none;
		color: inherit;
	}

	.products__img-wrap {
		overflow: hidden;
		transition: transform 0.3s ease;
	}

	.products__item:hover .products__img-wrap {
		transform: translateY(-4px);
	}

	.products__img-wrap img {
		width: 100%;
		height: auto;
		display: block;
	}

	.products__item--large .products__img-wrap {
		aspect-ratio: 3 / 4;
	}

	.products__item--large .products__img-wrap img {
		height: 100%;
		object-fit: cover;
	}

	.products__item--medium .products__img-wrap {
		aspect-ratio: 3 / 3.5;
	}

	.products__item--medium .products__img-wrap img {
		height: 100%;
		object-fit: cover;
	}

	.products__item--small .products__img-wrap {
		aspect-ratio: 3 / 3;
	}

	.products__item--small .products__img-wrap img {
		height: 100%;
		object-fit: cover;
	}

	.products__item--offset {
		grid-column: 1 / 2;
		padding-left: 25%;
	}

	.products__name {
		font-family: var(--bm-font-serif);
		font-size: 18px;
		font-weight: 400;
		line-height: 1.3;
		margin: 0;
	}

	.products__price {
		font-family: var(--bm-font-sans);
		font-size: 14px;
		color: var(--bm-gray);
	}

	/* ===== AREA 5: LEARN ===== */
	.learn {
		padding: 80px 24px 100px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.learn__inner {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 60px;
		align-items: start;
	}

	.learn__heading {
		font-family: var(--bm-font-serif);
		font-size: 80px;
		font-weight: 400;
		color: var(--bm-black);
		line-height: 1;
		margin: 0;
		position: sticky;
		top: 100px;
	}

	.learn__list {
		display: flex;
		flex-direction: column;
	}

	.learn__entry {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 32px 0;
		border-top: 1px solid rgba(154, 149, 144, 0.25);
		text-decoration: none;
		color: inherit;
		transition: padding-left 0.3s ease;
	}

	.learn__entry:last-child {
		border-bottom: 1px solid rgba(154, 149, 144, 0.25);
	}

	.learn__entry:hover {
		padding-left: 12px;
	}

	.learn__entry-left {
		display: flex;
		align-items: flex-start;
		gap: 24px;
	}

	.learn__num {
		font-family: var(--bm-font-sans);
		font-size: 14px;
		font-weight: 600;
		color: var(--bm-orange);
		letter-spacing: 0.05em;
		padding-top: 6px;
	}

	.learn__entry-info {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.learn__entry-title {
		font-family: var(--bm-font-serif);
		font-size: 28px;
		font-weight: 400;
		line-height: 1.2;
		margin: 0;
	}

	.learn__entry-meta {
		font-family: var(--bm-font-sans);
		font-size: 13px;
		color: var(--bm-gray);
	}

	.learn__arrow {
		color: var(--bm-gray);
		transition: color 0.2s ease, transform 0.2s ease;
		flex-shrink: 0;
	}

	.learn__entry:hover .learn__arrow {
		color: var(--bm-orange);
		transform: translateX(4px);
	}

	/* ===== AREA 6: COMMUNITY ===== */
	.community {
		overflow: hidden;
	}

	.community__split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 600px;
	}

	.community__left {
		background: var(--bm-black);
		color: #fff;
		padding: 80px 60px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.community__number {
		font-family: var(--bm-font-serif);
		font-size: 100px;
		font-weight: 400;
		line-height: 1;
		display: block;
	}

	.community__label {
		font-family: var(--bm-font-sans);
		font-size: 18px;
		color: rgba(255, 255, 255, 0.7);
		margin-top: 12px;
	}

	.community__stats {
		display: flex;
		flex-direction: column;
		gap: 14px;
		margin-top: 40px;
	}

	.community__stat {
		display: flex;
		align-items: center;
		gap: 12px;
		font-family: var(--bm-font-sans);
		font-size: 14px;
		color: rgba(255, 255, 255, 0.6);
	}

	.community__cta {
		display: inline-block;
		margin-top: 40px;
		font-family: var(--bm-font-sans);
		font-size: 13px;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--bm-orange);
		text-decoration: none;
		padding: 14px 32px;
		border: 1px solid var(--bm-orange);
		transition: all 0.25s ease;
		align-self: flex-start;
	}

	.community__cta:hover {
		background: var(--bm-orange);
		color: #fff;
	}

	.community__right {
		background: var(--bm-bg);
		padding: 60px 48px;
		display: flex;
		align-items: center;
	}

	.community__chat {
		display: flex;
		flex-direction: column;
		gap: 24px;
		width: 100%;
	}

	.community__msg {
		display: flex;
		gap: 14px;
	}

	.community__avatar {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--bm-font-sans);
		font-size: 13px;
		font-weight: 600;
		color: #fff;
		flex-shrink: 0;
	}

	.community__msg-body {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.community__msg-name {
		font-family: var(--bm-font-sans);
		font-size: 13px;
		font-weight: 600;
		color: var(--bm-black);
	}

	.community__msg-text {
		font-family: var(--bm-font-sans);
		font-size: 14px;
		line-height: 1.55;
		color: var(--bm-black);
		margin: 0;
	}

	.community__msg-time {
		font-family: var(--bm-font-sans);
		font-size: 11px;
		color: var(--bm-gray);
		margin-top: 2px;
	}

	/* ===== AREA 7: SUPPORT ===== */
	.support {
		padding: 120px 24px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.support__inner {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 60px;
	}

	.support__number {
		font-family: var(--bm-font-serif);
		font-size: 120px;
		font-weight: 400;
		line-height: 1;
		color: var(--bm-orange);
		display: block;
	}

	.support__desc {
		font-family: var(--bm-font-sans);
		font-size: 18px;
		color: var(--bm-black);
		margin-top: 12px;
	}

	.support__stats {
		font-family: var(--bm-font-sans);
		font-size: 14px;
		color: var(--bm-gray);
		margin-top: 16px;
	}

	.support__link {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-family: var(--bm-font-sans);
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--bm-orange);
		text-decoration: none;
		transition: opacity 0.2s ease;
		white-space: nowrap;
	}

	.support__link:hover {
		opacity: 0.7;
	}

	/* ===== AREA 8: NEWSLETTER ===== */
	.newsletter {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 24px 100px;
	}

	.newsletter__line {
		height: 1px;
		background: var(--bm-gray);
		opacity: 0.3;
		margin-bottom: 60px;
	}

	.newsletter__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 48px;
	}

	.newsletter__heading {
		font-family: var(--bm-font-serif);
		font-size: 36px;
		font-weight: 400;
		color: var(--bm-black);
		margin: 0;
		white-space: nowrap;
	}

	.newsletter__form {
		display: flex;
		align-items: center;
		gap: 24px;
		flex: 1;
		max-width: 480px;
	}

	.newsletter__input {
		flex: 1;
		font-family: var(--bm-font-sans);
		font-size: 15px;
		color: var(--bm-black);
		background: transparent;
		border: none;
		border-bottom: 1px solid var(--bm-gray);
		padding: 8px 0;
		outline: none;
		transition: border-color 0.2s ease;
	}

	.newsletter__input::placeholder {
		color: var(--bm-gray);
	}

	.newsletter__input:focus {
		border-bottom-color: var(--bm-orange);
	}

	.newsletter__btn {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-family: var(--bm-font-sans);
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--bm-orange);
		background: none;
		border: none;
		cursor: pointer;
		transition: opacity 0.2s ease;
		white-space: nowrap;
	}

	.newsletter__btn:hover {
		opacity: 0.7;
	}

	/* ===== RESPONSIVE ===== */
	@media (max-width: 1024px) {
		.hero__image {
			margin-left: -40px;
		}

		.hero__image img {
			max-width: 340px;
		}

		.editorial__feature-text {
			grid-column: 4 / 11;
		}

		.community__left {
			padding: 60px 40px;
		}

		.community__number {
			font-size: 72px;
		}

		.support__number {
			font-size: 80px;
		}
	}

	@media (max-width: 768px) {
		.hero__grid {
			grid-template-columns: 1fr;
			min-height: auto;
			gap: 40px;
		}

		.hero__title {
			font-size: clamp(56px, 14vw, 100px);
		}

		.hero__image {
			margin-left: 0;
			display: flex;
			justify-content: center;
		}

		.hero__image img {
			max-width: 280px;
		}

		.editorial__grid {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
		}

		.editorial__feature-img {
			grid-column: 1 / -1;
			grid-row: auto;
		}

		.editorial__feature-text {
			grid-column: 1 / -1;
			grid-row: auto;
			margin-top: -40px;
			margin-left: 24px;
			margin-right: 24px;
		}

		.editorial__secondary {
			grid-column: 1 / -1;
			grid-row: auto;
			margin-top: 32px;
		}

		.editorial__tertiary {
			grid-column: 1 / -1;
			grid-row: auto;
			margin-top: 16px;
		}

		.pullquote {
			padding: 80px 24px;
		}

		.pullquote__mark {
			font-size: 80px;
		}

		.pullquote__text {
			font-size: 22px;
		}

		.products__heading {
			font-size: 36px;
		}

		.products__grid {
			grid-template-columns: 1fr;
			gap: 48px;
		}

		.products__item--offset {
			grid-column: 1 / -1;
			padding-left: 0;
		}

		.learn__inner {
			grid-template-columns: 1fr;
			gap: 32px;
		}

		.learn__heading {
			font-size: 56px;
			position: static;
		}

		.learn__entry-title {
			font-size: 22px;
		}

		.community__split {
			grid-template-columns: 1fr;
			min-height: auto;
		}

		.community__left {
			padding: 60px 24px;
		}

		.community__number {
			font-size: 64px;
		}

		.community__right {
			padding: 48px 24px;
		}

		.support {
			padding: 80px 24px;
		}

		.support__inner {
			flex-direction: column;
			align-items: flex-start;
		}

		.support__number {
			font-size: 72px;
		}

		.newsletter__inner {
			flex-direction: column;
			align-items: flex-start;
			gap: 24px;
		}

		.newsletter__form {
			width: 100%;
			max-width: none;
		}

		.newsletter__heading {
			font-size: 28px;
		}
	}

	@media (max-width: 480px) {
		.hero {
			padding-top: 80px;
		}

		.hero__title {
			font-size: clamp(48px, 16vw, 80px);
		}

		.editorial__feature-text {
			padding: 24px;
		}

		.editorial__title {
			font-size: 26px;
		}

		.community__number {
			font-size: 48px;
		}

		.support__number {
			font-size: 56px;
		}

		.learn__heading {
			font-size: 44px;
		}

		.learn__entry-title {
			font-size: 18px;
		}

		.learn__entry-left {
			gap: 16px;
		}
	}
</style>
