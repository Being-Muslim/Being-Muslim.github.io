<script lang="ts">
	import { base } from '$app/paths';
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
<section style="background: #2a2018; padding: 100px 0 80px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 560px; margin: 0 auto; text-align: center;">
			<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #c8b8a0; text-transform: uppercase; letter-spacing: 1.5px;">Knowledge & Guidance</span>
			<h1 style="font-family: 'Source Serif 4', serif; font-size: clamp(36px, 5vw, 52px); font-weight: 400; line-height: 1.1; color: #faf9f5; margin: 20px 0 0;">
				Resources & Articles
			</h1>
			<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.65; color: rgba(250,249,245,0.6); margin: 16px 0 0;">
				Thoughtful articles to guide you on every step of your Islamic journey — from foundational beliefs to daily practice.
			</p>
		</div>
	</div>
</section>

<!-- Search & Filters -->
<section style="background: #faf9f5; padding: 48px 0 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 560px; margin: -40px auto 0; position: relative; z-index: 10;">
			<!-- Search Bar -->
			<div style="position: relative;">
				<Search class="h-5 w-5" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #8a7e70;" />
				<input
					type="text"
					placeholder="Search articles..."
					bind:value={search}
					style="font-family: 'DM Sans', sans-serif; width: 100%; height: 48px; border-radius: 12px; border: 1px solid #d8d2c8; background: #fff; padding: 0 16px 0 44px; font-size: 14px; color: #2a2018; outline: none; box-shadow: 0 4px 20px rgba(0,0,0,0.08);"
				/>
			</div>

			<!-- Category Filter Pills -->
			<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-top: 24px;">
				{#each articleCategories as category}
					<button
						onclick={() => (activeCategory = category)}
						style="font-family: 'DM Sans', sans-serif; border-radius: 999px; padding: 8px 18px; font-size: 13px; font-weight: 500; border: 1px solid {activeCategory === category ? '#2a2018' : '#d8d2c8'}; background: {activeCategory === category ? '#2a2018' : 'transparent'}; color: {activeCategory === category ? '#faf9f5' : '#8a7e70'}; cursor: pointer; transition: all 0.2s;"
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Articles Grid -->
<section style="background: #faf9f5; padding: 48px 0 64px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		{#if filteredArticles.length === 0}
			<div style="text-align: center; padding: 64px 0;">
				<BookOpen class="h-12 w-12" style="color: rgba(138,126,112,0.3); margin: 0 auto 16px;" />
				<h3 style="font-family: 'Source Serif 4', serif; font-size: 20px; font-weight: 400; color: #2a2018; margin: 0 0 8px;">No articles found</h3>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; margin: 0 0 24px;">
					Try adjusting your search or filter to find what you're looking for.
				</p>
				<button
					class="bm-btn-outline"
					onclick={() => {
						search = '';
						activeCategory = 'All';
					}}
				>
					Clear Filters
				</button>
			</div>
		{:else}
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
				{#each filteredArticles as article}
					<a href="{base}/c/articles/{article.slug}" style="text-decoration: none; display: block;" class="bm-title-underline-parent">
						<article class="bm-card-hover" style="display: flex; flex-direction: column; height: 100%; border-radius: 14px; overflow: hidden; background: #e2dcd2;">
							<!-- Image Placeholder -->
							<div style="aspect-ratio: 16/10; background: linear-gradient(135deg, rgba(200,184,160,0.4), rgba(226,220,210,0.6)); display: flex; align-items: center; justify-content: center;">
								<BookOpen class="h-10 w-10" style="color: rgba(138,126,112,0.3);" />
							</div>

							<!-- Content -->
							<div style="flex: 1; display: flex; flex-direction: column; padding: 20px;">
								<div style="display: flex; align-items: center; gap: 10px;">
									<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #2a2018; background: rgba(250,249,245,0.6); padding: 3px 10px; border-radius: 999px;">{article.category}</span>
									<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; display: flex; align-items: center; gap: 4px;">
										<Clock class="h-3 w-3" />
										{article.readingTime}
									</span>
								</div>

								<h2 class="bm-title-underline" style="font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 12px 0 0; line-height: 1.35;">
									{article.title}
								</h2>

								<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; line-height: 1.55; color: #8a7e70; margin: 10px 0 0; flex: 1; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
									{article.excerpt}
								</p>

								<div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(200,184,160,0.3); padding-top: 14px; margin-top: 16px;">
									<div style="display: flex; align-items: center; gap: 8px;">
										<div style="width: 28px; height: 28px; border-radius: 999px; background: rgba(200,184,160,0.3); display: flex; align-items: center; justify-content: center;">
											<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #2a2018;">{article.author[0]}</span>
										</div>
										<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; color: #2a2018;">{article.author}</span>
									</div>
									<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; color: #8a7e70; display: flex; align-items: center; gap: 4px;">
										<Calendar class="h-3 w-3" />
										{formatDate(article.date)}
									</span>
								</div>
							</div>
						</article>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>
