<script lang="ts">
	import { ArrowRight, ChevronDown, BookOpen } from 'lucide-svelte';

	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}
</script>

<svelte:head>
	<title>Being Muslim — Your Guide to a Meaningful Islamic Journey</title>
	<meta
		name="description"
		content="Empowering converts and beginners on their Islamic journey through education, community, and support."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO SECTION (Dark)         -->
<!-- ============================== -->
<section class="e-section-dark" style="min-height: 90vh; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden;">
	<!-- Subtle radial glow -->
	<div style="position: absolute; top: -20%; left: 50%; transform: translateX(-50%); width: 800px; height: 800px; background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%); pointer-events: none;"></div>

	<div class="e-container" style="position: relative; z-index: 1; padding-top: 120px; padding-bottom: 80px;">
		<div style="max-width: 720px;">
			<h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(44px, 6vw, 72px); font-weight: 700; line-height: 1.05; letter-spacing: -0.03em; color: #FAFAF8; margin: 0 0 24px;">
				Navigating the
				<span class="gradient-text">Path</span>
				to Islam
			</h1>

			<p style="font-family: 'Inter', sans-serif; font-size: 17px; font-weight: 300; line-height: 1.7; color: rgba(250, 250, 248, 0.5); max-width: 520px; margin: 0 0 40px;">
				Empowering new and beginner Muslims with comprehensive education and support to navigate your journey and deepen your understanding and connection with faith.
			</p>

			<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 16px;">
				<a href="/e/learn" class="e-btn-gradient" style="padding: 14px 32px; font-weight: 600;">
					Start Learning
					<ArrowRight class="h-4 w-4" />
				</a>
				<a href="/e/learn" class="e-btn-outline" style="padding: 14px 32px; font-weight: 600;">
					Explore Resources
				</a>
			</div>

			<!-- Trust bar -->
			<div style="margin-top: 48px; display: flex; align-items: center; gap: 14px;">
				<div style="display: flex;">
					{#each ['#6366F1', '#8B5CF6', '#A78BFA', '#818CF8'] as color}
						<div class="e-trust-avatar" style="background: {color};"></div>
					{/each}
				</div>
				<div style="font-family: 'Inter', sans-serif; font-size: 13px; color: rgba(250, 250, 248, 0.7);">
					<span style="font-weight: 600;">Trusted by</span>
					<span style="color: rgba(250, 250, 248, 0.45);">10,000+ learners</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 2. EXPLORE PATH (Dark)         -->
<!-- ============================== -->
<section class="e-section-dark e-section-padding">
	<div class="e-container">
		<div style="text-align: center; margin-bottom: 48px;">
			<h2 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(28px, 4vw, 40px); font-weight: 600; color: #FAFAF8; margin: 0 0 12px; letter-spacing: -0.02em;">
				Explore your <span class="gradient-text">path</span>
			</h2>
			<p style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 300; color: rgba(250, 250, 248, 0.45); max-width: 480px; margin: 0 auto;">
				Discover Islam through courses, articles, and guides. Whether you're curious, converting, or deepening your practice.
			</p>
		</div>

		<div class="e-grid-explore">
			<!-- Card: Learn -->
			<a href="/e/learn" class="e-gradient-border" style="padding: 32px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none; min-height: 200px;">
				<div>
					<span style="font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(250, 250, 248, 0.35); display: block; margin-bottom: 12px;">Learn</span>
					<p style="font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 500; color: #FAFAF8; margin: 0; line-height: 1.3;">Explore articles, guides, and resources on Islamic faith and practice</p>
				</div>
				<div style="margin-top: 24px; text-align: right;">
					<ArrowRight class="h-5 w-5" style="color: rgba(250, 250, 248, 0.5);" />
				</div>
			</a>

			<!-- Card: Convert -->
			<a href="/e/convert" class="e-gradient-border" style="padding: 32px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none; min-height: 200px;">
				<div>
					<span style="font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(250, 250, 248, 0.35); display: block; margin-bottom: 12px;">Convert</span>
					<p style="font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 500; color: #FAFAF8; margin: 0; line-height: 1.3;">Take the next step on your journey with guidance and support</p>
				</div>
				<div style="margin-top: 24px; text-align: right;">
					<ArrowRight class="h-5 w-5" style="color: rgba(250, 250, 248, 0.5);" />
				</div>
			</a>

			<!-- Card: Buy -->
			<a href="/e/shop" class="e-gradient-border" style="padding: 32px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none; min-height: 200px;">
				<div>
					<span style="font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(250, 250, 248, 0.35); display: block; margin-bottom: 12px;">Buy</span>
					<p style="font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 500; color: #FAFAF8; margin: 0; line-height: 1.3;">Books, prayer cards, and resources for your journey</p>
				</div>
				<div style="margin-top: 24px; text-align: right;">
					<ArrowRight class="h-5 w-5" style="color: rgba(250, 250, 248, 0.5);" />
				</div>
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 3. ARTICLES (Light)            -->
<!-- ============================== -->
<section class="e-section-light e-section-padding">
	<div class="e-container">
		<div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px;">
			<h2 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 600; color: var(--e-text-dark); margin: 0; letter-spacing: -0.02em;">
				Latest Resources
			</h2>
			<a href="/e/learn" style="font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500; color: var(--e-text-dark); text-decoration: none; display: inline-flex; align-items: center; gap: 6px; opacity: 0.7; transition: opacity 0.2s;" onmouseenter={(e) => e.currentTarget.style.opacity = '1'} onmouseleave={(e) => e.currentTarget.style.opacity = '0.7'}>
				View all <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>

		<div class="e-grid-articles">
			{#each [
				{ title: 'Brief Overview of Islam', category: 'Foundations', time: '10 min read', href: '/e/learn/brief-overview-of-islam', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png' },
				{ title: "A Beginner's Guide to Being a Muslim", category: 'New Muslims', time: '12 min read', href: '/e/learn/beginners-guide', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg' },
				{ title: 'Islam and Other Faiths', category: 'Belief', time: '8 min read', href: '/e/learn/islam-and-other-faiths', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/oneGodmanynames.jpeg' }
			] as article}
				<a href={article.href} class="e-article-card">
					<div style="aspect-ratio: 4/3; overflow: hidden; background: #e8e6e0;">
						<img src={article.img} alt={article.title} style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s;" onmouseenter={(e) => e.currentTarget.style.transform = 'scale(1.03)'} onmouseleave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
					</div>
					<div style="padding: 20px;">
						<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
							<span class="e-badge">{article.category}</span>
							<span style="font-family: 'Inter', sans-serif; font-size: 12px; color: var(--e-text-dark-muted);">{article.time}</span>
						</div>
						<h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 17px; font-weight: 500; color: var(--e-text-dark); margin: 0; line-height: 1.35;">{article.title}</h3>
					</div>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 40px;">
			<a href="/e/learn" class="e-btn-outline-dark" style="padding: 12px 28px;">
				Additional Resources <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 4. PRODUCTS (Dark)             -->
<!-- ============================== -->
<section class="e-section-dark e-section-padding">
	<div class="e-container">
		<h2 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 600; color: #FAFAF8; margin: 0 0 40px; text-align: center; letter-spacing: -0.02em;">
			Everything you need to begin
		</h2>

		<div class="e-products-scroll">
			{#each [
				{ title: 'Being Muslim: A Practical Guide', price: '$14.95', badge: 'Bestseller', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg', href: '/e/shop/book' },
				{ title: 'The Complete Boxed Set', price: '$85.00', badge: 'Most Popular', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg', href: '/e/shop/boxed-set' },
				{ title: 'Prayer Reference Cards', price: '$37.50', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg', href: '/e/shop/prayer-cards' },
				{ title: 'Digital Edition (eBook)', price: '$9.00', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png', href: '/e/shop/ebook' }
			] as product}
				<a href={product.href} class="e-product-card">
					<div class="e-product-img" style="position: relative;">
						{#if product.img}
							<img src={product.img} alt={product.title} />
						{:else}
							<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: var(--e-surface);">
								<BookOpen class="h-10 w-10" style="color: rgba(250, 250, 248, 0.2);" />
							</div>
						{/if}
						{#if product.badge}
							<span style="position: absolute; top: 12px; left: 12px; font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600; padding: 4px 10px; border-radius: 999px; background: linear-gradient(135deg, #6366F1, #8B5CF6, #A78BFA); color: #fff; z-index: 2;">{product.badge}</span>
						{/if}
					</div>
					<h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 15px; font-weight: 500; color: #FAFAF8; margin: 0 0 6px; line-height: 1.3;">{product.title}</h3>
					<span class="gradient-text" style="font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600;">{product.price}</span>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 40px;">
			<a href="/e/shop" class="e-btn-outline" style="padding: 12px 28px;">
				See All Store Items <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 5. FAQ (Light)                 -->
<!-- ============================== -->
<section class="e-section-light e-section-padding">
	<div class="e-container">
		<div style="max-width: 800px;">
			<h2 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 600; color: var(--e-text-dark); margin: 0 0 40px; letter-spacing: -0.02em;">
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
				<div class="e-faq-item">
					<button
						class="e-faq-button"
						onclick={() => toggleFaq(i)}
					>
						<span class="e-faq-question">{faq.q}</span>
						<span class="e-faq-chevron {openFaq === i ? 'open' : ''}">
							<ChevronDown class="h-4 w-4 gradient-text" />
						</span>
					</button>
					{#if openFaq === i}
						<p class="e-faq-answer">{faq.a}</p>
					{/if}
				</div>
			{/each}

			<div style="margin-top: 32px; display: flex; flex-wrap: wrap; gap: 12px;">
				<a href="/e/convert" class="e-btn-gradient" style="padding: 12px 28px;">
					Ready to Convert
				</a>
				<a href="/e/contact" class="e-btn-outline-dark" style="padding: 12px 28px;">
					Ask a Question
				</a>
			</div>
		</div>
	</div>
</section>
