<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowRight, BookOpen, Users, Heart, Mail } from 'lucide-svelte';

	let visibleElements = $state<Set<string>>(new Set());
	let scrollY = $state(0);
	let windowHeight = $state(0);

	onMount(() => {
		windowHeight = window.innerHeight;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const id = entry.target.getAttribute('data-reveal');
					if (id && entry.isIntersecting) {
						visibleElements.add(id);
						visibleElements = new Set(visibleElements);
					}
				});
			},
			{ threshold: 0.3 }
		);

		document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));

		const handleScroll = () => {
			scrollY = window.scrollY;
			windowHeight = window.innerHeight;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function vis(id: string): string {
		return visibleElements.has(id) ? 'visible' : '';
	}

	let emailValue = $state('');
</script>

<svelte:head>
	<title>Being Muslim — A Guide for Those Beginning Their Journey</title>
	<meta
		name="description"
		content="Whether you're exploring Islam, newly converted, or reconnecting with your faith — Being Muslim is your guide."
	/>
</svelte:head>

<!-- ============================================================
     SCENE 1: THE OPENING
     ============================================================ -->
<section class="scene" style="height: 300vh; background: var(--bm-black);">
	<div class="scene-sticky" style="flex-direction: column; gap: 24px;">
		<h1
			data-reveal="opening-title"
			class="fade-in {vis('opening-title')}"
			style="
				font-family: var(--bm-font-display);
				font-size: clamp(60px, 12vw, 120px);
				color: var(--bm-amber);
				font-weight: 700;
				letter-spacing: -0.02em;
				line-height: 1;
				text-align: center;
				margin: 0;
			"
		>
			Being Muslim
		</h1>
		<p
			data-reveal="opening-subtitle"
			class="fade-in {vis('opening-subtitle')}"
			style="
				font-family: var(--bm-font-body);
				font-size: clamp(16px, 2.5vw, 24px);
				color: var(--bm-muted);
				text-align: center;
				margin: 0;
				letter-spacing: 0.04em;
				max-width: 500px;
			"
		>
			A guide for those beginning their journey
		</p>
		<div
			data-reveal="opening-scroll"
			class="fade-in {vis('opening-scroll')}"
			style="
				position: absolute;
				bottom: 40px;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 8px;
			"
		>
			<span style="font-size: 12px; color: var(--bm-muted); letter-spacing: 0.15em; text-transform: uppercase;">
				Scroll to begin
			</span>
			<div
				style="
					width: 1px;
					height: 40px;
					background: linear-gradient(to bottom, var(--bm-muted), transparent);
					animation: pulse 2s ease-in-out infinite;
				"
			></div>
		</div>
	</div>
</section>

<!-- ============================================================
     SCENE 2: THE QUESTION
     ============================================================ -->
<section class="scene" style="height: 200vh; background: var(--bm-black);">
	<div class="scene-sticky" style="flex-direction: column; gap: 40px; padding: 0 24px;">
		<p
			data-reveal="q-line-1"
			class="fade-in {vis('q-line-1')}"
			style="
				font-family: var(--bm-font-display);
				font-size: clamp(28px, 5vw, 48px);
				color: var(--bm-white);
				text-align: center;
				margin: 0;
				line-height: 1.3;
				max-width: 800px;
			"
		>
			Whether you're <span style="color: var(--bm-amber);">exploring</span>...
		</p>
		<p
			data-reveal="q-line-2"
			class="fade-in {vis('q-line-2')}"
			style="
				font-family: var(--bm-font-display);
				font-size: clamp(28px, 5vw, 48px);
				color: var(--bm-white);
				text-align: center;
				margin: 0;
				line-height: 1.3;
				max-width: 800px;
			"
		>
			...newly <span style="color: var(--bm-amber);">converted</span>...
		</p>
		<p
			data-reveal="q-line-3"
			class="fade-in {vis('q-line-3')}"
			style="
				font-family: var(--bm-font-display);
				font-size: clamp(28px, 5vw, 48px);
				color: var(--bm-white);
				text-align: center;
				margin: 0;
				line-height: 1.3;
				max-width: 800px;
			"
		>
			...or finding your way <span style="color: var(--bm-amber);">back</span>...
		</p>
		<p
			data-reveal="q-line-4"
			class="fade-in {vis('q-line-4')}"
			style="
				font-family: var(--bm-font-display);
				font-size: clamp(28px, 5vw, 48px);
				color: var(--bm-white);
				text-align: center;
				margin: 0;
				line-height: 1.3;
				max-width: 800px;
			"
		>
			there is a place for you <span style="color: var(--bm-amber);">here</span>.
		</p>
	</div>
</section>

<!-- Sentinel spacers for staggered reveals -->
<div data-reveal="q-line-1" style="height: 0; margin-top: -180vh;"></div>
<div data-reveal="q-line-2" style="height: 0; margin-top: 50vh;"></div>
<div data-reveal="q-line-3" style="height: 0; margin-top: 50vh;"></div>
<div data-reveal="q-line-4" style="height: 0; margin-top: 50vh;"></div>
<div style="height: 30vh;"></div>

<!-- ============================================================
     SCENE 3: THE BOOK
     ============================================================ -->
<section
	class="scene"
	style="
		height: 250vh;
		background: linear-gradient(to bottom, var(--bm-black) 0%, var(--bm-cream) 30%, var(--bm-cream) 100%);
	"
>
	<div class="scene-sticky" style="flex-direction: column; gap: 32px; padding: 0 24px;">
		<div
			data-reveal="book-image"
			class="scale-in {vis('book-image')}"
			style="
				display: flex;
				justify-content: center;
			"
		>
			<img
				src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg"
				alt="Being Muslim: A Practical Guide"
				style="
					max-width: min(320px, 60vw);
					height: auto;
					border-radius: 4px;
					box-shadow: 0 40px 80px rgba(0,0,0,0.3);
				"
			/>
		</div>
		<div style="text-align: center; max-width: 600px;">
			<h2
				data-reveal="book-title"
				class="fade-in {vis('book-title')}"
				style="
					font-family: var(--bm-font-display);
					font-size: clamp(24px, 4vw, 40px);
					color: var(--bm-black);
					margin: 0 0 12px;
					font-weight: 700;
					line-height: 1.2;
				"
			>
				Being Muslim: A Practical Guide
			</h2>
			<p
				data-reveal="book-author"
				class="fade-in {vis('book-author')}"
				style="
					font-family: var(--bm-font-body);
					font-size: 16px;
					color: rgba(10,10,10,0.6);
					margin: 0 0 24px;
				"
			>
				by Asad Tarsin
			</p>
			<div
				data-reveal="book-stats"
				class="fade-in {vis('book-stats')}"
				style="
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;
					gap: 8px 24px;
					margin-bottom: 32px;
				"
			>
				<span style="font-size: 14px; color: rgba(10,10,10,0.5); font-family: var(--bm-font-body);">
					10,000+ communities
				</span>
				<span style="color: rgba(10,10,10,0.2);">·</span>
				<span style="font-size: 14px; color: rgba(10,10,10,0.5); font-family: var(--bm-font-body);">
					50+ countries
				</span>
				<span style="color: rgba(10,10,10,0.2);">·</span>
				<span style="font-size: 14px; color: rgba(10,10,10,0.5); font-family: var(--bm-font-body);">
					Bestseller
				</span>
			</div>
			<a
				data-reveal="book-cta"
				class="fade-in {vis('book-cta')}"
				href="/i/shop/"
				style="
					display: inline-flex;
					align-items: center;
					gap: 8px;
					background: var(--bm-amber);
					color: var(--bm-black);
					font-family: var(--bm-font-body);
					font-size: 15px;
					font-weight: 600;
					padding: 14px 32px;
					border-radius: 50px;
					text-decoration: none;
					transition: transform 0.3s ease, box-shadow 0.3s ease;
				"
			>
				Get the Book <ArrowRight size={16} />
			</a>
		</div>
	</div>
</section>

<!-- ============================================================
     SCENE 4: THE PATHS
     ============================================================ -->
<section class="scene" style="height: 300vh; background: var(--bm-cream);">
	<div class="scene-sticky" style="flex-direction: column; gap: 0; padding: 0 24px;">
		<h2
			data-reveal="paths-heading"
			class="fade-in {vis('paths-heading')}"
			style="
				font-family: var(--bm-font-display);
				font-size: clamp(32px, 5vw, 56px);
				color: var(--bm-black);
				font-weight: 700;
				text-align: center;
				margin: 0 0 60px;
				line-height: 1.15;
			"
		>
			Three paths, one journey
		</h2>

		<div style="display: flex; flex-direction: column; gap: 48px; max-width: 640px; width: 100%;">
			<!-- Path 1 -->
			<div
				data-reveal="path-1"
				class="fade-in {vis('path-1')}"
				style="display: flex; gap: 20px; align-items: flex-start;"
			>
				<span
					style="
						font-family: var(--bm-font-display);
						font-size: clamp(36px, 5vw, 56px);
						font-weight: 700;
						color: var(--bm-amber);
						line-height: 1;
						flex-shrink: 0;
					"
				>01</span>
				<div>
					<h3
						style="
							font-family: var(--bm-font-display);
							font-size: clamp(20px, 3vw, 28px);
							color: var(--bm-black);
							font-weight: 600;
							margin: 0 0 8px;
						"
					>Exploring Islam</h3>
					<p
						style="
							font-family: var(--bm-font-body);
							font-size: 15px;
							color: rgba(10,10,10,0.6);
							line-height: 1.6;
							margin: 0;
						"
					>
						You have questions. Maybe you've been reading, watching, or just wondering.
						Start here — no pressure, no judgment, just honest answers.
					</p>
				</div>
			</div>

			<!-- Path 2 -->
			<div
				data-reveal="path-2"
				class="fade-in {vis('path-2')}"
				style="display: flex; gap: 20px; align-items: flex-start;"
			>
				<span
					style="
						font-family: var(--bm-font-display);
						font-size: clamp(36px, 5vw, 56px);
						font-weight: 700;
						color: var(--bm-amber);
						line-height: 1;
						flex-shrink: 0;
					"
				>02</span>
				<div>
					<h3
						style="
							font-family: var(--bm-font-display);
							font-size: clamp(20px, 3vw, 28px);
							color: var(--bm-black);
							font-weight: 600;
							margin: 0 0 8px;
						"
					>Recently Converted</h3>
					<p
						style="
							font-family: var(--bm-font-body);
							font-size: 15px;
							color: rgba(10,10,10,0.6);
							line-height: 1.6;
							margin: 0;
						"
					>
						You've taken the step. Now the real journey begins — learning to pray,
						building community, and growing in your new faith day by day.
					</p>
				</div>
			</div>

			<!-- Path 3 -->
			<div
				data-reveal="path-3"
				class="fade-in {vis('path-3')}"
				style="display: flex; gap: 20px; align-items: flex-start;"
			>
				<span
					style="
						font-family: var(--bm-font-display);
						font-size: clamp(36px, 5vw, 56px);
						font-weight: 700;
						color: var(--bm-amber);
						line-height: 1;
						flex-shrink: 0;
					"
				>03</span>
				<div>
					<h3
						style="
							font-family: var(--bm-font-display);
							font-size: clamp(20px, 3vw, 28px);
							color: var(--bm-black);
							font-weight: 600;
							margin: 0 0 8px;
						"
					>Reconnecting with Faith</h3>
					<p
						style="
							font-family: var(--bm-font-body);
							font-size: 15px;
							color: rgba(10,10,10,0.6);
							line-height: 1.6;
							margin: 0;
						"
					>
						Life pulled you away. That's okay. Faith doesn't expire.
						Come back at your own pace — we'll be here.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================================================
     SCENE 5: LEARNING
     ============================================================ -->
<section
	class="scene"
	style="
		height: 200vh;
		background: linear-gradient(to bottom, var(--bm-cream) 0%, var(--bm-black) 20%, var(--bm-black) 100%);
	"
>
	<div class="scene-sticky" style="flex-direction: column; gap: 48px; padding: 0 24px;">
		<h2
			data-reveal="learn-heading"
			class="fade-in {vis('learn-heading')}"
			style="
				font-family: var(--bm-font-display);
				font-size: clamp(32px, 5vw, 56px);
				color: var(--bm-white);
				font-weight: 700;
				text-align: center;
				margin: 0;
				line-height: 1.15;
			"
		>
			Learn at your own pace
		</h2>

		<div style="display: flex; flex-direction: column; gap: 36px; max-width: 520px; width: 100%;">
			<div
				data-reveal="course-1"
				class="fade-in {vis('course-1')}"
				style="border-left: 2px solid var(--bm-amber); padding-left: 24px;"
			>
				<h3
					style="
						font-family: var(--bm-font-display);
						font-size: clamp(20px, 3vw, 28px);
						color: var(--bm-white);
						font-weight: 600;
						margin: 0 0 4px;
					"
				>Foundations of Faith</h3>
				<p style="font-family: var(--bm-font-body); font-size: 14px; color: var(--bm-muted); margin: 0;">
					24 lessons · Asad Tarsin
				</p>
			</div>

			<div
				data-reveal="course-2"
				class="fade-in {vis('course-2')}"
				style="border-left: 2px solid var(--bm-amber); padding-left: 24px;"
			>
				<h3
					style="
						font-family: var(--bm-font-display);
						font-size: clamp(20px, 3vw, 28px);
						color: var(--bm-white);
						font-weight: 600;
						margin: 0 0 4px;
					"
				>Prayer Mastery</h3>
				<p style="font-family: var(--bm-font-body); font-size: 14px; color: var(--bm-muted); margin: 0;">
					16 lessons · Imam Abdullah
				</p>
			</div>

			<div
				data-reveal="course-3"
				class="fade-in {vis('course-3')}"
				style="border-left: 2px solid var(--bm-amber); padding-left: 24px;"
			>
				<h3
					style="
						font-family: var(--bm-font-display);
						font-size: clamp(20px, 3vw, 28px);
						color: var(--bm-white);
						font-weight: 600;
						margin: 0 0 4px;
					"
				>Your Quran Journey</h3>
				<p style="font-family: var(--bm-font-body); font-size: 14px; color: var(--bm-muted); margin: 0;">
					32 lessons · Ustadha Maryam
				</p>
			</div>
		</div>

		<a
			data-reveal="learn-cta"
			class="fade-in {vis('learn-cta')}"
			href="/i/courses/"
			style="
				display: inline-flex;
				align-items: center;
				gap: 8px;
				border: 1px solid var(--bm-amber);
				color: var(--bm-amber);
				background: transparent;
				font-family: var(--bm-font-body);
				font-size: 15px;
				font-weight: 600;
				padding: 14px 32px;
				border-radius: 50px;
				text-decoration: none;
				transition: background 0.3s ease, color 0.3s ease;
			"
		>
			<BookOpen size={16} /> Browse Courses
		</a>
	</div>
</section>

<!-- ============================================================
     SCENE 6: COMMUNITY
     ============================================================ -->
<section class="scene" style="height: 200vh; background: var(--bm-black);">
	<div class="scene-sticky" style="flex-direction: column; gap: 16px; padding: 0 24px;">
		<span
			data-reveal="community-number"
			class="fade-in {vis('community-number')}"
			style="
				font-family: var(--bm-font-display);
				font-size: clamp(72px, 14vw, 140px);
				font-weight: 700;
				color: var(--bm-amber);
				line-height: 1;
				text-align: center;
			"
		>
			2,500+
		</span>
		<h2
			data-reveal="community-label"
			class="fade-in {vis('community-label')}"
			style="
				font-family: var(--bm-font-display);
				font-size: clamp(24px, 4vw, 40px);
				color: var(--bm-white);
				font-weight: 600;
				text-align: center;
				margin: 0 0 32px;
			"
		>
			Muslims learning together
		</h2>

		<div
			data-reveal="community-stats"
			class="fade-in {vis('community-stats')}"
			style="
				display: flex;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;
				gap: 12px 40px;
				margin-bottom: 40px;
			"
		>
			<div style="text-align: center;">
				<span style="font-family: var(--bm-font-display); font-size: 28px; font-weight: 700; color: var(--bm-white);">1,200+</span>
				<p style="font-size: 13px; color: var(--bm-muted); margin: 4px 0 0;">discussions</p>
			</div>
			<div style="text-align: center;">
				<span style="font-family: var(--bm-font-display); font-size: 28px; font-weight: 700; color: var(--bm-white);">50+</span>
				<p style="font-size: 13px; color: var(--bm-muted); margin: 4px 0 0;">countries</p>
			</div>
		</div>

		<a
			data-reveal="community-cta"
			class="fade-in {vis('community-cta')}"
			href="/i/community/"
			style="
				display: inline-flex;
				align-items: center;
				gap: 8px;
				background: var(--bm-amber);
				color: var(--bm-black);
				font-family: var(--bm-font-body);
				font-size: 15px;
				font-weight: 600;
				padding: 14px 32px;
				border-radius: 50px;
				text-decoration: none;
				transition: transform 0.3s ease;
			"
		>
			<Users size={16} /> Join the Community
		</a>
	</div>
</section>

<!-- ============================================================
     SCENE 7: THE PRODUCTS
     ============================================================ -->
<section
	class="scene"
	style="
		height: 200vh;
		background: linear-gradient(to bottom, var(--bm-black) 0%, var(--bm-cream) 15%, var(--bm-cream) 100%);
	"
>
	<div class="scene-sticky" style="flex-direction: column; gap: 48px; padding: 0 24px;">
		<h2
			data-reveal="products-heading"
			class="fade-in {vis('products-heading')}"
			style="
				font-family: var(--bm-font-display);
				font-size: clamp(32px, 5vw, 56px);
				color: var(--bm-black);
				font-weight: 700;
				text-align: center;
				margin: 0;
				line-height: 1.15;
			"
		>
			Everything you need
		</h2>

		<div
			style="
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				gap: 32px;
				max-width: 800px;
				width: 100%;
			"
		>
			<!-- Product 1: Book -->
			<div
				data-reveal="product-1"
				class="fade-in {vis('product-1')}"
				style="text-align: center; width: 160px;"
			>
				<div
					style="
						width: 140px;
						height: 200px;
						margin: 0 auto 16px;
						border-radius: 4px;
						overflow: hidden;
						box-shadow: 0 8px 30px rgba(0,0,0,0.15);
					"
				>
					<img
						src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg"
						alt="Being Muslim Book"
						style="width: 100%; height: 100%; object-fit: cover;"
					/>
				</div>
				<h3 style="font-family: var(--bm-font-display); font-size: 16px; color: var(--bm-black); margin: 0 0 4px; font-weight: 600;">
					Being Muslim
				</h3>
				<p style="font-family: var(--bm-font-body); font-size: 14px; color: rgba(10,10,10,0.5); margin: 0;">
					$16.99
				</p>
			</div>

			<!-- Product 2: Boxed Set -->
			<div
				data-reveal="product-2"
				class="fade-in {vis('product-2')}"
				style="text-align: center; width: 160px;"
			>
				<div
					style="
						width: 140px;
						height: 200px;
						margin: 0 auto 16px;
						border-radius: 4px;
						overflow: hidden;
						box-shadow: 0 8px 30px rgba(0,0,0,0.15);
						background: linear-gradient(135deg, #E8A838 0%, #d4952e 100%);
						display: flex;
						align-items: center;
						justify-content: center;
					"
				>
					<span style="font-family: var(--bm-font-display); font-size: 14px; color: var(--bm-black); text-align: center; padding: 12px; font-weight: 600;">
						Boxed Set
					</span>
				</div>
				<h3 style="font-family: var(--bm-font-display); font-size: 16px; color: var(--bm-black); margin: 0 0 4px; font-weight: 600;">
					The Boxed Set
				</h3>
				<p style="font-family: var(--bm-font-body); font-size: 14px; color: rgba(10,10,10,0.5); margin: 0;">
					$49.99
				</p>
			</div>

			<!-- Product 3: Prayer Cards -->
			<div
				data-reveal="product-3"
				class="fade-in {vis('product-3')}"
				style="text-align: center; width: 160px;"
			>
				<div
					style="
						width: 140px;
						height: 200px;
						margin: 0 auto 16px;
						border-radius: 4px;
						overflow: hidden;
						box-shadow: 0 8px 30px rgba(0,0,0,0.15);
						background: linear-gradient(135deg, var(--bm-cream) 0%, #e8dfd0 100%);
						display: flex;
						align-items: center;
						justify-content: center;
					"
				>
					<span style="font-family: var(--bm-font-display); font-size: 14px; color: var(--bm-black); text-align: center; padding: 12px; font-weight: 600;">
						Prayer Cards
					</span>
				</div>
				<h3 style="font-family: var(--bm-font-display); font-size: 16px; color: var(--bm-black); margin: 0 0 4px; font-weight: 600;">
					Prayer Cards
				</h3>
				<p style="font-family: var(--bm-font-body); font-size: 14px; color: rgba(10,10,10,0.5); margin: 0;">
					$12.99
				</p>
			</div>

			<!-- Product 4: eBook -->
			<div
				data-reveal="product-4"
				class="fade-in {vis('product-4')}"
				style="text-align: center; width: 160px;"
			>
				<div
					style="
						width: 140px;
						height: 200px;
						margin: 0 auto 16px;
						border-radius: 4px;
						overflow: hidden;
						box-shadow: 0 8px 30px rgba(0,0,0,0.15);
						background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
						display: flex;
						align-items: center;
						justify-content: center;
					"
				>
					<span style="font-family: var(--bm-font-display); font-size: 14px; color: var(--bm-white); text-align: center; padding: 12px; font-weight: 600;">
						eBook
					</span>
				</div>
				<h3 style="font-family: var(--bm-font-display); font-size: 16px; color: var(--bm-black); margin: 0 0 4px; font-weight: 600;">
					eBook Edition
				</h3>
				<p style="font-family: var(--bm-font-body); font-size: 14px; color: rgba(10,10,10,0.5); margin: 0;">
					$9.99
				</p>
			</div>
		</div>

		<a
			data-reveal="shop-cta"
			class="fade-in {vis('shop-cta')}"
			href="/i/shop/"
			style="
				display: inline-flex;
				align-items: center;
				gap: 8px;
				background: var(--bm-amber);
				color: var(--bm-black);
				font-family: var(--bm-font-body);
				font-size: 15px;
				font-weight: 600;
				padding: 14px 32px;
				border-radius: 50px;
				text-decoration: none;
				transition: transform 0.3s ease;
			"
		>
			Visit the Shop <ArrowRight size={16} />
		</a>
	</div>
</section>

<!-- ============================================================
     SCENE 8: SUPPORT
     ============================================================ -->
<section
	class="scene"
	style="
		height: 150vh;
		background: linear-gradient(to bottom, var(--bm-cream) 0%, var(--bm-black) 15%, var(--bm-black) 100%);
	"
>
	<div class="scene-sticky" style="flex-direction: column; gap: 16px; padding: 0 24px;">
		<span
			data-reveal="support-number"
			class="fade-in {vis('support-number')}"
			style="
				font-family: var(--bm-font-display);
				font-size: clamp(72px, 14vw, 140px);
				font-weight: 700;
				color: var(--bm-amber);
				line-height: 1;
				text-align: center;
			"
		>
			3,247
		</span>
		<h2
			data-reveal="support-label"
			class="fade-in {vis('support-label')}"
			style="
				font-family: var(--bm-font-display);
				font-size: clamp(20px, 3vw, 32px);
				color: var(--bm-white);
				font-weight: 600;
				text-align: center;
				margin: 0 0 24px;
			"
		>
			boxed sets sponsored
		</h2>

		<div
			data-reveal="support-stats"
			class="fade-in {vis('support-stats')}"
			style="
				display: flex;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;
				gap: 8px 24px;
				margin-bottom: 16px;
			"
		>
			<span style="font-size: 14px; color: var(--bm-muted);">520 communities</span>
			<span style="color: rgba(255,255,255,0.2);">·</span>
			<span style="font-size: 14px; color: var(--bm-muted);">52 countries</span>
		</div>

		<p
			data-reveal="support-text"
			class="fade-in {vis('support-text')}"
			style="
				font-family: var(--bm-font-body);
				font-size: clamp(16px, 2vw, 20px);
				color: rgba(255,255,255,0.7);
				text-align: center;
				margin: 0 0 32px;
				max-width: 400px;
			"
		>
			Help someone begin their journey
		</p>

		<a
			data-reveal="support-cta"
			class="fade-in {vis('support-cta')}"
			href="/i/give/"
			style="
				display: inline-flex;
				align-items: center;
				gap: 8px;
				background: var(--bm-amber);
				color: var(--bm-black);
				font-family: var(--bm-font-body);
				font-size: 15px;
				font-weight: 600;
				padding: 14px 32px;
				border-radius: 50px;
				text-decoration: none;
				transition: transform 0.3s ease;
			"
		>
			<Heart size={16} /> Support the Mission
		</a>
	</div>
</section>

<!-- ============================================================
     SCENE 9: CLOSING
     ============================================================ -->
<section class="scene" style="height: 150vh; background: var(--bm-black);">
	<div class="scene-sticky" style="flex-direction: column; gap: 32px; padding: 0 24px;">
		<h2
			data-reveal="closing-heading"
			class="fade-in {vis('closing-heading')}"
			style="
				font-family: var(--bm-font-display);
				font-size: clamp(28px, 5vw, 52px);
				color: var(--bm-white);
				font-weight: 700;
				text-align: center;
				margin: 0;
				line-height: 1.3;
			"
		>
			Your journey begins with a<br />
			<span
				style="
					position: relative;
					display: inline-block;
				"
			>
				single step
				<span
					style="
						position: absolute;
						bottom: -4px;
						left: 0;
						right: 0;
						height: 3px;
						background: var(--bm-amber);
						border-radius: 2px;
					"
				></span>
			</span>
		</h2>

		<div
			data-reveal="closing-ctas"
			class="fade-in {vis('closing-ctas')}"
			style="
				display: flex;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;
				gap: 16px;
				margin-bottom: 24px;
			"
		>
			<a
				href="/i/courses/"
				style="
					display: inline-flex;
					align-items: center;
					gap: 8px;
					background: var(--bm-amber);
					color: var(--bm-black);
					font-family: var(--bm-font-body);
					font-size: 15px;
					font-weight: 600;
					padding: 14px 32px;
					border-radius: 50px;
					text-decoration: none;
					transition: transform 0.3s ease;
				"
			>
				Start Learning <ArrowRight size={16} />
			</a>
			<a
				href="/i/shop/"
				style="
					display: inline-flex;
					align-items: center;
					gap: 8px;
					border: 1px solid var(--bm-white);
					color: var(--bm-white);
					background: transparent;
					font-family: var(--bm-font-body);
					font-size: 15px;
					font-weight: 600;
					padding: 14px 32px;
					border-radius: 50px;
					text-decoration: none;
					transition: background 0.3s ease, color 0.3s ease;
				"
			>
				Get the Book
			</a>
		</div>

		<!-- Newsletter signup -->
		<div
			data-reveal="closing-newsletter"
			class="fade-in {vis('closing-newsletter')}"
			style="
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 12px;
				max-width: 400px;
				width: 100%;
			"
		>
			<p style="font-size: 13px; color: var(--bm-muted); margin: 0; text-align: center;">
				Get weekly reflections and resources in your inbox
			</p>
			<form
				onsubmit={(e) => e.preventDefault()}
				style="
					display: flex;
					width: 100%;
					max-width: 360px;
					border-radius: 50px;
					overflow: hidden;
					border: 1px solid rgba(255,255,255,0.15);
				"
			>
				<input
					type="email"
					placeholder="Your email"
					bind:value={emailValue}
					style="
						flex: 1;
						border: none;
						background: transparent;
						color: var(--bm-white);
						font-family: var(--bm-font-body);
						font-size: 14px;
						padding: 12px 20px;
						outline: none;
					"
				/>
				<button
					type="submit"
					style="
						background: var(--bm-amber);
						border: none;
						color: var(--bm-black);
						padding: 12px 20px;
						cursor: pointer;
						display: flex;
						align-items: center;
					"
					aria-label="Subscribe"
				>
					<Mail size={16} />
				</button>
			</form>
		</div>
	</div>
</section>

<style>
	@keyframes pulse {
		0%,
		100% {
			opacity: 0.4;
		}
		50% {
			opacity: 1;
		}
	}

	/* Hover states for buttons */
	:global(.bm-root a:hover) {
		transform: translateY(-1px);
	}
</style>
