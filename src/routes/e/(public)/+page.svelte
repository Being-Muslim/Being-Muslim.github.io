<script lang="ts">
	import {
		ArrowRight,
		Compass,
		Sunrise,
		RefreshCw,
		Star,
		Play,
		Users,
		MessageCircle,
		BookOpen,
		ChevronDown
	} from 'lucide-svelte';
	import { testimonials } from '$lib/data/mock.js';

	let email = $state('');
	let openFaq = $state<number | null>(null);
	function toggleFaq(i: number) { openFaq = openFaq === i ? null : i; }
</script>

<svelte:head>
	<title>Being Muslim — A Practical Guide to a Meaningful Islamic Journey</title>
	<meta name="description" content="A premium editorial experience for learning about Islam." />
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO (Dark, Cinematic)      -->
<!-- ============================== -->
<section style="min-height: 100vh; display: flex; align-items: center; background: radial-gradient(ellipse at 40% 30%, #2a2520 0%, #1C1917 70%, #141210 100%); padding: 120px 24px 80px; position: relative; overflow: hidden;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10" style="width: 100%;">
		<div class="bm-grid-2-gap" style="align-items: center;">
			<!-- Left: Text -->
			<div>
				<p style="font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 500; color: #B8A070; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 20px;">By Dr. Asad Tarsin</p>
				<h1 style="font-family: 'Fraunces', serif; font-size: clamp(40px, 5.5vw, 68px); font-weight: 400; line-height: 1.08; color: #FAF5EB; margin: 0 0 24px;">
					A <span style="font-style: italic; color: #C1604E;">practical</span> guide<br />to being Muslim
				</h1>
				<p style="font-family: 'Outfit', sans-serif; font-size: 16px; color: rgba(250,245,235,0.55); line-height: 1.7; max-width: 440px; margin: 0 0 36px;">
					Whether you're exploring Islam, newly converted, or reconnecting with your faith — find the knowledge, community, and support you need.
				</p>
				<div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 40px;">
					<a href="/e" class="bm-btn-accent" style="padding: 14px 32px; font-weight: 600;">
						Start Reading <ArrowRight class="h-4 w-4" />
					</a>
					<a href="/e" class="bm-btn-glass" style="padding: 14px 32px; font-weight: 600;">
						Browse Chapters
					</a>
				</div>
				<!-- Trust bar -->
				<div style="display: flex; align-items: center; gap: 12px;">
					<div style="display: flex;">
						{#each ['#7a8b6e', '#a08b6e', '#6e7a8b', '#8b6e7a'] as color}
							<div style="width: 32px; height: 32px; border-radius: 999px; border: 2px solid rgba(250,245,235,0.3); margin-left: -8px; background: {color};"></div>
						{/each}
					</div>
					<span style="font-family: 'Outfit', sans-serif; font-size: 13px; color: rgba(250,245,235,0.5);">Trusted by <strong style="color: #B8A070;">10,000+</strong> learners</span>
				</div>
			</div>
			<!-- Right: Book image -->
			<div style="display: flex; justify-content: center;">
				<div style="transform: rotate(2deg); transition: transform 0.5s;" class="hover:-rotate-1">
					<img
						src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg"
						alt="Being Muslim: A Practical Guide"
						style="max-width: 320px; width: 100%; border-radius: 8px; box-shadow: 0 32px 64px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3);"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 2. VOLUME I: EXPLORE           -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #FAF5EB;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<p style="font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 600; color: #C1604E; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 8px;">Volume I</p>
		<h2 style="font-family: 'Fraunces', serif; font-size: clamp(28px, 4vw, 42px); font-weight: 400; color: #1C1917; margin: 0 0 40px;">Explore your path</h2>

		<div class="bm-grid-3">
			{#each [
				{ icon: Compass, title: "I'm exploring Islam", desc: "You're curious about Islam and want to learn the basics — beliefs, practices, and what it means to be Muslim." },
				{ icon: Sunrise, title: "I recently converted", desc: "You've taken your shahada and need guidance on prayer, community, and your new life as a Muslim." },
				{ icon: RefreshCw, title: "I'm reconnecting", desc: "You grew up Muslim but drifted away. Now you're ready to deepen your understanding and practice." }
			] as path}
				<a href="/e" style="text-decoration: none; display: block; background: #EDE4D3; border-radius: 12px; padding: 32px; transition: all 0.2s; border: 1px solid transparent;" class="group hover:shadow-md" onmouseenter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#C1604E'; }} onmouseleave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'transparent'; }}>
					<svelte:component this={path.icon} class="h-6 w-6" style="color: #C1604E; margin-bottom: 16px;" />
					<h3 style="font-family: 'Fraunces', serif; font-size: 20px; font-weight: 500; color: #1C1917; margin: 0 0 10px;">{path.title}</h3>
					<p style="font-family: 'Outfit', sans-serif; font-size: 14px; color: #8a7e6a; line-height: 1.6; margin: 0;">{path.desc}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 3. FEATURED ARTICLE            -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #EDE4D3;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="bm-grid-featured" style="align-items: start;">
			<!-- Featured image + drop cap preview -->
			<div>
				<a href="/e" style="text-decoration: none; display: block;">
					<div style="aspect-ratio: 16/10; border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
						<img src="https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png" alt="Brief Overview of Islam" style="width: 100%; height: 100%; object-fit: cover;" />
					</div>
				</a>
				<p style="font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 600; color: #C1604E; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 8px;">Featured</p>
				<h3 style="font-family: 'Fraunces', serif; font-size: clamp(28px, 3.5vw, 38px); font-weight: 400; color: #1C1917; margin: 0 0 16px; line-height: 1.2;">Brief Overview of Islam</h3>
				<p class="bm-drop-cap" style="font-family: 'Outfit', sans-serif; font-size: 15px; color: #5a5248; line-height: 1.7; margin: 0;">
					Islam is the world's second-largest religion, with over 1.8 billion followers. At its core, Islam calls for submission to one God and living a life of purpose, compassion, and justice. The word "Islam" itself means peace and surrender, reflecting the faith's emphasis on finding tranquility through a relationship with the Divine.
				</p>
			</div>
			<!-- Pull quote sidebar -->
			<div style="padding-top: 12px;">
				<blockquote class="bm-pull-quote" style="margin-bottom: 28px;">
					"Islam is a comprehensive way of life that guides its followers in every aspect — from worship and morality to family, community, and personal growth."
				</blockquote>
				<p style="font-family: 'Outfit', sans-serif; font-size: 14px; color: #8a7e6a; line-height: 1.6; margin: 0 0 8px;">By Dr. Asad Tarsin</p>
				<p style="font-family: 'Outfit', sans-serif; font-size: 12px; color: #a8a090; margin: 0 0 24px;">10 min read</p>
				<a href="/e" class="bm-btn-accent" style="padding: 10px 24px;">
					Read Article <ArrowRight class="h-3.5 w-3.5" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 4. VOLUME II: RESOURCES        -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #FAF5EB;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 36px;">
			<div>
				<p style="font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 600; color: #C1604E; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 8px;">Volume II</p>
				<h2 style="font-family: 'Fraunces', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #1C1917; margin: 0;">Read &amp; Learn</h2>
			</div>
			<a href="/e" style="font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500; color: #1C1917; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;" class="bm-view-all">
				View all <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>

		<div class="bm-grid-3">
			{#each [
				{ title: "A Beginner's Guide to Being a Muslim", category: 'New Muslims', time: '12 min read', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg' },
				{ title: 'Islam and Other Faiths', category: 'Belief', time: '8 min read', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/oneGodmanynames.jpeg' },
				{ title: 'Brief Overview of Islam', category: 'Foundations', time: '10 min read', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png' }
			] as article}
				<a href="/e" style="text-decoration: none; display: block;" class="bm-title-underline-parent">
					<div style="aspect-ratio: 4/3; background: #EDE4D3; border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
						<img src={article.img} alt={article.title} style="width: 100%; height: 100%; object-fit: cover;" />
					</div>
					<span style="font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 600; color: #C1604E; text-transform: uppercase; letter-spacing: 0.05em;">{article.category}</span>
					<h3 class="bm-title-underline" style="font-family: 'Fraunces', serif; font-size: 20px; font-weight: 400; color: #1C1917; margin: 6px 0 8px; line-height: 1.3;">{article.title}</h3>
					<span style="font-family: 'Outfit', sans-serif; font-size: 12px; color: #8a7e6a;">{article.time}</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 5. VOLUME III: PRODUCTS        -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #EDE4D3;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<p style="font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 600; color: #C1604E; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 8px; text-align: center;">Volume III</p>
		<h2 style="font-family: 'Fraunces', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #1C1917; margin: 0 0 40px; text-align: center;">The Collection</h2>

		<div class="bm-grid-4">
			{#each [
				{ title: 'Being Muslim: A Practical Guide', price: '$14.95', badge: 'Bestseller', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg' },
				{ title: 'The Complete Boxed Set', price: '$85.00', badge: 'Most Popular', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg' },
				{ title: 'Prayer Reference Cards', price: '$37.50', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg' },
				{ title: 'Digital Edition (eBook)', price: '$9.00', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png' }
			] as product}
				<a href="/e" style="text-decoration: none; display: block;" class="group bm-title-underline-parent">
					<div style="aspect-ratio: 1; background: #FAF5EB; border-radius: 12px; overflow: hidden; margin-bottom: 14px; position: relative;">
						<img src={product.img} alt={product.title} class="transition-transform duration-500 group-hover:scale-105" style="width: 100%; height: 100%; object-fit: cover;" />
						{#if product.badge}
							<span style="position: absolute; top: 12px; left: 12px; font-family: 'Outfit', sans-serif; font-size: 10px; font-weight: 600; color: #fff; background: #C1604E; padding: 4px 12px; border-radius: 999px;">{product.badge}</span>
						{/if}
					</div>
					<h3 class="bm-title-underline" style="font-family: 'Fraunces', serif; font-size: 16px; font-weight: 400; color: #1C1917; margin: 0 0 4px; line-height: 1.3;">{product.title}</h3>
					<span style="font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 500; color: #1C1917;">{product.price}</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 6. VOLUME IV: COURSES          -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #FAF5EB;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<p style="font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 600; color: #C1604E; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 8px;">Volume IV</p>
		<h2 style="font-family: 'Fraunces', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #1C1917; margin: 0 0 40px;">Study</h2>

		<div class="bm-grid-3">
			{#each [
				{ title: 'Foundations of Faith', instructor: 'Dr. Asad Tarsin', lessons: 24, duration: '6 hours', img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80&auto=format&fit=crop' },
				{ title: 'Prayer Mastery', instructor: 'Imam Ahmad', lessons: 16, duration: '4 hours', img: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80&auto=format&fit=crop' },
				{ title: 'Your Quran Journey', instructor: 'Ustadha Fatima', lessons: 32, duration: '10 hours', img: 'https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=600&q=80&auto=format&fit=crop' }
			] as course}
				<a href="/e" style="text-decoration: none; display: block; border-radius: 12px; overflow: hidden; position: relative;" class="group">
					<div style="aspect-ratio: 4/3; position: relative;">
						<img src={course.img} alt={course.title} class="transition-transform duration-500 group-hover:scale-105" style="width: 100%; height: 100%; object-fit: cover;" />
						<div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 30%, rgba(28,25,23,0.85) 100%);"></div>
						<div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
							<div style="width: 56px; height: 56px; border-radius: 999px; background: rgba(255,255,255,0.9); display: flex; align-items: center; justify-content: center; transition: transform 0.2s;" class="group-hover:scale-110">
								<Play class="h-6 w-6" style="color: #1C1917; margin-left: 2px;" />
							</div>
						</div>
						<div style="position: absolute; bottom: 20px; left: 20px; right: 20px;">
							<h3 style="font-family: 'Fraunces', serif; font-size: 22px; font-weight: 400; color: #fff; margin: 0 0 8px;">{course.title}</h3>
							<div style="display: flex; align-items: center; gap: 12px;">
								<span style="font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.8);">{course.instructor}</span>
								<span style="font-family: 'Outfit', sans-serif; font-size: 12px; color: rgba(255,255,255,0.5);">{course.lessons} lessons · {course.duration}</span>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 7. COMMUNITY (Dark)            -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #1C1917;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<p style="font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 600; color: #C1604E; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 8px;">Chapter V</p>
		<div style="border-radius: 16px; overflow: hidden;">
			<div class="bm-grid-2">
				<div class="bm-community-panel">
					<h2 style="font-family: 'Fraunces', serif; font-size: 36px; font-weight: 400; color: #FAF5EB; margin: 0 0 16px; line-height: 1.15;">Connect with fellow readers</h2>
					<p style="font-family: 'Outfit', sans-serif; font-size: 15px; color: rgba(250,245,235,0.5); line-height: 1.65; margin: 0 0 28px;">
						Join a community of seekers, converts, and lifelong Muslims sharing their journeys and supporting one another.
					</p>
					<div style="display: flex; gap: 24px; margin-bottom: 32px;">
						<div style="display: flex; align-items: center; gap: 6px;">
							<Users class="h-4 w-4" style="color: #B8A070;" />
							<span style="font-family: 'Outfit', sans-serif; font-size: 13px; color: rgba(250,245,235,0.7);"><strong style="color: #B8A070;">2,500+</strong> members</span>
						</div>
						<div style="display: flex; align-items: center; gap: 6px;">
							<MessageCircle class="h-4 w-4" style="color: #B8A070;" />
							<span style="font-family: 'Outfit', sans-serif; font-size: 13px; color: rgba(250,245,235,0.7);"><strong style="color: #B8A070;">1,200+</strong> discussions</span>
						</div>
					</div>
					<a href="/e" style="display: inline-flex; align-items: center; gap: 6px; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 500; background: #FAF5EB; color: #1C1917; padding: 12px 28px; border-radius: 999px; text-decoration: none; transition: all 0.2s;">
						Join the Community <ArrowRight class="h-3.5 w-3.5" />
					</a>
				</div>
				<div class="bm-community-panel bm-community-chat" style="background: rgba(255,255,255,0.03); display: flex; flex-direction: column; justify-content: center;">
					{#each [
						{ name: 'Aminah', msg: 'Salaam everyone! Just took my shahada yesterday', time: '2m ago' },
						{ name: 'Omar', msg: 'MashaAllah! Welcome to the family, sister!', time: '1m ago' },
						{ name: 'Fatima', msg: 'So happy for you! Feel free to ask anything here.', time: 'just now' }
					] as message, i}
						<div style="display: flex; gap: 12px; padding: 12px 0; {i > 0 ? 'border-top: 1px solid rgba(255,255,255,0.06);' : ''}">
							<div style="width: 32px; height: 32px; border-radius: 999px; background: rgba(184,160,112,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 600; color: #B8A070;">
								{message.name[0]}
							</div>
							<div>
								<div style="display: flex; align-items: center; gap: 8px;">
									<span style="font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500; color: #FAF5EB;">{message.name}</span>
									<span style="font-family: 'Outfit', sans-serif; font-size: 11px; color: rgba(250,245,235,0.3);">{message.time}</span>
								</div>
								<p style="font-family: 'Outfit', sans-serif; font-size: 13px; color: rgba(250,245,235,0.45); margin: 3px 0 0; line-height: 1.4;">{message.msg}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 8. SUPPORT                     -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #EDE4D3;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<p style="font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 600; color: #C1604E; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 8px;">Chapter VI</p>
		<div class="bm-grid-2-gap">
			<div>
				<h2 style="font-family: 'Fraunces', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #1C1917; margin: 0 0 16px; line-height: 1.15;">Help a new Muslim begin their journey</h2>
				<p style="font-family: 'Outfit', sans-serif; font-size: 15px; color: #8a7e6a; line-height: 1.65; margin: 0 0 28px;">
					Many new Muslims can't afford the resources they need. Your sponsorship puts a complete Being Muslim boxed set in their hands.
				</p>
				<a href="/e" class="bm-btn-accent" style="padding: 10px 24px;">Support the Mission <ArrowRight class="h-3.5 w-3.5" /></a>
			</div>
			<div class="bm-grid-stats">
				{#each [
					{ value: '3,247', label: 'Sets Sponsored' },
					{ value: '520', label: 'Communities Reached' },
					{ value: '52', label: 'Countries' },
					{ value: '180', label: 'Monthly Donors' }
				] as stat}
					<div style="background: #FAF5EB; border-radius: 12px; padding: 24px;">
						<p style="font-family: 'Fraunces', serif; font-size: 32px; font-weight: 400; line-height: 1; color: #1C1917; margin: 0;">{stat.value}</p>
						<p style="font-family: 'Outfit', sans-serif; font-size: 12px; color: #8a7e6a; margin: 6px 0 0;">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 9. TESTIMONIALS                -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #FAF5EB;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 style="font-family: 'Fraunces', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #1C1917; margin: 0 0 40px; text-align: center;">What readers are saying</h2>
		<div class="bm-grid-3">
			{#each testimonials.slice(0, 3) as testimonial}
				<div style="background: #EDE4D3; border-radius: 12px; padding: 32px; display: flex; flex-direction: column;">
					<div style="display: flex; gap: 3px; margin-bottom: 16px;">
						{#each Array(5) as _}
							<Star class="h-4 w-4" style="fill: #B8A070; color: #B8A070;" />
						{/each}
					</div>
					<blockquote style="font-family: 'Fraunces', serif; font-size: 15px; font-style: italic; line-height: 1.6; color: #1C1917; margin: 0 0 20px; flex: 1;">
						"{testimonial.quote}"
					</blockquote>
					<div>
						<p style="font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 600; color: #1C1917; margin: 0;">{testimonial.name}</p>
						<p style="font-family: 'Outfit', sans-serif; font-size: 13px; color: #8a7e6a; margin: 4px 0 0;">{testimonial.role}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 10. NEWSLETTER                 -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #1C1917;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="bm-grid-newsletter">
			<div>
				<h2 style="font-family: 'Fraunces', serif; font-size: 28px; font-weight: 400; color: #FAF5EB; margin: 0 0 12px;">Subscribe to the Journal</h2>
				<p style="font-family: 'Outfit', sans-serif; font-size: 15px; color: rgba(250,245,235,0.5); line-height: 1.6; margin: 0;">
					Reflections, new chapters, and community stories — delivered to your inbox.
				</p>
			</div>
			<div>
				<form style="position: relative; margin-bottom: 12px;" onsubmit={(e) => { e.preventDefault(); }}>
					<input type="email" bind:value={email} placeholder="Enter your email" required style="width: 100%; padding: 16px 60px 16px 20px; border-radius: 999px; border: 1px solid rgba(250,245,235,0.15); background: rgba(250,245,235,0.08); color: #FAF5EB; font-family: 'Outfit', sans-serif; font-size: 14px; outline: none; box-sizing: border-box;" />
					<button type="submit" class="bm-newsletter-btn" style="position: absolute; right: 4px; top: 50%; transform: translateY(-50%); width: 44px; height: 44px; border-radius: 999px; background: #C1604E; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer;">
						<ArrowRight class="h-4 w-4" style="color: #fff;" />
					</button>
				</form>
				<p style="font-family: 'Outfit', sans-serif; font-size: 12px; color: rgba(250,245,235,0.3); margin: 0;">Join 5,000+ subscribers. Unsubscribe anytime.</p>
			</div>
		</div>
	</div>
</section>
