<script lang="ts">
	import { ArrowRight, Compass, Sunrise, RefreshCw, Star, Play, Users, MessageCircle, Heart, Mail } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Being Muslim — Every new Muslim deserves a guide</title>
	<meta name="description" content="The Being Muslim Project supports new Muslims with beautiful resources, a welcoming community, and guided learning. Sponsor a boxed set today." />
</svelte:head>

<!-- ============================================
     SECTION 1: HERO — Full-bleed image with overlay
     ============================================ -->
<section style="position: relative; height: 100vh; min-height: 600px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
	<!-- Background image -->
	<div style="position: absolute; inset: 0; background: url('/images/hero-bg.jpg') center/cover no-repeat;"></div>
	<!-- Warm gradient overlay -->
	<div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(30,30,30,0.4), rgba(30,30,30,0.7));"></div>

	<!-- Content -->
	<div style="position: relative; z-index: 1; text-align: center; padding: 0 24px; max-width: 700px;">
		<p class="bm-label" style="color: #C9A84C; margin-bottom: 20px;">
			THE BEING MUSLIM PROJECT
		</p>
		<h1 style="font-family: var(--bm-font-serif); font-size: clamp(36px, 6vw, 64px); color: #fff; line-height: 1.15; margin: 0 0 20px;">
			Every new Muslim deserves a guide
		</h1>
		<p style="font-size: 18px; color: rgba(255,255,255,0.8); line-height: 1.6; max-width: 560px; margin: 0 auto 36px;">
			We've put the Being Muslim boxed set into the hands of 10,000+ communities across 50+ countries. Your support makes it possible.
		</p>
		<div style="display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap;">
			<a href="/l" class="bm-btn-gold" style="font-size: 16px; padding: 15px 34px;">
				Sponsor a Set
			</a>
			<a href="/l" class="bm-btn-outline" style="font-size: 16px; padding: 15px 34px;">
				Start Learning
			</a>
		</div>
	</div>

	<!-- Trust bar at bottom -->
	<div style="position: absolute; bottom: 0; left: 0; right: 0; text-align: center; padding: 18px 24px; background: rgba(0,0,0,0.15); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);">
		<p style="font-size: 13px; color: rgba(255,255,255,0.6); letter-spacing: 0.03em;">
			10,000+ communities &middot; 50+ countries &middot; 4.9&#9733; average rating
		</p>
	</div>
</section>

<!-- ============================================
     SECTION 2: IMPACT STATS
     ============================================ -->
<section style="background: var(--bm-warm-gray); padding: 64px 0;">
	<div class="bm-container">
		<div class="bm-grid-stats" style="text-align: center;">
			{#each [
				{ number: '10,000+', label: 'Communities Reached' },
				{ number: '3,247', label: 'Sets Sponsored' },
				{ number: '50+', label: 'Countries' },
				{ number: '4.9\u2605', label: 'Average Rating' }
			] as stat}
				<div>
					<p style="font-family: var(--bm-font-serif); font-size: clamp(36px, 4vw, 48px); color: var(--bm-burgundy); margin: 0 0 8px;">{stat.number}</p>
					<p style="font-size: 14px; color: var(--bm-muted); margin: 0;">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================================
     SECTION 3: THE MISSION — Centered text
     ============================================ -->
<section class="bm-section">
	<div class="bm-container" style="max-width: 760px; text-align: center;">
		<h2 style="font-family: var(--bm-font-serif); font-size: clamp(32px, 4vw, 40px); color: var(--bm-dark); margin: 0 0 32px;">
			What is Being Muslim?
		</h2>
		<p style="font-size: 17px; line-height: 1.7; color: var(--bm-muted); margin: 0 0 24px; text-align: left;">
			Being Muslim is a comprehensive resource created by Dr. Asad Tarsin to help new Muslims navigate the beautiful, sometimes overwhelming, early days of their faith journey. The book covers everything from the foundations of Islamic belief to practical daily worship, presented with warmth, clarity, and deep scholarly care.
		</p>
		<p style="font-size: 17px; line-height: 1.7; color: var(--bm-muted); margin: 0 0 24px; text-align: left;">
			The Being Muslim Boxed Set goes further, pairing the book with a guided journal, prayer cards, and a curated collection of essentials, a complete companion for new Muslims. Through our sponsorship program, thousands of these sets have been placed in mosques, Islamic centers, and communities around the world, ensuring that every new Muslim has access to guidance when they need it most.
		</p>
		<p style="font-size: 17px; line-height: 1.7; color: var(--bm-muted); margin: 0 0 36px; text-align: left;">
			Our mission is simple: no new Muslim should feel alone. Whether through our book, our online courses, or our global community, we are here to walk beside you.
		</p>
		<a href="/l" class="bm-link-arrow" style="color: var(--bm-burgundy); font-size: 16px; font-weight: 500;">
			Learn About Our Mission <ArrowRight style="width: 18px; height: 18px;" />
		</a>
	</div>
</section>

<!-- ============================================
     SECTION 4: PRODUCTS — The Collection
     ============================================ -->
<section style="background: var(--bm-warm-gray);" class="bm-section">
	<div class="bm-container">
		<h2 style="font-family: var(--bm-font-serif); font-size: clamp(30px, 4vw, 38px); color: var(--bm-dark); text-align: center; margin: 0 0 48px;">
			Resources for your journey
		</h2>
		<div class="bm-grid-4" style="gap: 28px;">
			{#each [
				{ name: 'Being Muslim', price: '$14.95', image: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg' },
				{ name: 'The Boxed Set', price: '$85.00', image: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg' },
				{ name: 'Prayer Cards', price: '$37.50', image: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg' },
				{ name: 'eBook', price: '$9.00', image: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png' }
			] as product}
				<a href="/l" style="text-decoration: none;" class="bm-card-hover">
					<div style="background: #fff; border-radius: 12px; overflow: hidden;">
						<div style="aspect-ratio: 1/1; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 20px; background: #fff;" class="bm-img-zoom">
							<img
								src={product.image}
								alt={product.name}
								style="max-width: 100%; max-height: 100%; object-fit: contain;"
								loading="lazy"
							/>
						</div>
						<div style="padding: 16px 20px 20px;">
							<p style="font-family: var(--bm-font-serif); font-size: 18px; color: var(--bm-dark); margin: 0 0 6px;">{product.name}</p>
							<p style="font-size: 15px; color: var(--bm-muted); margin: 0;">{product.price}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
		<div style="text-align: center; margin-top: 40px;">
			<a href="/l" class="bm-link-arrow" style="color: var(--bm-burgundy); font-size: 16px; font-weight: 500;">
				Browse the Shop <ArrowRight style="width: 18px; height: 18px;" />
			</a>
		</div>
	</div>
</section>

<!-- ============================================
     SECTION 5: PATHS — Three audience paths
     ============================================ -->
<section class="bm-section">
	<div class="bm-container">
		<h2 style="font-family: var(--bm-font-serif); font-size: clamp(30px, 4vw, 38px); color: var(--bm-dark); text-align: center; margin: 0 0 48px;">
			Wherever you are, there's a path for you
		</h2>
		<div class="bm-grid-3" style="gap: 28px;">
			{#each [
				{
					icon: Compass,
					title: "I'm Exploring Islam",
					description: 'Curious about Islam? Start here with accessible introductions, common questions answered, and a welcoming space to learn at your own pace.',
					link: 'Learn More'
				},
				{
					icon: Sunrise,
					title: 'I Recently Converted',
					description: 'Welcome to the faith. Find step-by-step guidance on prayer, community, and building your new life as a Muslim with confidence and joy.',
					link: 'Get Started'
				},
				{
					icon: RefreshCw,
					title: "I'm Reconnecting with Faith",
					description: 'Coming back to your practice? Rediscover the beauty of Islam with resources designed for those returning to their spiritual roots.',
					link: 'Explore Resources'
				}
			] as path}
				<a href="/l" style="text-decoration: none;" class="path-card">
					<div style="background: #fff; border: 1px solid var(--bm-border); border-radius: 12px; padding: 32px; transition: all 0.3s;">
						<div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(139,46,54,0.08); display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
							<svelte:component this={path.icon} style="width: 24px; height: 24px; color: #8B2E36;" />
						</div>
						<h3 style="font-family: var(--bm-font-serif); font-size: 22px; color: var(--bm-dark); margin: 0 0 12px;">{path.title}</h3>
						<p style="font-size: 15px; line-height: 1.6; color: var(--bm-muted); margin: 0 0 20px;">{path.description}</p>
						<span style="display: inline-flex; align-items: center; gap: 6px; font-size: 15px; font-weight: 500; color: var(--bm-burgundy);">
							{path.link} <ArrowRight style="width: 16px; height: 16px;" />
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================================
     SECTION 6: TESTIMONIAL — Single powerful quote
     ============================================ -->
<section style="background: var(--bm-burgundy); padding: 80px 0;">
	<div class="bm-container" style="max-width: 740px; text-align: center;">
		<!-- Stars -->
		<div style="display: flex; justify-content: center; gap: 4px; margin-bottom: 24px;">
			{#each Array(5) as _}
				<Star style="width: 20px; height: 20px; color: #C9A84C; fill: #C9A84C;" />
			{/each}
		</div>
		<!-- Decorative quote mark -->
		<div style="font-family: var(--bm-font-serif); font-size: 72px; color: rgba(201,168,76,0.4); line-height: 1; margin-bottom: -16px;">&ldquo;</div>
		<!-- Quote -->
		<p style="font-family: var(--bm-font-serif); font-size: clamp(20px, 3vw, 26px); color: #fff; font-style: italic; line-height: 1.5; margin: 0 0 28px;">
			This book was the first thing I received after taking my shahada. It made me feel seen, supported, and less alone. I carry it everywhere, it's become my companion on this journey.
		</p>
		<!-- Attribution -->
		<p style="font-size: 15px; color: rgba(255,255,255,0.7); margin: 0;">
			<strong style="color: rgba(255,255,255,0.9); font-weight: 600;">Amina R.</strong> &middot; New Muslim, Chicago
		</p>
	</div>
</section>

<!-- ============================================
     SECTION 7: COURSES — Learning preview
     ============================================ -->
<section class="bm-section">
	<div class="bm-container">
		<h2 style="font-family: var(--bm-font-serif); font-size: clamp(30px, 4vw, 38px); color: var(--bm-dark); text-align: center; margin: 0 0 16px;">
			Learn at your own pace
		</h2>
		<p style="font-size: 17px; color: var(--bm-muted); text-align: center; max-width: 520px; margin: 0 auto 48px;">
			Guided courses designed for new Muslims, taught by trusted scholars and community leaders.
		</p>
		<div class="bm-grid-3" style="gap: 28px;">
			{#each [
				{
					title: 'Foundations of Faith',
					instructor: 'Dr. Asad Tarsin',
					lessons: 12,
					image: 'https://images.unsplash.com/photo-1585036156171-384164a8c821?w=600&h=400&fit=crop'
				},
				{
					title: 'Learning to Pray',
					instructor: 'Ustadha Maryam Amir',
					lessons: 8,
					image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&h=400&fit=crop'
				},
				{
					title: 'Understanding the Quran',
					instructor: 'Imam Omar Suleiman',
					lessons: 15,
					image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&h=400&fit=crop'
				}
			] as course}
				<a href="/l" style="text-decoration: none;" class="bm-card-hover">
					<div style="background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid var(--bm-border);">
						<div style="position: relative; aspect-ratio: 3/2; overflow: hidden;" class="bm-img-zoom">
							<img
								src={course.image}
								alt={course.title}
								style="width: 100%; height: 100%; object-fit: cover;"
								loading="lazy"
							/>
							<!-- Play button overlay -->
							<div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.15); transition: background 0.3s;">
								<div style="width: 52px; height: 52px; border-radius: 50%; background: rgba(255,255,255,0.95); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
									<Play style="width: 22px; height: 22px; color: #8B2E36; margin-left: 2px;" />
								</div>
							</div>
						</div>
						<div style="padding: 20px;">
							<h3 style="font-family: var(--bm-font-serif); font-size: 20px; color: var(--bm-dark); margin: 0 0 8px;">{course.title}</h3>
							<p style="font-size: 14px; color: var(--bm-muted); margin: 0;">{course.instructor} &middot; {course.lessons} lessons</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
		<div style="text-align: center; margin-top: 40px;">
			<a href="/l" class="bm-link-arrow" style="color: var(--bm-burgundy); font-size: 16px; font-weight: 500;">
				Browse Courses <ArrowRight style="width: 18px; height: 18px;" />
			</a>
		</div>
	</div>
</section>

<!-- ============================================
     SECTION 8: COMMUNITY — Social proof
     ============================================ -->
<section style="background: var(--bm-warm-gray);" class="bm-section">
	<div class="bm-container">
		<h2 style="font-family: var(--bm-font-serif); font-size: clamp(30px, 4vw, 38px); color: var(--bm-dark); text-align: center; margin: 0 0 48px;">
			Join a supportive community
		</h2>
		<div style="background: #1E1E1E; border-radius: 16px; overflow: hidden;">
			<div class="bm-grid-2">
				<!-- Left: description + stats -->
				<div class="bm-community-panel">
					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px;">
						<Users style="width: 20px; height: 20px; color: #C9A84C;" />
						<span style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4);">Community</span>
					</div>
					<h3 style="font-family: var(--bm-font-serif); font-size: 26px; color: #fff; margin: 0 0 16px;">A space where you belong</h3>
					<p style="font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.7; margin: 0 0 28px;">
						Connect with fellow new Muslims, ask questions in a safe space, share your experiences, and find mentorship from people who understand your journey.
					</p>
					<!-- Stats -->
					<div style="display: flex; gap: 32px; margin-bottom: 28px;">
						<div>
							<p style="font-family: var(--bm-font-serif); font-size: 28px; color: #fff; margin: 0;">2,500+</p>
							<p style="font-size: 13px; color: rgba(255,255,255,0.45); margin: 4px 0 0;">Members</p>
						</div>
						<div>
							<p style="font-family: var(--bm-font-serif); font-size: 28px; color: #fff; margin: 0;">1,200+</p>
							<p style="font-size: 13px; color: rgba(255,255,255,0.45); margin: 4px 0 0;">Discussions</p>
						</div>
					</div>
					<a href="/l" class="bm-btn-gold" style="font-size: 14px; padding: 12px 28px;">
						Join the Community <ArrowRight style="width: 16px; height: 16px;" />
					</a>
				</div>

				<!-- Right: chat preview -->
				<div class="bm-community-panel bm-community-chat">
					<div style="display: flex; flex-direction: column; gap: 16px;">
						{#each [
							{ name: 'Sarah K.', avatar: 'S', color: '#8B2E36', message: 'Assalamu alaikum everyone! I just took my shahada last week and found this community. So grateful to be here.', time: '2m ago' },
							{ name: 'Yusuf M.', avatar: 'Y', color: '#C9A84C', message: 'Welcome Sarah! MashaAllah, congratulations! This community helped me so much when I first converted. You\'re in the right place.', time: '1m ago' },
							{ name: 'Fatima A.', avatar: 'F', color: '#6B8F71', message: 'Welcome! The Being Muslim book was a lifesaver for me. Highly recommend starting there. And don\'t hesitate to ask questions!', time: 'Just now' }
						] as msg}
							<div style="display: flex; gap: 12px;">
								<div style="width: 36px; height: 36px; border-radius: 50%; background: {msg.color}; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
									<span style="font-size: 13px; font-weight: 600; color: #fff;">{msg.avatar}</span>
								</div>
								<div style="flex: 1; min-width: 0;">
									<div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px;">
										<span style="font-size: 13px; font-weight: 600; color: #fff;">{msg.name}</span>
										<span style="font-size: 11px; color: rgba(255,255,255,0.3);">{msg.time}</span>
									</div>
									<p style="font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.5; margin: 0;">{msg.message}</p>
								</div>
							</div>
						{/each}
						<!-- Typing indicator -->
						<div style="display: flex; align-items: center; gap: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06);">
							<MessageCircle style="width: 14px; height: 14px; color: rgba(255,255,255,0.25);" />
							<span style="font-size: 12px; color: rgba(255,255,255,0.25);">3 people typing...</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================================
     SECTION 9: SPONSOR CTA — Emotional ask
     ============================================ -->
<section class="bm-section" style="padding: 100px 0;">
	<div class="bm-container" style="max-width: 700px; text-align: center;">
		<Heart style="width: 36px; height: 36px; color: #C9A84C; margin-bottom: 20px;" />
		<h2 style="font-family: var(--bm-font-serif); font-size: clamp(34px, 5vw, 44px); color: var(--bm-dark); line-height: 1.2; margin: 0 0 20px;">
			Help someone begin their journey
		</h2>
		<p style="font-size: 18px; color: var(--bm-muted); line-height: 1.6; max-width: 560px; margin: 0 auto 36px;">
			Every sponsored set puts a complete guide into the hands of a new Muslim who needs it most. One set can change the entire trajectory of someone's faith journey.
		</p>
		<a href="/l" class="bm-btn-gold" style="font-size: 17px; padding: 18px 40px; font-weight: 600;">
			Sponsor a Boxed Set &mdash; $85
		</a>
		<p style="font-size: 14px; color: var(--bm-muted); margin-top: 20px;">
			3,247 sets sponsored so far
		</p>
	</div>
</section>

<!-- ============================================
     SECTION 10: NEWSLETTER — Simple signup
     ============================================ -->
<section style="background: #1E1E1E; padding: 64px 0;">
	<div class="bm-container" style="max-width: 520px; text-align: center;">
		<Mail style="width: 28px; height: 28px; color: #C9A84C; margin-bottom: 16px;" />
		<h2 style="font-family: var(--bm-font-serif); font-size: 32px; color: #fff; margin: 0 0 12px;">
			Stay connected
		</h2>
		<p style="font-size: 15px; color: rgba(255,255,255,0.6); margin: 0 0 32px; line-height: 1.6;">
			Get weekly reflections, new resources, and community updates delivered to your inbox.
		</p>
		<form onsubmit={(e) => e.preventDefault()} style="display: flex; gap: 12px; max-width: 440px; margin: 0 auto;">
			<input
				type="email"
				placeholder="Your email address"
				style="flex: 1; min-width: 0; padding: 14px 20px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.06); color: #fff; font-family: var(--bm-font-sans); font-size: 15px; outline: none; transition: border-color 0.2s;"
			/>
			<button type="submit" class="bm-btn-gold" style="padding: 14px 28px; flex-shrink: 0;">
				Subscribe
			</button>
		</form>
		<p style="font-size: 13px; color: rgba(255,255,255,0.35); margin-top: 16px;">
			Join 5,000+ subscribers
		</p>
	</div>
</section>

<style>
	.path-card > div:hover {
		border-color: rgba(139, 46, 54, 0.3) !important;
		box-shadow: 0 8px 24px rgba(139, 46, 54, 0.06);
	}

	input::placeholder {
		color: rgba(255, 255, 255, 0.35);
	}
	input:focus {
		border-color: rgba(201, 168, 76, 0.5) !important;
	}
</style>
