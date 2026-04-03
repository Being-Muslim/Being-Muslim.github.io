<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft, Save, Eye, Clock, Image, X, Trash2 } from 'lucide-svelte';

	// In production, load from API using $page.params.id
	const articleId = $derived($page.params.id);

	// Mock: pre-populated for editing
	let title = $state('Brief Overview of Islam');
	let slug = $state('brief-overview-of-islam');
	let excerpt = $state('A clear and accessible introduction to the core beliefs, practices, and history of Islam for those just beginning to learn.');
	let body = $state(`Islam is one of the world's major religions, with over 1.8 billion followers globally. The word "Islam" means "submission to God" in Arabic, and its followers are called Muslims.

## Core Beliefs

Muslims believe in one God (Allah in Arabic), and that Muhammad (peace be upon him) is the final messenger in a long line of prophets that includes Abraham, Moses, and Jesus.

## The Five Pillars

1. **Shahada** — Declaration of faith
2. **Salah** — Five daily prayers
3. **Zakat** — Charitable giving
4. **Sawm** — Fasting during Ramadan
5. **Hajj** — Pilgrimage to Mecca

## Getting Started

If you're new to Islam, we recommend starting with our Beginner's Guide for practical first steps.`);
	let category = $state('foundations');
	let status = $state('published');
	let tags = $state<string[]>(['islam', 'foundations', 'beginners']);
	let tagInput = $state('');
	let featured = $state(true);
	let coverImage = $state('https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png');
	let scheduledAt = $state('');

	function addTag() {
		const t = tagInput.trim();
		if (t && !tags.includes(t)) {
			tags = [...tags, t];
		}
		tagInput = '';
	}

	function removeTag(tag: string) {
		tags = tags.filter((t) => t !== tag);
	}

	function handleTagKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			addTag();
		}
	}
</script>

<svelte:head>
	<title>Edit: {title} — Being Muslim Admin</title>
</svelte:head>

<div class="editor-page">
	<!-- Top bar -->
	<div class="editor-topbar">
		<a href="/admin/articles" class="editor-back">
			<ArrowLeft class="h-4 w-4" />
			Articles
		</a>
		<div class="editor-actions">
			<button class="editor-btn-danger">
				<Trash2 class="h-4 w-4" />
			</button>
			<button class="editor-btn-ghost">
				<Eye class="h-4 w-4" />
				Preview
			</button>
			<button class="editor-btn-primary">
				<Save class="h-4 w-4" />
				Update
			</button>
		</div>
	</div>

	<div class="editor-layout">
		<!-- Main editor -->
		<div class="editor-main">
			<input
				type="text"
				class="editor-title-input"
				placeholder="Article title"
				bind:value={title}
			/>

			<div class="editor-slug">
				<span class="editor-slug-prefix">/learn/</span>
				<input
					type="text"
					class="editor-slug-input"
					placeholder="article-slug"
					bind:value={slug}
				/>
			</div>

			<textarea
				class="editor-excerpt"
				placeholder="Write a short excerpt..."
				rows="2"
				bind:value={excerpt}
			></textarea>

			<div class="editor-body-wrap">
				<div class="editor-toolbar">
					<span style="font-size: 12px; color: #9ca3af; font-weight: 500;">CONTENT</span>
				</div>
				<textarea
					class="editor-body"
					placeholder="Write your article content here..."
					bind:value={body}
				></textarea>
			</div>
		</div>

		<!-- Sidebar -->
		<div class="editor-sidebar">
			<div class="sidebar-card">
				<h3 class="sidebar-card-title">Status</h3>
				<select class="sidebar-select" bind:value={status}>
					<option value="draft">Draft</option>
					<option value="published">Published</option>
					<option value="scheduled">Scheduled</option>
					<option value="archived">Archived</option>
				</select>
				{#if status === 'scheduled'}
					<div style="margin-top: 12px;">
						<label class="sidebar-label">Publish Date</label>
						<input type="datetime-local" class="sidebar-input" bind:value={scheduledAt} />
					</div>
				{/if}
				<label class="sidebar-checkbox" style="margin-top: 12px;">
					<input type="checkbox" bind:checked={featured} />
					<span>Featured article</span>
				</label>
			</div>

			<div class="sidebar-card">
				<h3 class="sidebar-card-title">Category</h3>
				<select class="sidebar-select" bind:value={category}>
					<option value="">Select category</option>
					<option value="foundations">Foundations</option>
					<option value="new-muslims">New Muslims</option>
					<option value="belief">Belief</option>
					<option value="practice">Practice</option>
					<option value="community">Community</option>
					<option value="lifestyle">Lifestyle</option>
				</select>
			</div>

			<div class="sidebar-card">
				<h3 class="sidebar-card-title">Tags</h3>
				<div class="tags-wrap">
					{#each tags as tag}
						<span class="tag-chip">
							{tag}
							<button class="tag-remove" onclick={() => removeTag(tag)} aria-label="Remove tag">
								<X class="h-3 w-3" />
							</button>
						</span>
					{/each}
				</div>
				<input
					type="text"
					class="sidebar-input"
					placeholder="Add tag and press Enter"
					bind:value={tagInput}
					onkeydown={handleTagKeydown}
				/>
			</div>

			<div class="sidebar-card">
				<h3 class="sidebar-card-title">Cover Image</h3>
				{#if coverImage}
					<div style="position: relative; margin-bottom: 8px;">
						<img src={coverImage} alt="Cover" style="width: 100%; border-radius: 8px; aspect-ratio: 16/9; object-fit: cover;" />
						<button class="cover-remove" onclick={() => (coverImage = '')} aria-label="Remove cover image">
							<X class="h-3.5 w-3.5" />
						</button>
					</div>
				{:else}
					<button class="cover-upload">
						<Image class="h-5 w-5" style="color: #9ca3af;" />
						<span>Upload cover image</span>
					</button>
				{/if}
			</div>

			<!-- Meta info -->
			<div class="sidebar-card" style="background: #fafafa; border-color: #f3f4f6;">
				<p class="sidebar-meta">Created: Mar 28, 2026</p>
				<p class="sidebar-meta">Updated: Mar 30, 2026</p>
				<p class="sidebar-meta">Author: Dr. Asad Tarsin</p>
				<p class="sidebar-meta">Reading time: ~10 min</p>
			</div>
		</div>
	</div>
</div>

<style>
	.editor-page { max-width: 1200px; }
	.editor-topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 12px; }
	.editor-back { display: inline-flex; align-items: center; gap: 6px; font-size: 14px; color: #6b7280; text-decoration: none; font-weight: 500; }
	.editor-back:hover { color: #1a1a2e; }
	.editor-actions { display: flex; gap: 8px; }
	.editor-btn-ghost { display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: none; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 13px; font-weight: 500; color: #374151; cursor: pointer; transition: all 0.15s; }
	.editor-btn-ghost:hover { background: #f9fafb; border-color: #d1d5db; }
	.editor-btn-primary { display: inline-flex; align-items: center; gap: 6px; padding: 8px 20px; background: #1a1a2e; color: #fff; border: none; border-radius: 8px; font-size: 13px; font-weight: 500; cursor: pointer; transition: background 0.15s; }
	.editor-btn-primary:hover { background: #2d2d4e; }
	.editor-btn-danger { padding: 8px; background: none; border: 1px solid #fecaca; border-radius: 8px; color: #ef4444; cursor: pointer; display: flex; transition: all 0.15s; }
	.editor-btn-danger:hover { background: #fef2f2; }

	.editor-layout { display: grid; grid-template-columns: 1fr; gap: 24px; }
	@media (min-width: 768px) { .editor-layout { grid-template-columns: 1fr 300px; } }

	.editor-main { display: flex; flex-direction: column; gap: 12px; }
	.editor-title-input { font-size: 28px; font-weight: 700; border: none; outline: none; padding: 0; color: #1a1a2e; background: transparent; }
	.editor-title-input::placeholder { color: #d1d5db; }
	.editor-slug { display: flex; align-items: center; font-size: 13px; }
	.editor-slug-prefix { color: #9ca3af; }
	.editor-slug-input { border: none; outline: none; font-size: 13px; color: #6b7280; background: transparent; padding: 0; }
	.editor-excerpt { font-size: 14px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px; resize: none; outline: none; color: #374151; line-height: 1.5; transition: border-color 0.15s; }
	.editor-excerpt:focus { border-color: #3b82f6; }

	.editor-body-wrap { border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: #fff; }
	.editor-toolbar { padding: 10px 16px; border-bottom: 1px solid #f3f4f6; background: #fafafa; }
	.editor-body { width: 100%; min-height: 400px; border: none; outline: none; padding: 20px; font-size: 15px; line-height: 1.7; resize: vertical; color: #1a1a2e; font-family: inherit; box-sizing: border-box; }
	.editor-body::placeholder { color: #d1d5db; }

	.sidebar-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin-bottom: 16px; }
	.sidebar-card-title { font-size: 13px; font-weight: 600; margin: 0 0 12px; color: #374151; }
	.sidebar-label { font-size: 12px; font-weight: 500; color: #6b7280; display: block; margin-bottom: 4px; }
	.sidebar-select, .sidebar-input { width: 100%; padding: 8px 10px; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 13px; outline: none; color: #374151; background: #fff; box-sizing: border-box; transition: border-color 0.15s; }
	.sidebar-select:focus, .sidebar-input:focus { border-color: #3b82f6; }
	.sidebar-checkbox { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #374151; cursor: pointer; }
	.sidebar-meta { font-size: 12px; color: #9ca3af; margin: 0 0 4px; }

	.tags-wrap { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
	.tag-chip { display: inline-flex; align-items: center; gap: 4px; padding: 3px 8px; background: #eff6ff; color: #3b82f6; border-radius: 6px; font-size: 12px; font-weight: 500; }
	.tag-remove { border: none; background: none; cursor: pointer; padding: 0; color: #93c5fd; display: flex; }
	.tag-remove:hover { color: #3b82f6; }

	.cover-upload { width: 100%; padding: 24px; border: 2px dashed #e5e7eb; border-radius: 8px; background: #fafafa; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 13px; color: #9ca3af; transition: border-color 0.15s; }
	.cover-upload:hover { border-color: #3b82f6; }
	.cover-remove { position: absolute; top: 8px; right: 8px; width: 24px; height: 24px; border-radius: 999px; background: rgba(0,0,0,0.6); color: #fff; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; }
</style>
