<script lang="ts">
	import { ArrowRight, BookOpen, ExternalLink, MessageCircle } from 'lucide-svelte';

	const featuredArticles = [
		{
			title: 'Brief Overview of Islam',
			excerpt:
				'A concise introduction to the core beliefs, practices, and history of Islam — perfect for anyone beginning to explore the faith.',
			image: null,
			href: '/b/learn/brief-overview-of-islam'
		},
		{
			title: "A Beginner's Guide to Being a Muslim",
			excerpt:
				'Practical guidance for new Muslims covering daily prayers, fasting, community life, and building a meaningful relationship with God.',
			image: null,
			href: '/b/learn/beginners-guide'
		},
		{
			title: 'The Final Testament: Islam and Other Faiths',
			excerpt:
				'Understanding how Islam relates to Christianity, Judaism, and other religious traditions — and the shared values that connect them.',
			image: null,
			href: '/b/learn/islam-and-other-faiths'
		}
	];

	const resources = [
		{
			title: 'Being Muslim: A Practical Guide',
			description:
				'Dr. Asad Tarsin\'s essential book for new Muslims — clear, warm, and comprehensive.',
			url: 'https://www.beingmuslim.org'
		},
		{
			title: 'Yaqeen Institute',
			description:
				'Research-backed articles, papers, and videos addressing modern questions about Islam.',
			url: 'https://yaqeeninstitute.org'
		},
		{
			title: 'SeekersGuidance',
			description:
				'Free online Islamic courses taught by qualified scholars, from beginner to advanced.',
			url: 'https://seekersguidance.org'
		},
		{
			title: 'Bayyinah TV',
			description:
				'Arabic and Quran education through engaging video content by Ustadh Nouman Ali Khan.',
			url: 'https://www.bayyinahtv.com'
		},
		{
			title: 'Salam (New Muslim Support)',
			description:
				'Mentorship and community support specifically designed for converts and new Muslims.',
			url: 'https://www.newsalam.com'
		}
	];
</script>

<svelte:head>
	<title>Learn — Explore Islam | Being Muslim</title>
	<meta
		name="description"
		content="Explore articles, guides, and curated resources to deepen your understanding of Islam. Written for new Muslims, converts, and the curious."
	/>
</svelte:head>

<!-- Hero Section -->
<section
	style="background-color: #2a2018; font-family: 'DM Sans', sans-serif;"
	class="pt-[72px]"
>
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 sm:py-28">
		<div class="mx-auto max-w-2xl text-center">
			<p
				style="color: #c4a97d; font-family: 'DM Sans', sans-serif; letter-spacing: 0.08em;"
				class="text-sm font-medium uppercase mb-4"
			>
				&#9670; Knowledge &amp; Guidance
			</p>
			<h1
				style="font-family: 'Source Serif 4', serif; color: #f0ebe3;"
				class="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1]"
			>
				Learn
			</h1>
			<p style="color: #f0ebe3;" class="mt-5 text-lg leading-relaxed opacity-70 max-w-lg mx-auto">
				Explore thoughtful articles, curated resources, and answers to your questions about Islam — written with clarity, warmth, and care.
			</p>
		</div>
	</div>
</section>

<!-- Featured Articles Section -->
<section style="background-color: #f0ebe3; font-family: 'DM Sans', sans-serif;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
		<p
			style="color: #8a7e70; letter-spacing: 0.08em;"
			class="text-sm font-medium uppercase mb-3"
		>
			&#9670; Featured Articles
		</p>
		<h2
			style="font-family: 'Source Serif 4', serif; color: #2a2018;"
			class="text-3xl sm:text-4xl font-bold"
		>
			Start here
		</h2>
		<p style="color: #8a7e70;" class="mt-3 text-base max-w-xl leading-relaxed">
			Whether you're just curious or taking your first steps, these articles offer a welcoming introduction.
		</p>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
			{#each featuredArticles as article}
				<a href={article.href} class="group block">
					<article
						style="background: #e9e3da; border-radius: 10px;"
						class="flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
					>
						<!-- Image Placeholder -->
						<div
							style="background: linear-gradient(135deg, #d4ccc0 0%, #c4b9aa 100%);"
							class="aspect-[16/10] flex items-center justify-center"
						>
							<BookOpen style="color: #8a7e70;" class="h-10 w-10 opacity-40" />
						</div>

						<!-- Content -->
						<div class="p-6 flex flex-col flex-1">
							<h3
								style="font-family: 'Source Serif 4', serif; color: #2a2018;"
								class="text-xl font-bold leading-snug group-hover:opacity-80 transition-opacity"
							>
								{article.title}
							</h3>
							<p style="color: #8a7e70;" class="mt-3 text-sm leading-relaxed flex-1">
								{article.excerpt}
							</p>
							<div class="mt-5 flex items-center gap-1.5" style="color: #2a2018;">
								<span class="text-sm font-medium">Read More</span>
								<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
							</div>
						</div>
					</article>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Recommended Resources Section -->
<section style="background-color: #e9e3da; font-family: 'DM Sans', sans-serif;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
		<p
			style="color: #8a7e70; letter-spacing: 0.08em;"
			class="text-sm font-medium uppercase mb-3"
		>
			&#9670; Recommended Resources
		</p>
		<h2
			style="font-family: 'Source Serif 4', serif; color: #2a2018;"
			class="text-3xl sm:text-4xl font-bold"
		>
			Trusted learning from around the web
		</h2>
		<p style="color: #8a7e70;" class="mt-3 text-base max-w-xl leading-relaxed">
			Handpicked resources from scholars and educators we trust, to complement your journey.
		</p>

		<div class="mt-10 flex flex-col gap-4">
			{#each resources as resource}
				<a
					href={resource.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between gap-4 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
					style="background: #f0ebe3; border-radius: 10px;"
				>
					<div class="flex-1 min-w-0">
						<h3
							style="font-family: 'Source Serif 4', serif; color: #2a2018;"
							class="text-lg font-bold group-hover:opacity-80 transition-opacity"
						>
							{resource.title}
						</h3>
						<p style="color: #8a7e70;" class="mt-1 text-sm leading-relaxed">
							{resource.description}
						</p>
					</div>
					<div
						style="color: #8a7e70;"
						class="flex-shrink-0 transition-colors group-hover:text-[#2a2018]"
					>
						<ExternalLink class="h-5 w-5" />
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Ask a Question CTA -->
<section style="background-color: #2a2018; font-family: 'DM Sans', sans-serif;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
		<div class="mx-auto max-w-2xl text-center">
			<div
				class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full"
				style="background: rgba(196, 169, 125, 0.2);"
			>
				<MessageCircle style="color: #c4a97d;" class="h-7 w-7" />
			</div>
			<h2
				style="font-family: 'Source Serif 4', serif; color: #f0ebe3;"
				class="text-3xl sm:text-4xl font-bold"
			>
				Have a question about Islam?
			</h2>
			<p style="color: #f0ebe3;" class="mt-4 text-lg leading-relaxed opacity-70 max-w-lg mx-auto">
				No question is too simple or too small. We're here to help you find thoughtful, reliable answers.
			</p>
			<a
				href="/b/community/ask"
				class="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:shadow-lg hover:scale-[1.02]"
				style="background: #f0ebe3; color: #2a2018;"
			>
				Ask a Question
				<ArrowRight class="h-4 w-4" />
			</a>
		</div>
	</div>
</section>

