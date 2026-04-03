<script lang="ts">
	import { articles, articleCategories } from '$lib/data/mock.js';
	import {
		Search,
		BookOpen,
		Clock,
		Calendar,
		ArrowRight
	} from 'lucide-svelte';

	let search = $state('');
	let activeCategory = $state<string>('All');

	let filteredArticles = $derived.by(() => {
		let result = articles;

		if (activeCategory !== 'All') {
			result = result.filter((a) => a.category === activeCategory);
		}

		if (search.trim()) {
			const q = search.toLowerCase().trim();
			result = result.filter(
				(a) =>
					a.title.toLowerCase().includes(q) ||
					a.excerpt.toLowerCase().includes(q) ||
					a.author.toLowerCase().includes(q)
			);
		}

		return result;
	});

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Resources & Articles — Being Muslim</title>
	<meta
		name="description"
		content="Explore articles and resources on Islamic faith, prayer, fasting, community, and daily life. Written for new Muslims, converts, and those reconnecting with their faith."
	/>
</svelte:head>

<!-- Hero Section -->
<section style="background-color: #2a2018;" class="pt-[72px]">
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
				Resources & Articles
			</h1>
			<p style="color: #f0ebe3; font-family: 'DM Sans', sans-serif;" class="mt-5 text-lg leading-relaxed opacity-70 max-w-lg mx-auto">
				Thoughtful articles to guide you on every step of your Islamic journey — from foundational beliefs to daily practice.
			</p>
		</div>
	</div>
</section>

<!-- Search & Filters -->
<section style="background: #faf9f5; padding: 32px 0 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 640px; margin: 0 auto;">
			<!-- Search Bar -->
			<div style="position: relative;">
				<Search class="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2" style="color: #8a7e70;" />
				<input
					type="text"
					placeholder="Search articles..."
					bind:value={search}
					style="width: 100%; height: 48px; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; padding-left: 44px; padding-right: 16px; font-family: 'DM Sans', sans-serif; font-size: 15px; color: #2a2018; outline: none; box-sizing: border-box;"
				/>
			</div>

			<!-- Category Filter Pills -->
			<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-top: 20px;">
				{#each articleCategories as category}
					<button
						onclick={() => (activeCategory = category)}
						style="border-radius: 999px; padding: 8px 18px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; border: 1px solid {activeCategory === category ? '#2a2018' : '#d8d2c8'}; background: {activeCategory === category ? '#2a2018' : 'transparent'}; color: {activeCategory === category ? '#f0ebe3' : '#8a7e70'}; cursor: pointer; transition: all 0.2s;"
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Articles Grid -->
<section style="background: #faf9f5; padding: 32px 0 64px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		{#if filteredArticles.length === 0}
			<div style="text-align: center; padding: 64px 0;">
				<BookOpen class="mx-auto h-12 w-12" style="color: rgba(138,126,112,0.3);" />
				<h3 style="font-family: 'Source Serif 4', serif; font-size: 20px; font-weight: 400; color: #2a2018; margin: 16px 0 8px;">No articles found</h3>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; margin: 0 0 20px;">
					Try adjusting your search or filter to find what you're looking for.
				</p>
				<button
					class="bm-btn-outline"
					style="padding: 10px 24px;"
					onclick={() => {
						search = '';
						activeCategory = 'All';
					}}
				>
					Clear Filters
				</button>
			</div>
		{:else}
			<div class="bm-grid-3" style="gap: 24px;">
				{#each filteredArticles as article}
					<a href="/b/articles/{article.slug}" style="text-decoration: none; display: block;" class="bm-title-underline-parent">
						<div style="background: #fff; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; height: 100%; transition: box-shadow 0.2s;" class="bm-card-hover">
							<!-- Image Placeholder -->
							<div style="aspect-ratio: 16/10; background: linear-gradient(135deg, #e9e3da, #d4ccc0); display: flex; align-items: center; justify-content: center;">
								<BookOpen class="h-10 w-10" style="color: rgba(138,126,112,0.35);" />
							</div>

							<!-- Content -->
							<div style="padding: 20px; display: flex; flex-direction: column; flex: 1;">
								<div style="display: flex; align-items: center; gap: 10px;">
									<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #2a2018; background: #f4f1eb; padding: 3px 10px; border-radius: 999px;">{article.category}</span>
									<span style="display: flex; align-items: center; gap: 4px; font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70;">
										<Clock class="h-3 w-3" />
										{article.readingTime}
									</span>
								</div>

								<h2 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 12px 0 8px; line-height: 1.3;">
									{article.title}
								</h2>

								<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.55; margin: 0; flex: 1; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
									{article.excerpt}
								</p>

								<div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #e8e3da; padding-top: 16px; margin-top: 16px;">
									<div style="display: flex; align-items: center; gap: 8px;">
										<div style="width: 28px; height: 28px; border-radius: 999px; background: rgba(200,184,160,0.2); display: flex; align-items: center; justify-content: center;">
											<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #2a2018;">{article.author[0]}</span>
										</div>
										<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #2a2018;">{article.author}</span>
									</div>
									<span style="display: flex; align-items: center; gap: 4px; font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70;">
										<Calendar class="h-3 w-3" />
										{formatDate(article.date)}
									</span>
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>
