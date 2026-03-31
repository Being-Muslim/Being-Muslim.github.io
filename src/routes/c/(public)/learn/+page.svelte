<script lang="ts">
	import { ArrowRight, BookOpen, ExternalLink, MessageCircle, Play } from 'lucide-svelte';

	const featuredArticles = [
		{
			title: 'Brief Overview of Islam',
			excerpt: 'A concise introduction to the core beliefs, practices, and history of Islam — perfect for anyone beginning to explore the faith.',
			img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png',
			href: '/c/learn/brief-overview-of-islam',
			category: 'Foundations',
			time: '10 min read'
		},
		{
			title: "A Beginner's Guide to Being a Muslim",
			excerpt: 'Practical guidance for new Muslims covering daily prayers, fasting, community life, and building a meaningful relationship with God.',
			img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg',
			href: '/c/learn/beginners-guide',
			category: 'New Muslims',
			time: '12 min read'
		},
		{
			title: 'Islam and Other Faiths',
			excerpt: 'Understanding how Islam relates to Christianity, Judaism, and other religious traditions — and the shared values that connect them.',
			img: 'https://www.beingmuslim.org/wp-content/uploads/2022/02/foundationsofIsam_YT.jpeg',
			href: '/c/learn/islam-and-other-faiths',
			category: 'Belief',
			time: '8 min read'
		}
	];

	const courses = [
		{ title: 'Foundations of Faith', instructor: 'Dr. Asad Tarsin', lessons: 24, duration: '6 hours', level: 'Beginner', img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80&auto=format&fit=crop' },
		{ title: 'Prayer Mastery', instructor: 'Imam Ahmad', lessons: 16, duration: '4 hours', level: 'Beginner', img: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80&auto=format&fit=crop' },
		{ title: 'Your Quran Journey', instructor: 'Ustadha Fatima', lessons: 32, duration: '10 hours', level: 'Beginner', img: 'https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=600&q=80&auto=format&fit=crop' },
		{ title: 'Understanding the Seerah', instructor: 'Dr. Omar Suleiman', lessons: 20, duration: '8 hours', level: 'Intermediate', img: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&q=80&auto=format&fit=crop' }
	];

	const resources = [
		{ title: 'Being Muslim: A Practical Guide', description: 'Dr. Asad Tarsin\'s essential book for new Muslims — clear, warm, and comprehensive.', url: 'https://www.beingmuslim.org' },
		{ title: 'Yaqeen Institute', description: 'Research-backed articles, papers, and videos addressing modern questions about Islam.', url: 'https://yaqeeninstitute.org' },
		{ title: 'SeekersGuidance', description: 'Free online Islamic courses taught by qualified scholars, from beginner to advanced.', url: 'https://seekersguidance.org' },
		{ title: 'Bayyinah TV', description: 'Arabic and Quran education through engaging video content by Ustadh Nouman Ali Khan.', url: 'https://www.bayyinahtv.com' },
		{ title: 'Salam (New Muslim Support)', description: 'Mentorship and community support specifically designed for converts and new Muslims.', url: 'https://www.newsalam.com' }
	];
</script>

<svelte:head>
	<title>Learn — Explore Islam | Being Muslim</title>
	<meta name="description" content="Explore articles, guides, and curated resources to deepen your understanding of Islam." />
</svelte:head>

<!-- ============================== -->
<!-- HERO — Full-width image        -->
<!-- ============================== -->
<section style="position: relative; min-height: 420px; display: flex; align-items: flex-end; overflow: hidden;">
	<img
		src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1920&q=80&auto=format&fit=crop"
		alt=""
		style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;"
	/>
	<div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(42,32,24,0.1) 0%, rgba(42,32,24,0.7) 100%);"></div>
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10" style="position: relative; z-index: 1; width: 100%; padding-bottom: 48px; padding-top: 140px;">
		<h1 style="font-family: 'Source Serif 4', serif; font-size: clamp(40px, 6vw, 64px); font-weight: 400; color: #fff; margin: 0 0 12px; line-height: 1.05;">
			Learn
		</h1>
		<p style="font-family: 'DM Sans', sans-serif; font-size: 17px; color: rgba(255,255,255,0.8); max-width: 480px; line-height: 1.6; margin: 0;">
			Explore thoughtful articles, curated resources, and answers to your questions about Islam.
		</p>
	</div>
</section>

<!-- ============================== -->
<!-- FEATURED ARTICLES              -->
<!-- ============================== -->
<section style="background: #faf9f5; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 40px;">
			<div>
				<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 6px;">
					Start here
				</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; margin: 0;">
					Whether you're curious or taking your first steps, these are a welcoming introduction.
				</p>
			</div>
			<a href="/c/articles" class="bm-view-all" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
				All articles <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>

		<!-- Full-width stacked article cards -->
		{#each featuredArticles as article, i}
			<a href={article.href} style="text-decoration: none; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; padding: 32px 0; {i > 0 ? 'border-top: 1px solid #e8e3da;' : ''}" class="bm-title-underline-parent">
				<div style="border-radius: 14px; overflow: hidden; aspect-ratio: 16/10; background: #e2dcd2; {i % 2 === 1 ? 'order: 2;' : ''}">
					<img src={article.img} alt={article.title} style="width: 100%; height: 100%; object-fit: cover; display: block;" />
				</div>
				<div style="{i % 2 === 1 ? 'order: 1;' : ''}">
					<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
						<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #c8b8a0; text-transform: uppercase; letter-spacing: 1px;">{article.category}</span>
						<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #a09888;">{article.time}</span>
					</div>
					<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #2a2018; margin: 0 0 12px; line-height: 1.25;">
						{article.title}
					</h3>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 0 0 20px; max-width: 440px;">
						{article.excerpt}
					</p>
					<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018; display: inline-flex; align-items: center; gap: 6px;">
						Read article <ArrowRight class="h-4 w-4" />
					</span>
				</div>
			</a>
		{/each}
	</div>
</section>

<!-- ============================== -->
<!-- COURSES                        -->
<!-- ============================== -->
<section style="background: #f4f1eb; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 32px;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0;">
				Courses
			</h2>
			<a href="/c/courses" class="bm-view-all" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
				All courses <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>

		<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;">
			{#each courses as course}
				<a href="/c/courses" style="text-decoration: none; display: block;" class="bm-title-underline-parent">
					<div style="aspect-ratio: 4/3; background: #e2dcd2; border-radius: 14px; overflow: hidden; margin-bottom: 14px; position: relative;">
						<img src={course.img} alt={course.title} style="width: 100%; height: 100%; object-fit: cover; display: block;" />
						<div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
							<div style="width: 48px; height: 48px; border-radius: 999px; background: rgba(255,255,255,0.9); display: flex; align-items: center; justify-content: center;">
								<Play class="h-5 w-5" style="color: #2a2018; margin-left: 2px;" />
							</div>
						</div>
						<span style="position: absolute; top: 10px; left: 10px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; color: #2a2018; background: #fff; padding: 3px 10px; border-radius: 999px;">{course.level}</span>
					</div>
					<h3 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 16px; font-weight: 400; color: #2a2018; margin: 0 0 6px; line-height: 1.3;">{course.title}</h3>
					<div style="display: flex; align-items: center; gap: 10px;">
						<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #2a2018;">{course.instructor}</span>
						<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #a09888;">{course.lessons} lessons · {course.duration}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- RECOMMENDED RESOURCES          -->
<!-- ============================== -->
<section style="background: #faf9f5; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 8px;">
			Trusted resources
		</h2>
		<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.55; margin: 0 0 32px;">
			Handpicked from scholars and educators we trust.
		</p>

		<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
			{#each resources as resource}
				<a
					href={resource.url}
					target="_blank"
					rel="noopener noreferrer"
					class="bm-card-hover"
					style="display: block; padding: 28px; border-radius: 12px; text-decoration: none; background: #f4f1eb;"
				>
					<div style="display: flex; justify-content: space-between; align-items: start; gap: 12px; margin-bottom: 8px;">
						<h3 style="font-family: 'Source Serif 4', serif; font-size: 17px; font-weight: 400; color: #2a2018; margin: 0; line-height: 1.3;">
							{resource.title}
						</h3>
						<ExternalLink class="h-4 w-4 flex-shrink-0" style="color: #c8b8a0; margin-top: 2px;" />
					</div>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; line-height: 1.5; margin: 0;">
						{resource.description}
					</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- ASK A QUESTION CTA             -->
<!-- ============================== -->
<section style="background: #f4f1eb; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="background: #2a2018; border-radius: 16px; padding: 56px; display: flex; align-items: center; gap: 48px;">
			<div style="width: 64px; height: 64px; border-radius: 999px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
				<MessageCircle class="h-8 w-8" style="color: #c8b8a0;" />
			</div>
			<div style="flex: 1;">
				<h2 style="font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #fff; margin: 0 0 8px; line-height: 1.2;">
					Have a question about Islam?
				</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: rgba(255,255,255,0.55); margin: 0; line-height: 1.6;">
					No question is too simple. We're here to help you find thoughtful, reliable answers.
				</p>
			</div>
			<a href="/c/community" class="bm-btn-white" style="flex-shrink: 0; padding: 12px 28px;">
				Ask a Question <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>
