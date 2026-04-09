<script lang="ts">
	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	const faqs = [
		{ q: 'My family is not supportive of my conversion. What do you advise?', a: 'This is a common challenge many new Muslims face. We recommend patience, maintaining loving relationships, and leading by positive example. Our community forum has many discussions from people who have navigated this successfully.' },
		{ q: 'Can you help me find a mosque or community of Muslims near me?', a: 'We can help connect you with local communities. Reach out through our Contact page and we will do our best to help you find a welcoming community in your area.' },
		{ q: 'My previous faith was very dear to me. If I am now a Muslim, do I have to reject it entirely?', a: 'Islam acknowledges and respects the earlier prophets and scriptures. Many of the values you cherished in your previous faith are shared in Islam. Your journey enriches rather than erases your spiritual history.' },
		{ q: 'My spouse or significant other is not a Muslim. How does becoming Muslim impact my marriage?', a: 'This is a nuanced topic that depends on your specific situation. We recommend speaking with a knowledgeable scholar who can provide guidance tailored to your circumstances. Reach out through our Contact page.' },
		{ q: 'I just converted, what do I do next?', a: 'Congratulations and may God bless your path ahead! We have written an article that offers some advice and important first steps: "A Beginner\'s Guide to Being a Muslim." You can find it on our Learn page.' },
		{ q: 'I believe Islam to be true and revealed by God, but I can\'t live up to its teachings. What should I do?', a: 'This feeling is more common than you might think. Islam teaches that God is the Most Merciful and that no one is expected to be perfect. Begin with what you can, be sincere in your intention, and trust that growth comes with time. The door to God is always open.' },
		{ q: 'I want to convert, but I am finding it difficult to change my lifestyle including the way that I dress, what I eat/drink, relationships. Can I still become Muslim?', a: 'Absolutely. Islam teaches that faith is a journey, not a destination. You do not need to be perfect to begin. Start with the essentials and grow at your own pace — God is patient and merciful.' },
		{ q: 'Do I need to change my name now that I have become Muslim?', a: 'No, changing your name is not required in Islam. Many Muslims keep their birth names. Some choose to adopt a new name as a personal expression of their new identity, but this is entirely optional.' }
	];
</script>

<svelte:head>
	<title>Being Muslim — Your Guide to a Meaningful Islamic Journey</title>
	<meta
		name="description"
		content="Empowering converts and beginners on their Islamic journey through education, community, and support."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO                        -->
<!-- ============================== -->
<section
	style="
		min-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #FFFFFF;
		text-align: center;
	"
>
	<div style="max-width: 720px; padding: 0 24px;">
		<h1
			style="
				font-family: 'Inter', sans-serif;
				font-size: clamp(48px, 7vw, 80px);
				font-weight: 700;
				color: #111;
				line-height: 1.05;
				letter-spacing: -0.03em;
				margin: 0;
			"
		>
			Navigating the<br />
			<span style="color: #5A7A64;">Path</span> to Islam
		</h1>

		<p
			style="
				font-family: 'Inter', sans-serif;
				font-size: 17px;
				font-weight: 300;
				color: #666;
				line-height: 1.7;
				margin: 28px auto 0;
				max-width: 520px;
			"
		>
			Empowering new and beginner Muslims with comprehensive education and support to navigate your journey and deepen your understanding and connection with faith.
		</p>

		<div style="margin-top: 40px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px;">
			<a href="/d/learn" class="d-btn-primary">Start Learning</a>
			<a href="/d/learn" class="d-btn-secondary">Explore Resources</a>
		</div>

		<p
			style="
				font-family: 'Inter', sans-serif;
				font-size: 13px;
				font-weight: 400;
				color: #999;
				margin-top: 32px;
			"
		>
			Trusted by 10,000+ learners
		</p>
	</div>
</section>

<!-- ============================== -->
<!-- 2. EXPLORE PATH                -->
<!-- ============================== -->
<section class="d-section">
	<div class="d-container">
		<h2
			style="
				font-family: 'Inter', sans-serif;
				font-size: clamp(24px, 3.5vw, 36px);
				font-weight: 600;
				color: #111;
				letter-spacing: -0.02em;
				margin: 0 0 48px;
				text-align: center;
			"
		>
			Explore your path
		</h2>

		<div class="d-grid-explore">
			<!-- Learn -->
			<a href="/d/learn" class="d-explore-card">
				<div>
					<p
						style="
							font-size: 11px;
							font-weight: 600;
							color: #999;
							text-transform: uppercase;
							letter-spacing: 0.1em;
							margin: 0 0 12px;
						"
					>
						Learn
					</p>
					<p
						style="
							font-size: 20px;
							font-weight: 400;
							color: #111;
							line-height: 1.4;
							margin: 0;
						"
					>
						Explore articles, guides, and resources on Islamic faith and practice
					</p>
				</div>
				<div style="margin-top: 32px; text-align: right;">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</div>
			</a>

			<!-- Convert -->
			<a href="/d/convert" class="d-explore-card">
				<div>
					<p
						style="
							font-size: 11px;
							font-weight: 600;
							color: #999;
							text-transform: uppercase;
							letter-spacing: 0.1em;
							margin: 0 0 12px;
						"
					>
						Convert
					</p>
					<p
						style="
							font-size: 20px;
							font-weight: 400;
							color: #111;
							line-height: 1.4;
							margin: 0;
						"
					>
						Take the next step on your journey with guidance and support
					</p>
				</div>
				<div style="margin-top: 32px; text-align: right;">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</div>
			</a>

			<!-- Buy -->
			<a href="/d/shop" class="d-explore-card">
				<div>
					<p
						style="
							font-size: 11px;
							font-weight: 600;
							color: #999;
							text-transform: uppercase;
							letter-spacing: 0.1em;
							margin: 0 0 12px;
						"
					>
						Buy
					</p>
					<p
						style="
							font-size: 20px;
							font-weight: 400;
							color: #111;
							line-height: 1.4;
							margin: 0;
						"
					>
						Books, prayer cards, and resources for your journey
					</p>
				</div>
				<div style="margin-top: 32px; text-align: right;">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</div>
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 3. ARTICLES                    -->
<!-- ============================== -->
<section class="d-section" style="border-top: 1px solid #E5E5E5;">
	<div class="d-container">
		<h2
			style="
				font-family: 'Inter', sans-serif;
				font-size: clamp(24px, 3.5vw, 36px);
				font-weight: 600;
				color: #111;
				letter-spacing: -0.02em;
				margin: 0 0 48px;
			"
		>
			Latest Resources
		</h2>

		<div class="d-grid-articles">
			{#each [
				{ title: 'Brief Overview of Islam', category: 'Foundations', time: '10 min read', href: '/d/learn/brief-overview-of-islam', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png' },
				{ title: "A Beginner's Guide to Being a Muslim", category: 'New Muslims', time: '12 min read', href: '/d/learn/beginners-guide', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg' },
				{ title: 'Islam and Other Faiths', category: 'Belief', time: '8 min read', href: '/d/learn/islam-and-other-faiths', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/oneGodmanynames.jpeg' }
			] as article}
				<a href={article.href} class="d-article-card">
					<div
						style="
							aspect-ratio: 4/3;
							overflow: hidden;
							background: #F5F5F5;
							margin-bottom: 16px;
						"
					>
						<img
							src={article.img}
							alt={article.title}
							style="width: 100%; height: 100%; object-fit: cover; display: block;"
						/>
					</div>
					<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
						<span
							style="
								font-size: 11px;
								font-weight: 600;
								color: #5A7A64;
								text-transform: uppercase;
								letter-spacing: 0.08em;
							"
						>
							{article.category}
						</span>
						<span style="font-size: 12px; font-weight: 300; color: #999;">{article.time}</span>
					</div>
					<h3
						class="d-article-title"
						style="
							font-size: 18px;
							font-weight: 500;
							color: #111;
							line-height: 1.35;
							margin: 0;
						"
					>
						{article.title}
					</h3>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 56px;">
			<a href="/d/learn" class="d-btn-secondary">Additional Resources</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 4. PRODUCTS                    -->
<!-- ============================== -->
<section class="d-section" style="border-top: 1px solid #E5E5E5;">
	<div class="d-container">
		<h2
			style="
				font-family: 'Inter', sans-serif;
				font-size: clamp(24px, 3.5vw, 36px);
				font-weight: 600;
				color: #111;
				letter-spacing: -0.02em;
				margin: 0 0 48px;
			"
		>
			Everything you need to begin
		</h2>

		<div class="d-products-scroll">
			{#each [
				{ title: 'Being Muslim: A Practical Guide', price: '$14.95', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg', href: '/d/shop/book' },
				{ title: 'The Complete Boxed Set', price: '$85.00', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg', href: '/d/shop/boxed-set' },
				{ title: 'Prayer Reference Cards', price: '$37.50', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg', href: '/d/shop/prayer-cards' },
				{ title: 'Digital Edition (eBook)', price: '$9.00', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png', href: '/d/shop/ebook' }
			] as product}
				<a href={product.href} class="d-product-card">
					<div
						style="
							aspect-ratio: 1;
							overflow: hidden;
							background: #F5F5F5;
							margin-bottom: 14px;
						"
					>
						<img
							src={product.img}
							alt={product.title}
							style="width: 100%; height: 100%; object-fit: cover; display: block;"
						/>
					</div>
					<h3
						class="d-product-title"
						style="
							font-size: 14px;
							font-weight: 500;
							color: #111;
							line-height: 1.35;
							margin: 0 0 4px;
						"
					>
						{product.title}
					</h3>
					<span style="font-size: 14px; font-weight: 300; color: #666;">{product.price}</span>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 56px;">
			<a href="/d/shop" class="d-btn-secondary">See All Store Items</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 5. FAQ                         -->
<!-- ============================== -->
<section class="d-section" style="border-top: 1px solid #E5E5E5;">
	<div class="d-container">
		<div style="max-width: 720px;">
			<h2
				style="
					font-family: 'Inter', sans-serif;
					font-size: clamp(24px, 3.5vw, 36px);
					font-weight: 600;
					color: #111;
					letter-spacing: -0.02em;
					margin: 0 0 48px;
				"
			>
				Frequently Asked Questions
			</h2>

			{#each faqs as faq, i}
				<div class="d-faq-item">
					<button
						class="d-faq-btn"
						onclick={() => toggleFaq(i)}
					>
						<span class="d-faq-q">{faq.q}</span>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#999"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							style="flex-shrink: 0; margin-top: 2px; transition: transform 0.2s; {openFaq === i ? 'transform: rotate(180deg);' : ''}"
						>
							<path d="M6 9l6 6 6-6" />
						</svg>
					</button>
					{#if openFaq === i}
						<p class="d-faq-a">{faq.a}</p>
					{/if}
				</div>
			{/each}

			<div style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 12px;">
				<a href="/d/convert" class="d-btn-primary">Ready to Convert</a>
				<a href="/d/contact" class="d-btn-secondary">Ask a Question</a>
			</div>
		</div>
	</div>
</section>
